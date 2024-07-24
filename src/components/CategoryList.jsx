import React, { useEffect, useState } from 'react'

const CategoryList = () => {

  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
    .then(res => res.json())
    .then(setCategoryList);
  }, [])

  function truncateWord(text, limit) {
    limit = limit || 10;
    if (text.length <= limit) {
      return text;
    } 
    return `${text.slice(0, limit)}...`;
  }

  return (
    <div className='grid grid-cols-8 py-10 gap-2 px-24'>
      {categoryList.map(category => (
        <p className='px-4 py-2 w-full rounded-full text-xs flex items-center border border-orange-500'>{truncateWord(category)}</p>
      ))}
    </div>
  )
}

export default CategoryList
