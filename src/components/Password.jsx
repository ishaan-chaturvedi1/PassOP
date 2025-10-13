import React from 'react'

const Password = (props) => {



  return (
    <tr className='text-center '>
      <td className='max-w-[25%]'><div className='flex items-center justify-center'><a className='flex flex-wrap' href={props.website} target='__blank'>{props.website}</a><img onClick={()=> props.onCopy(props.website)} className='md:w-5 w-3 duration-150 cursor-pointer ml-1 active:scale-85' src="/icons/copy-01-stroke-rounded.svg" alt="copy" /></div></td>
      <td className='max-w-[25%]'><div className='flex items-center justify-center'><span className='flex flex-wrap'>{props.username}</span><img onClick={()=> props.onCopy(props.username)} className ='md:w-5 w-3 duration-150 cursor-pointer ml-1 active:scale-85' src="/icons/copy-01-stroke-rounded.svg" alt="copy" /></div></td>
      <td className='max-w-[25%]'><div className='flex items-center justify-center'><span className='flex flex-wrap font-bold'>{"*".repeat(props.pass.length)}</span><img onClick={()=> props.onCopy(props.pass)} className='md:w-5 w-3 dura tion-150 cursor-pointer ml-1 active:scale-85' src="/icons/copy-01-stroke-rounded.svg" alt="copy" /></div></td>
      <td className='action'> 
        <button className='cursor-pointer' onClick={()=> props.onEdit(props.id)}>
          <lord-icon className="md:w-7 w-5"
    src="https://cdn.lordicon.com/ntjwyxgv.json"
    trigger="hover">
</lord-icon>
        </button>
        <button className='cursor-pointer' onClick={()=> props.onDelete(props.id)}>
          <lord-icon className="md:w-7 w-5"
    src="https://cdn.lordicon.com/xyfswyxf.json"
    trigger="hover">
</lord-icon>
        </button>
      </td>
    </tr>
  )
}

export default Password;