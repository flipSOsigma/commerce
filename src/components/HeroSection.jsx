import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const [dataCard, setDataCard] = useState()
  useEffect(() => {
    fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(res => setDataCard(res))
  }, [])

  console.log(dataCard)
  return (
    <div className='w-full px-24 py-10 flex flex-col items-center'>
      <h1 className='text-3xl font-semibold flex gap-1 items-center'>Welcome to <p className="text-3xl flex-2 font-bold flex items-start">Zigger<span className='ml-1 text-xs font-normal text-orange-500'>PATH</span></p> buy anything you want to buy</h1>
      <p className='max-w-3xl text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptatum.</p>
      <div className="mt-10 grid grid-cols-7 gap-4">
      {dataCard?.products?.map(data => (
        <Link to={'/product/' + data.id}>
          <Card key={data.id} data={data}/>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default HeroSection
