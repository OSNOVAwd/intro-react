import { useState } from "react"
import { SignUpImg } from "../../assets"
import Button from "../../form-elements/button/button"
import Input from "../../form-elements/input/input"

const SignUp = () => {

  const [sign, setSign] = useState(true)


  const handleSign = () => {
    if(!sign){
      setSign(false)
    }else {
      setSign(true)
    }
  }

  return (
    <div className="flex gap-16 items-center justify-center h-screen bg-gradient-to-b from-green-400 to-white">
      <div className="h-[70vh]">
        <h1 className="text-3xl text-white font-bold">Welcome to Sign Up page</h1>
        <img src={SignUpImg} alt="" 
        className="w-[530px] h-[350px] mt-16"/>
      </div>
      <div className="bg-white p-8 shadow-md rounded">
      <form className="flex flex-col bg-white w-[400px] gap-4 p-8 shadow-md
      rounded">
        <Input
        type={"text"}
         classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} placeholder={"Fullname"}/>
        <Input
        type={"text"}
        classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} placeholder={"Username"}/>
        <Input
         classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} placeholder={"Username"}/>
        <Input
         classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} placeholder={"Username"}/>
        <Button
         className={"bg-green-500 p-3 rounded text-white text-[10px] cursor-pointer hover:bg-green-400"}
         type={"button"}
         children={"Sign up"}
         />
      </form>

      <h1 className="text-center mt-4"><span>Already have an account?</span>
      <span className="text-sky-500 mx-2 hover:underline cursor-pointer" onClick={handleSign}>
        {sign ? 'Sign In': 'Sign Up'}
        </span>
        </h1>
      </div>
    </div>
  )
}

export default SignUp


function SignIn(){
  return(
    <form className="flex flex-col w-[400px] gap-4">
       <Input
         classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"} 
         placeholder={"Email adress"}/>
          <Input
         classes={"w-full h-10 rounded-md px-4 outline-none border-solid border"}
         placeholder={"Password"}/>
          <Button
         className={"bg-green-500 p-3 rounded text-white text-[18px] cursor-pointer hover:bg-green-400"}
         type={"button"}
         children={"Sign In"}/>
    </form>
  )
}