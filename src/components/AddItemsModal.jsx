import { useState } from "react";
import { createOne } from "../apis/products.api";

const AddItemsModal = ({ setShowAddItemModal }) => {
  const [itemsToAdd, setItemsToAdd] = useState({
    title: "",
    description: "",
    cost: "",
    userName: ""
  });

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h4 className="text-2xl font-semibold text-black">
              Add New Item
            </h4>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowAddItemModal(false)}
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
              <input value={itemsToAdd.title}
                onChange={e => {
                  setItemsToAdd({
                    ...itemsToAdd,
                    title: e.target.value,
                  })
                }} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Description
              </label>
              <input value={itemsToAdd.description}
                onChange={e => {
                  setItemsToAdd({
                    ...itemsToAdd,
                    description: e.target.value,
                  })
                }}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Cost
              </label>
              <input value={itemsToAdd.cost}
                onChange={e => {
                  setItemsToAdd({
                    ...itemsToAdd,
                    cost: e.target.value,
                  })
                }}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
              <label className="block text-black text-sm font-bold mb-1">
                Username
              </label>
              <input value={itemsToAdd.userName}
                onChange={e => {
                  setItemsToAdd({
                    ...itemsToAdd,
                    userName: e.target.value,
                  })
                }}
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => setShowAddItemModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => {
                createOne({
                  ...itemsToAdd
                })
                setShowAddItemModal(false)
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
export default AddItemsModal;