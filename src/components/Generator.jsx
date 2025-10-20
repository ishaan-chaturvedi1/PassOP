    import React, { useState,useRef } from 'react'
    import { v4 as uuidv4} from "uuid"

    const Generator = () => {

        const [keywords, setkeywords] = useState([])
        const [keyword, setKeyword] = useState()
        const [password, setpassword] = useState()
        const [password_length, setPassword_length] = useState("random");
        const [letters, setLetters] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?']);
        const [length_color, setlength_color] = useState("text-gray-500");

        const pass_show = useRef();

        function generate_password(length){
            let pass_string = "";
            if (length=="random"){
                let min=Math.ceil(12);
                let max=Math.floor(25);
                length=Math.floor(Math.random() * (max - min + 1)) + min
                console.log(length)
            }
            for(let i = 0;i<=parseInt(length); i++){
                pass_string = pass_string+letters[Math.floor(Math.random() * letters.length)];
                console.log(pass_string)
            }     
            setpassword(pass_string)
        }

        function add_keyword(){
            if (keyword==undefined || keyword==""){
                return;
            }
            let random_index = letters[Math.floor(Math.random() * letters.length)];
            let new_letters = letters.filter(item => {
                return item != random_index
            })
            new_letters.push(keyword)
            setLetters(new_letters)
            setkeywords([...keywords, {keyword, id:uuidv4()}])
            console.log(letters)
            setPassword_length("random")
        }

        function remove_keyword(keyword_got){
            let new_keywords = keywords.filter(item => {
                return item.keyword != keyword_got
            })
            setkeywords(new_keywords)
            let new_letters = letters.filter(item => {
                return item != keyword_got
            })
            setLetters(new_letters)
        }
        function password_length_change(value){
            let num_value = Number(value)
            console.log(value)
            console.log(value.length)
            if (value=="random"){
                return
            }
            else if(!isNaN(num_value) && num_value<12){
                setlength_color("text-red-500")
            }
            else if (num_value>12){
                setlength_color("text-gray-600")
            }
            setPassword_length(value)
        }

        return (
        <div className='min-h-[71.9vh] flex flex-col items-center'>
            <h1 className="mt-5 logo text-[2.25em] font-bold text-center">
                <span className='text-green-700'>&lt;</span>
                <span className=''>Pass</span>
                <span className='text-green-700'>OP/&gt;</span>
            </h1>            
            <p className="text-center text-green-700 font-bold text-lg">Your own Password Manager</p>
            <input ref={pass_show} className={`mt-8 ${length_color} rounded-full border border-green-500  bg-white p-1 px-3 m-2 md:w-1/2`} value={password_length} onChange={(e) => {password_length_change(e.target.value)}} type="text" name="length_of_password" id="length_of_password" placeholder='Password length' />
            <div className="keyword_section flex items-center w-[95%] justify-center">
            <input className='text-gray-500 rounded-full border border-green-500  bg-white p-1 px-3 m-2 md:w-1/2 w-[47%]' value={keyword} onChange={(e) => {setKeyword(e.target.value)}} type="text" name="keyword" id="keyword" placeholder='Keyword' />
            <lord-icon onClick={() => {add_keyword()}} src="https://cdn.lordicon.com/efxgwrkc.json" className="cursor-pointer" trigger="hover"></lord-icon>
            </div>
            <div className="password flex items-center md:w-[60%] w-[90%]">
                <p className='flex text-center m-auto flex-wrap items-center font-bold text-lg'>Your new password is - {password}</p>
            </div>
            <button onClick={() => {generate_password(password_length)}} className='bg-green-500 border border-green-800 text-md py-1 px-4 w-fit cursor-pointer rounded-full flex justify-center text-white mt-3 items-center text-center mx-auto hover:bg-green-400'><lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>Generate</button>
            <button className='bg-green-500 border border-green-800 text-md py-2 px-8 w-fit cursor-pointer rounded-full flex justify-center text-white mt-3 items-center text-center mx-auto hover:bg-green-400 gap-1'><img onClick={()=> {navigator.clipboard.writeText(password)}} className ='w-5 duration-150 cursor-pointer ml-1 active:scale-85' src="/icons/copy-01-stroke-rounded.svg" alt="copy" /><span>Copy</span></button>
            <div className="keywords flex gap-2 m-2 flex-wrap md:max-w-[55vw] max-w-[95vw] items-center justify-center">
                {keywords.map(item => {
                    return <div key ={item.id} className='rounded-2xl m-1 px-2 border border-gray-200 p-1 flex gap-2' name={item.keyword}>{item.keyword}<img name={item.name} className='cursor-pointer' onClick={() => {remove_keyword(item.keyword)}} src="/icons/cross.svg" alt="delete"></img></div>
                })}
            </div>
        </div>
    )
    }

    export default Generator
