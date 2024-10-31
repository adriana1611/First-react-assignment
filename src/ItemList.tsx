import ItemCard from './ItemCard';

//List of item names,function to delete an item, function to update an item name
interface ItemListProps {
  items: string[];
  onDeleteItem: (itemToDelete: string) => void;
  onUpdateItem: (oldName: string, newName: string) => void;
}

export default function ItemList({ items, onDeleteItem, onUpdateItem }: ItemListProps) {
  return (
    <div className="d-flex justify-content-center align-items-start bg-light w-100 h-100 p-2">
      <div className="bg-white m-3 w-75 shadow-sm p-3 border">
        <h4>Shopping List</h4>
        {items.map((item, index) => (
          <ItemCard 
            key={index} 
            name={item} 
            onDelete={() => onDeleteItem(item)} 
            onUpdate={(newName) => onUpdateItem(item, newName)} 
          />
        ))}
      </div>
    </div>
  );
}