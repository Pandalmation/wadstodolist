import React from 'react';
import lofi from './assets/lofi.wav'
import './App.css';
import TodoList from './components/TodoList';
import {useState, useEffect} from "react"
import TodoFilter from './components/TodoFilter';


function App() {


  let[filterTextvalue, updateFilterText] = useState("all");
  
  const [value,setValue] = useState(1);
  useEffect(()=>{
    if(value % 4 ===0)
    play()
  }, [value]);

  function play() {
    new Audio(lofi).play()
  }

  function onFilterValueSelected(filterValue){
    updateFilterText(filterValue);


  }

  return (
    <div className='todo-app'>
      <TodoList />
      <TodoFilter filterValueSelected={onFilterValueSelected}></TodoFilter>
      <button 
        onClick={()=>setValue(value+1)}
        >
        Press me 3x to play Music
        </button>
    </div>
  );
}

export default App;