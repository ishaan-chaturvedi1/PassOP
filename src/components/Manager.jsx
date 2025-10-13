import React, { useCallback, useRef } from 'react'
import { useState, useEffect } from "react"
import Password from './Password'
import { v4 as uuidv4 } from "uuid"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Manager = () => {

    useEffect(() => {
        let passwordString = localStorage.getItem("passwords");
        if (passwordString) {
            let passwords = JSON.parse(passwordString);
            setpasswords(passwords)
        }
    }, [])


    const [username, setusername] = useState("")
    const [pass, setpass] = useState("")
    const [website, setwebsite] = useState("")
    const [passwords, setpasswords] = useState([])

    const ref = useRef();
    const passwordRef = useRef();


      const copyText = (text) => {
    navigator.clipboard.writeText(text);
  }


    const showPassword = () => {
        passwordRef.current.type="text"
        console.log(ref.current.src)
        if (ref.current.src.includes("/icons/eyecross.png")){
            ref.current.src = "/icons/eye.png";
            passwordRef.current.type = "text";
        }
        else {
            ref.current.src = "/icons/eyecross.png";
            passwordRef.current.type = "password";
        }
    }

    const editPassword = (id) => {
        let passwordTargeted = passwords.filter(item=>{
            return item.id==id
        })
        deletePassword(id)
        console.log(passwordTargeted[0])
        setusername(passwordTargeted[0].username);
        setpass(passwordTargeted[0].pass);
        setwebsite(passwordTargeted[0].website);
    }

    const deletePassword = (id) => {
        let newPasswords = passwords.filter(item => {
            return item.id != id
        })
        console.log(typeof (newPasswords))
        setpasswords(newPasswords)
        saveToLs(newPasswords)
    }

    const saveToLs = (newPasswords) => {
        localStorage.setItem("passwords", JSON.stringify(newPasswords))
    }

    const addPassword = () => {
        setpasswords([...passwords, { pass, website, username, id: uuidv4() }])
        saveToLs([...passwords, { pass, website, username, id: uuidv4() }])
    }

    const handleChange = (e) => {
        if (e.target.name === "website input") {
            setwebsite(e.target.value);
        }
        else if (e.target.name === "password input") {
            setpass(e.target.value)
        }
        else if (e.target.name === "username input") {
            setusername(e.target.value)
        }
    }

    return (
        <>

        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition="Bounce"
/>

            <div className="container mx-auto md:max-w-[59vw] w-full min-h-[68.8vh]">

                <h1 className="mt-5 logo text-[2.25em] font-bold text-center">
                    <span className='text-green-700'>&lt;</span>
                    <span className=''>Pass</span>
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className="text-center text-green-700 font-bold text-lg">Your own Password Manager</p>

                <div className="text-white flex flex-col p-4 md:mycontainer">
                    <input value={website} name="website input" onChange={(e) => handleChange(e)} placeholder="Enter website URL" className='text-gray-500 rounded-full border border-green-500  bg-white p-1 px-3 m-2' type="text" />
                    <div className="flex md:flex-row flex-col text-[1rem]">
                        <input value={username} name="username input" onChange={(e) => handleChange(e)} placeholder="Enter Username" className='text-gray-500 rounded-full border border-green-500  bg-white p-1 px-3 m-2 md:w-1/2' type="text" />
                        <div className='relative md:w-1/2 m-2'>
                            <input value={pass} type="password" id="password" ref = {passwordRef} name="password input" onChange={(e) => handleChange(e)} placeholder="Enter Password" className='text-gray-500 rounded-full border border-green-500 bg-white w-full p-1 px-3' />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eyecross.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={() => addPassword()} className='bg-green-500 border border-green-800 text-md py-1 px-4 w-fit cursor-pointer rounded-full flex justify-center items-center text-center mx-auto hover:bg-green-400'><lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>Add</button>
                </div>
                <div className="passwords_tab mx-auto max-w-[92vw] container ml-[2.3em] mb-15">
                    <h2 className='font-bold text-2xl'>Your Passwords</h2>
                    {passwords.length < 1 ? <div className='text-md'>No passwords to display.</div> :

                        <table className="table-auto rounded-md mt-2 overflow-hidden overflow-x-hidden max-w-[91%] min-w-[91%]">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className='md:text-lg text-sm'>Website</th>
                                    <th className='md:text-lg text-sm'>Username</th>
                                    <th className='md:text-lg text-sm'>Password</th>
                                    <th className='md:text-lg text-sm'>Actions</th>
                                </tr>
                            </thead>

                            <tbody className='bg-green-100'>
                                {passwords.map(item => {
                                    return (
                                        <Password onEdit={editPassword} onCopy={copyText} onDelete={deletePassword} id={item.id} key={item.id} pass={item.pass} website={item.website} username={item.username}></Password>
                                    )
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div >


        </>
    )
}


export default Manager



{/* <table className="table-fixed overflow-y-scroll passwords flex gap-4 flex-col mt-2 bg-green-100 rounded-lg w-[89%] max-h-[30vh]">
                                <tr className='bg-green-800 w-full flex justify-evenly'>
                                    <th className='text-center font-bold text-white '>Site</th>
                                    <th className='text-center font-bold text-white'>Username</th>
                                    <th className='text-center font-bold text-white'>Password</th>
                                    <th className='text-center font-bold text-white'>Actions</th>
                                </tr>
                            </table> */}