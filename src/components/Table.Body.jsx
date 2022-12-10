import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import { getAll, deleteOne, updateOne } from "../apis/products.api";
import AddAndUpdateModal from "./AddItemsModal";

const UpdateItemsModal = ({ setShowUpdItemModal, setItemsToUpd, setItems }) => {


  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h4 className="text-2xl font-semibold text-black">
              Edit Item
            </h4>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowUpdItemModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                Title
              </label>
              <input value={itemsToUpd.title}
                onChange={e => {
                  setItemsToUpd({
                    ...itemsToUpd,
                    title: e.target.value,
                  })
                }} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Description
              </label>
              <input value={itemsToUpd.description}
                onChange={e => {
                  setItemsToUpd({
                    ...itemsToUpd,
                    description: e.target.value,
                  })
                }}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Cost
              </label>
              <input value={itemsToUpd.cost}
                onChange={e => {
                  setItemsToUpd({
                    ...itemsToUpd,
                    cost: e.target.value,
                  })
                }}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Username
              </label>
              <input value={itemsToUpd.userName}
                onChange={e => {
                  setItemsToUpd({
                    ...itemsToUpd,
                    userName: e.target.value,
                  })
                }}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => setShowUpdItemModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => {
                updateOne({
                  ...itemsToUpd
                }).then((data)=>{
                  setItems([...data])
                })
                setShowUpdItemModal(false)
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
const TableBody = () => {

  const [items, setItems] = useState([])
  const [itemsToUpd, setItemsToUpd] = useState();
  const [showUpdItemModal, setShowUpdItemModal] = useState(false)


  useEffect(() => {
    getAll().then((data) => {
      setItems([...data.data])
    })
  })

  const deleteProduct = (item_id) => {
    deleteOne(
      item_id
    ).then((data) => {
      if (data) {
        var items_to_upd = [...items];
        items_to_upd = items_to_upd.filter(a => a.ID !== item_id);
        items_to_upd.map((a, index) => a.id === index);
        setItems([...items_to_upd]);
      }

    });
  }

  return (
    <>
      <tbody>
        {[...items].map((item) => (
          <tr>
            <td className="border border-gray-900">000{item.ID}</td>
            <td className="border border-gray-900">{item.title}</td>
            <td className="border border-gray-900 text-xs py-2">
              {item.description}
            </td>
            <td className="border border-gray-900">{item.cost}$</td>
            <td className="border border-gray-900">
              <div className="actions">
                <div
                  onClick={() => {
                    setItemsToUpd({ ...item });
                    setShowUpdItemModal(true)
                  }}
                  className="btn font-bold cursor-pointer text-blue-500">

                  Edit
                </div>
                <div
                  onClick={() =>
                    deleteProduct(item.ID)
                  }
                  className="btn font-bold cursor-pointer text-red-500">
                  Delete
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {
        showUpdItemModal ?
          <UpdateItemsModal
            setShowUpdItemModal={setShowUpdItemModal}
            setItemsToUpd={setItemsToUpd}
            setItems={setItems}
          /> : null
      }
    </>
  );
};

export default TableBody;
