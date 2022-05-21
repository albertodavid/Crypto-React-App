import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import Data from './components/Data.jsx'

function App() {
  
  return (
    <>
    <Heading><h1>Crypto<HeaderSpan> 💸BRUH💸</HeaderSpan></h1></Heading>
    <Data/>
    </>
   )
}

export default App

const Heading = styled.div `
  font-family: Arial, Helvetica, sans-serif;
  background-color:#3465ee;
  padding:5rem;
  display:flex;
  justify-content:center;
  color:#ffffff;

`

const HeaderSpan = styled.span`
    color:#313131;
    font-weight: bold;

`