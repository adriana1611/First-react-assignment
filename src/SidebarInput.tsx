interface SidebarInputProps {
    //current value of the input 
    value: string;
    //function to handle input changes
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function SidebarInput({ value, onChange }: SidebarInputProps) {
    return (
      <input
        type="text"
        placeholder="Enter item name"
        className="form-control mt-2"
        value={value}
        onChange={onChange}
      />
    );
  }
  
  