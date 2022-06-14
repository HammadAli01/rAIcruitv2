import React from 'react'
import Admintemplatesmain from '../Components/Admintemplatesmain';
import Admindashboardnavbar from './../Components/navbars/Admindashboardnavbar';
export default function Admintemplatemenu() {
  return (
    <div><Admindashboardnavbar side={true}/>
    <Admintemplatesmain/>
    </div>
  )
}
