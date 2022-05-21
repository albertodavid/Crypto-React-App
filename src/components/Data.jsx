import axios from 'axios';
import React from 'react'
import styled from '@emotion/styled'
import {useState, useEffect} from 'react'
import Card from './Card';

const Data = () => {

    const [data, setData] = useState({});
    const [exchanges, setExchanges] = useState();
    const [moneda, setMoneda] = useState('USD');

    useEffect(()=>{
        axios.get('https://api.coincap.io/v2/assets').then((res)=>{
        setData(res.data.data)
        console.log(data);
    })
    },[])

    useEffect(()=>{
        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json').then((res)=>{
        console.log(res.data.usd['eur'], res.data.usd['gbp']);
        setExchanges({
            EUR:res.data.usd['eur'],
            GBP:res.data.usd['gbp']
        })
    })
    },[])

  return (
    <div>
        <HeaderData>  
        <h1>Listado Criptomonedas</h1>

        <form action="">
            <label>Seleccionar moneda: </label>
            <select onChange={e=>setMoneda(e.target.value)}>
                <option value="USD">Dolares</option>
                <option value="EUR">Euros</option>
                <option value="GBP">Libras</option>
            </select>
        </form>
    </HeaderData>
    <List>
    {Object.keys(data).length > 0 ? data.map((e)=>{

        return <Card
        data={e}
        moneda={moneda}
        exchanges={exchanges}/>
        
    }):"cargando..." }
    </List>
    </div>
  )
}

export default Data

const List = styled.div`

  margin: auto;
  width: 50%;
  padding: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }

`

const HeaderData = styled.div`

  margin: auto;
  width: 50%;
  padding: 10px;
  margin-top: 2rem;
  font-family: Arial, Helvetica, sans-serif;


`