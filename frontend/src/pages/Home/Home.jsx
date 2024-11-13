import React,{useState} from 'react'
import './Home.css'
import Exploremenu from '../../components/Navbar/Exploremenu/Exploremenu'
import Header from '../../components/Navbar/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
