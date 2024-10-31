import SidebarInput from './SidebarInput';
import SidebarButton from './SidebarButton';
import { useState } from 'react';

//below is a function to add a new item to the list
interface SidebarProps {
  onAddItem: (itemName: string) => void;
}

//manages imput value
export default function Sidebar({ onAddItem }: SidebarProps) {
  const [inputValue, setInputValue] = useState('');

//handles add button click & clears the input
  const handleAddClick = () => {
    onAddItem(inputValue); 
    setInputValue(''); 
  };

  return (
    <div className="border border-end p-3" style={{ height: 'auto' }}>
      <SidebarInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <div style={{ marginTop: '10px' }}>
        <SidebarButton onClick={handleAddClick} />
      </div>
    </div>
  );
}
