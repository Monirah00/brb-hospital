import React,{useContext} from 'react'
import HomeFooter from '../AnotherPages/HomeFooter';
import HomeTop from '../AnotherPages/HomeTop';
import { DataContext } from './DataProvider'


const  Home = () => {
    const Products = useContext(DataContext)
    console.log(Products);
    return (
        <>
       <div className='Products'>
       <HomeTop />
         {
           Products.map(product =>(
             <div className='card' key={product.id}>
               <img className='images' src={product.img} alt='' />
               <div className='card-body'>
                 <h4 className='Name'>{product.name}</h4>
                 <h3 className='Designation'>{product.Designation}</h3>
                 <p className='degree'>{product.degree}</p>
               </div>
             </div>

           ))
         }
          <HomeFooter />
        </div>

        </>
            
        
    )
}

export default Home
