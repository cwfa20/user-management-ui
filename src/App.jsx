import { useState } from 'react'
import './App.css'
import Form from './Form'
import UserList from './UserList'
import AddUser from './AddUser'

export default function App() {
  
  return (
    <>
      <p>Enter your details:</p>
      <AddUser/>
      <br/><br/>
      <UserList/>
    </>
  )
}