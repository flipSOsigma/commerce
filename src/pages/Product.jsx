import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { IoIosStar } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { TbSquareLetterWFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const Product = () => {
  const { productId } = useParams()
  const [ product, setProduct ] = useState()
  useEffect(() => {
    fetch('https://dummyjson.com/products/' + productId)
    .then(res => res.json())
    .then(setProduct)
  }, [])
  console.log(product)

  const fixRating = (i) => {
    var fixedRating = Math.floor(i)
    var star = []
    if(fixedRating == 1) {
      star.push(<IoIosStar/>)
    }else if(fixedRating == 2 ) {
      star.push(<IoIosStar/>, <IoIosStar/> )
    }else if(fixedRating == 3 ) {
      star.push(<IoIosStar/>, <IoIosStar/>, <IoIosStar/> )
    }else if(fixedRating == 4 ) {
      star.push(<IoIosStar/>, <IoIosStar/>, <IoIosStar/>, <IoIosStar/> )
    }else if(fixedRating == 5 ) {
      star.push(<IoIosStar/>, <IoIosStar/>, <IoIosStar/>, <IoIosStar/>,<IoIosStar/> )
    }
    return star
  }

  const cartPricing = (i) => {
    const place = document.getElementById('cart-price')
    const price = product.price
    console.log(place.innerHTML = price * i)
  }

  return (
    <div>
      <Navbar/>
      {product ? ( 
        <div className="flex flex-col w-full px-44 items-center">
          <div className='flex items-start mt-4 gap-8'>
            <div className='flex flex-col max-w-sm w-full gap-2'>
              <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
              <div className="gap-2 grid grid-cols-4">
                <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='flex text-xs text-orange-500  items-center gap-1'><span className='text-black'>barode : </span>{product.meta.barcode}</p>
              <b className='text-2xl'>{product.title}</b>
              <p className='flex mt-2 font-medium  text-orange-500  items-center gap-1'>
                {fixRating(product.rating)} 
                <span> ({product.rating}) <span className="text-black">from avarage {product.minimumOrderQuantity} people</span></span>
              </p>
              <b className='text-xl mt-5'>USD {product.price}</b>
              <p className='flex gap-1 items-center'><TbSquareLetterWFilled/> {product.warrantyInformation}</p>
              <b className='mt-4 text-orange-500'>Product Detail</b>
              <ul className='list-disc px-4'>
                <li className='mt-2'>Description</li>
                <p className=''>{product.description}</p>
                <li className='mt-2'>Dimension</li>
                {product.dimensions ? (
                  <div className="flex gap-4">
                    <p>Depth : {product.dimensions.depth}cm</p>
                    <p>Height : {product.dimensions.height}cm</p>
                    <p>Width : {product.dimensions.width}cm</p>
                  </div>
                ) : ( 
                  <div>Uploader doesnt input the dimension</div>
                )}
              </ul>
              <div className='mt-10 mb-2'>
                <b className='text-xl'>USD <span id='cart-price'>{product.price}</span></b>
                <p className='text-sm text-orange-500 flex items-center gap-1'><IoMdTime/> {product.returnPolicy ? product.returnPolicy : 'no return policy'}</p>
              </div>
              <div className='flex gap-1'>
                <input min={1} type="number" name="" onChange={(e) => {cartPricing(e.target.value)}} className=' max-w-36 rounded py-1 border text-center border-orange-500' id="" />
                <button className='py-1 whitespace-nowrap border border-orange-500 rounded-md px-10 text-sm '>Add Cart</button>
                <button className='py-1 whitespace-nowrap border border-orange-500 rounded-md px-10 text-sm text-white bg-orange-500'>Buy Now</button>
              </div>
              <div className='flex justify-between items-start gap-2 mt-6 p-4 rounded bg-orange-50'>
                <div className="flex items-start gap-2">
                  <div className="w-10 aspect-square overflow-hidden border-2 bg-gray-800 border-orange-500 rounded-full">
                    <img src='https://dummyjson.com/icon/AlifMahendra123/150' alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className='text-orange-500 font-bold'>{product.brand ? product.brand : 'zigger.path' }</p>
                    <p className='text-gray-500 text-xs'>{product.brand ? product.brand : 'zigger.path' }@gmail.com</p>
                    <p className='text-xs mt-4 flex gap-2 items-center'>540k Following<GoDotFill/>412 Products<GoDotFill/>4.5 Overall Rating</p>
                  </div>
                </div>
                <div className="flex gap-1 ml-4 mt-1">
                  <button className='py-1 whitespace-nowrap border border-orange-500 rounded-md px-10 text-sm '>Follow</button>
                  <button className='py-1 whitespace-nowrap border border-orange-500 rounded-md px-10 text-sm text-white bg-orange-500'>Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-8 items-start flex gap-10'>
            <div className="w-full max-w-sm bg-orange-50 p-4 rounded-md">
              <b>Rating from buyer</b>
              <p className='text-5xl mt-8'>
                {product.rating}
                <span className='text-sm'> / 5.0</span>
              </p>
              <p className='mt-2 text-sm'>90% people satisfied</p>
              <p className='flex mt-1 font-medium  text-orange-500  items-center gap-1'>
                {fixRating(product.rating)} 
              </p>
            </div>
            <div className='w-full'>
              <b className='w-full text-orange-500'>Review</b>
              <div className="flex flex-col w-full">
                {product.reviews.map(review => (
                  <div className="flex py-6 border-b gap-2 items-start w-full" key={review.reviewerName}>
                    <img src={"https://dummyjson.com/icon/" + review.reviewerName} className='border-2 border-orange-500 w-10 aspect-square rounded-full object-cover' alt="" />
                    <div className="flex-col w-full">
                      <b className="text-sm text-orange-500">{review.reviewerName}</b>
                      <p className='text-xs'>{review.reviewerEmail}</p>
                      <p className='mt-2 flex text-orange-500 items-center gap-1'><span className='text-sm'>({review.rating})</span> {fixRating(review.rating)}</p>
                      <p className="text-sm">{review.comment}</p>
                      <div className="gap-2 grid grid-cols-4 max-w-xs mt-4">
                        <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                        <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                        <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                        <img src={product.images[0]} className=' aspect-square w-full rounded-md bg-orange-50' alt="" />
                      </div>
                      <p className="w-full flex justify-end text-xs text-orange-500 text-end">{review.date}</p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Data .....</div>
      )}
    </div>
  )
}

export default Product
