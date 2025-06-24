import React, { useEffect, useState } from 'react'
import Home from './Home';
import style from './Home.module.css';

export default function Home() {
    const [counter,setCounter]=useState(0);
    useEffect(()=>{},[]);
  return <>
  <h1>Home</h1>
  </>
}
