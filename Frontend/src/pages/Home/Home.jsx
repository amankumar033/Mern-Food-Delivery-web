import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  const [category,setcategory]=useState('All')

  return ( 
     <>   
     <Header/>
     <ExploreMenu category={category} setcategory={setcategory}/>
     <FoodDisplay category={category}/>
     <AppDownload/>
     </> 
 )
}

export default Home