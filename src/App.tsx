import { useState } from 'react';
import Sidebar from './SideBar';
import ItemList from './ItemList';

export default function App() {
 
  const [items, setItems] = useState<string[]>(['Rice', 'Bread', 'Milk', 'Eggs']);

  //adds a new item to the list if its not empty
  const addItem = (itemName: string) => {
    if (itemName.trim()) {
      setItems((prevItems) => [...prevItems, itemName]);
    }
  };

  //deletes an item from the list based on the name
  const deleteItem = (itemToDelete: string) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
  };

  //updates an items name in the list
  const updateItem = (oldName: string, newName: string) => {
    setItems((prevItems) => 
      prevItems.map((item) => (item === oldName ? newName : item))
    );
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <div className="col-3 border-end">
        <Sidebar onAddItem={addItem} />
      </div>
      <div className="flex-grow-1 d-flex flex-column mt-2">
        <ItemList items={items} onDeleteItem={deleteItem} onUpdateItem={updateItem} />
      </div>
    </div>
  );
}