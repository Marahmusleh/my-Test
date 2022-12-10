import { useState } from "react";
import AddItemsModal from './AddItemsModal'

const NewItem = () => {
  const [showAddItemModal, setShowAddItemModal] = useState(false)

  return (
    <div className="newItem flex items-center justify-end">
      <div className="newItemButton">
        <button
          onClick={() => {
            setShowAddItemModal(true)
          }}
          class="hover:bg-gray-200 bg-gray-100 text-black text-grey-darkest font-bold py-2 gap-2 px-4 rounded inline-flex items-center">
          <span>&#43;</span>
          <span>New Product</span>
        </button>
      </div>
      {
        showAddItemModal ?
          <AddItemsModal
            setShowAddItemModal={setShowAddItemModal}
          />
          : null
      }
    </div>
  );
};

export default NewItem;
