import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Toggle from  './Toggle';
import { useState } from 'react';
import {useEffect} from 'react';

function App() {
  const [items,setItems]= useState([ 
  {title:'First task',completed:false},
  {title:'Second task',completed:false},
  {title:'Third task',completed:false}
]);
const [reload] =useState(false);

//when i want to update the data and what are the side effects. 
useEffect(() => {

  // approach to a distant server and give data
  fetch('https ://jsonplaceholder.typicode.com/todos') //Promise<Response>
  .then(results =>results.json() ) //Promise <any>
  .then (items => console.log(items))

},[])


function addNewItem(titleTitle){
  //setItems() //why do we need a new array and we cant use the items lists? 
  // items.push({title:itemTitle,completed:false}); // we entered a new item to the list but react compares between pointes 
  // setItems(items); // new a new list!
  setItems([...items,{title:titleTitle,completed:false}]); //spray- create a new list and throw everything from items list to the new list
}
function removeItem(item){
  const updateItems=items.filter(currItem => item.title !== currItem.title)
  setItems(updateItems);
}

// want to init empty array. items is the list and setItems is the function
  
  // function add(){
  //   setItems([...items,'new item']);
  // }

  
  return (
    <section class="todoapp">

  <Header title ="ToDO" addItem={addNewItem}/>

  <Toggle items={items} remove={removeItem} /> 

  <Footer/>

</section>

  );
}

export default App;
