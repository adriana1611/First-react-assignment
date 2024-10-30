import Sidebar from './SideBar'
import ItemList from './ItemList'
import ItemCard from './ItemCard'


export default function App() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
    <div className="col-3 border-end">
      <Sidebar />
    </div>

    <div className="flex-grow-1 d-flex flex-column mt-2">
      <ItemList />
    </div>

  </div>
  )
}


