import React from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Product from './Product'
import Footer from './Footer'
const Home = (props)=>{
    const{data} = props;
    return(
        <>
         <Jumbotron/>
         <Navbar/>
         <Product/>
         <Product/>
         <Footer/>
        </>
    );
}
export default Home 