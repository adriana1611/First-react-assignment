import React from 'react';

interface ItemCardProps {
  //name of the item,function to delete the item, & function to update the item name
  name: string;
  onDelete: () => void;
  onUpdate: (newName: string) => void;
}

// Handles change in item name input and calls onUpdate
const ItemCard = ({ name, onDelete, onUpdate }: ItemCardProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(e.target.value); 
  };

  return (
    <div className="bg-light border shadow-sm p-3 mb-3 d-flex justify-content-between align-items-center">
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        className="form-control me-2"
      />
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ItemCard;
