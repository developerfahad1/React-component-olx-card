import React from 'react'
import { Card } from './components/card'

export const App = () => {
  return (
    <>
    <h1 className='text-center text-white text-xl font-bold  bg-red-700  py-5  '>OLX CARD DESGIN </h1>
    <div className='flex flex-wrap justify-center mt-5 gap-5'>
    <Card   src="https://m.media-amazon.com/images/I/41zi-wRsJEL._SR290,290_.jpg " title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes" price = "30000"  />
      <Card   src="https://m.media-amazon.com/images/I/71tu0EYgjzL._AC_SL1500_.jpg" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes" price = "20000"  />
      <Card   src="https://m.media-amazon.com/images/I/71tu0EYgjzL._AC_SL1500_.jpg" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes" price = "20000"  />
    <Card   src="https://m.media-amazon.com/images/I/71tu0EYgjzL._AC_SL1500_.jpg" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes" price = "20000"  />
    <Card   src="https://m.media-amazon.com/images/I/71tu0EYgjzL._AC_SL1500_.jpg" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes" price = "20000"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"   />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
      <Card   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title = "Keyto Shoes" description = "The Best Shoes in Saddar Lounda Bazzar"
      alt="Shoes"  />
    </div>
    </>
  )
  
}

export default App

