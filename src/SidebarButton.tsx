// below the function handles button clicks
interface SidebarButtonProps {
    onClick: () => void;
  }
  
  export default function SidebarButton({ onClick }: SidebarButtonProps) {
    return (
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Add
      </button>
    );
  }
  