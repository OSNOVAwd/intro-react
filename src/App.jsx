import { About, Contact, Faq, HomePage, Login, Products, SignUp } from "./components"
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
  )
}

export default App