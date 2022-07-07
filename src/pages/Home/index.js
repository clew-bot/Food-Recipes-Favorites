import React from 'react'
import Veggie from "../../components/Veggie";
import Popular from "../../components/Popular"
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <>
    <Veggie />
    <Popular />
    </>
  )
}

export default Home