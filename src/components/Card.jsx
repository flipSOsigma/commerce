import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";

const Card = (props) => {
  function truncateWord(text, limit) {
    limit = limit || 12;
    if (text.length <= limit) {
      return text;
    } 
    return `${text.slice(0, limit)}...`;
  }
  return (
    <div className='w-full rounded bg-white overflow-hidden max-w-md flex flex-col items-start justify-start'>
      <img src={props.data.images[0]} className='bg-orange-50 p-2 mb-1 w-full rounded aspect-square' alt="" />
      <h1>{truncateWord(props.data.title)}</h1>
      <b className='text-base'>USD {props.data.price}</b>
      <p className='flex text-orange-500 text-xs items-center gap-1'><IoIosStar className=''/>{props.data.rating}</p>
      <p className='flex text-xs items-center gap-1'><IoBagCheck/>{props.data.brand ? props.data.brand : "from Zigger PATH"}</p>
    </div>
  )
}

export default Card
