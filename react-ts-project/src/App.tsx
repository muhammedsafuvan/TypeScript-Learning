import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface ToDoType {
  title: string;
  description: string;
  completed: boolean;
}

interface ToDoInput{
  todo: ToDoType;
}

function ToDo({todo}: ToDoInput){
  return (
  <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      
  </div>

  );

}

export default function App() {

  return (
    <>
      <ToDo todo={{ title: "A", description: "abc", completed: false }} />
    </>
  )
}



