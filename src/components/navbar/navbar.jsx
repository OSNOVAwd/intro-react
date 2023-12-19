import { listItems } from "../../constants/data"

const Navbar = () => {
  return (
    <div className="flex items-center justify-around h-[12vh] bg-green-500">
      <h1 className="text-4xl font-bold text-white">V<span className="text-black">e</span>ge</h1>
      <ul className="flex gap-12">
          {
            listItems.map(item => (
                <li 
                  key={item.link} 
                  className="flex items-center text-white font-medium text-lg duration-300 hover:text-black"
                >
                  {item.link}
                </li>
            ))
          }
      </ul>
    </div>
  )
}

export default Navbar