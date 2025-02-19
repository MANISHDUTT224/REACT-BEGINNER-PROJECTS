
import { useState } from "react"
import Navigation from "./advance-filtering-project/Navigation/Navigation"
import Products from "./advance-filtering-project/Products/Products"
import Recommended from "./advance-filtering-project/Recommended/Recommended"
import Sidebar from "./advance-filtering-project/Sidebar/Sidebar"
import products from './advance-filtering-project/db/data';
import Card from "./advance-filtering-project/components/Card"
function App() {
 const[selectedcategory,setselectedcategory]=useState(null);
 const[input,setinput]=useState('');
 const handleInputChange=(event)=>{
  setinput(event.target.value);
 }
 const filtereditems=products.filter((product)=>product.title.toLocaleLowerCase().indexOf(input.toLocaleLowerCase())!==-1)
 const handleChange=(event)=>{
  setselectedcategory(event.target.value);
 }
 const handleClick=(event)=>{
  setselectedcategory(event.target.value);
 }
 function filteritems(products,selected,query){
  let filteredproducts=products;
  if(query){
    filteredproducts=filtereditems;

  }
  if(selected){
    filteredproducts=filtereditems.filter(({category,color,company,newPrice,title})=>(
      category===selected||color===selected||company===selected||newPrice===selected||title===selected
  ));

  }
  return filteredproducts.map(({img,title,prevPrice,newPrice,star,reviews})=>(
    <Card key={Math.random()} img={img} title={title} prevPrice={prevPrice} newPrice={newPrice} star={star} reviews={reviews}/>
  ));
 }
 const result=filteritems(products,selectedcategory,input);

  return (
    <>
   
    <Sidebar handleChange={handleChange}/>
    <Navigation input={input} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </>
   
  )
}

export default App
