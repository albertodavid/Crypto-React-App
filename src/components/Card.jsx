import React from 'react'
import styled from '@emotion/styled'

const Card = ({data, moneda, exchanges}) => {
    const imageURL = 'https://assets.coincap.io/assets/icons/'+data.symbol.toLowerCase()+'@2x.png'
    const price = () => {

        if(moneda == 'USD'){
            return Number(data.priceUsd).toLocaleString('es-ES', {style: 'currency', currency: moneda})
        } else if (moneda == 'EUR') {
            return (Number(data.priceUsd)*exchanges.EUR).toLocaleString('es-ES', {style: 'currency', currency: moneda})
        }else{
            return (Number(data.priceUsd)*exchanges.GBP).toLocaleString('es-ES', {style: 'currency', currency: moneda})
        }

       
    }
    return (
    <CardCSS>
        <ImageCSS src={imageURL} />
        <InfoCSS>
            <div>
            <p>Nombre: <SpanCSS>{data.id}</SpanCSS></p>
            </div>
            <div>
            <p>Precio: <SpanCSS>{price()}</SpanCSS></p>
            <p>Variación: {data.changePercent24Hr > 0 ? <WinCSS>{Number(data.changePercent24Hr).toFixed(5)}%</WinCSS>:<LoseCSS>{Number(data.changePercent24Hr).toFixed(5)}%</LoseCSS>}</p>
            </div>
            
        </InfoCSS>
    </CardCSS>
  )
}

export default Card

const CardCSS = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding:2rem;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    

    box-shadow:0px 8px 13px -1px rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 1rem;
`

const InfoCSS = styled.div`
    display: flex;
    flex-grow:4;
    align-items: center;
    justify-content: space-evenly;
    text-transform: capitalize;
    

`

const ImageCSS = styled.img`
    width: 65px;
`

const SpanCSS = styled.span`
    color:#3465ee;
    font-weight: bold;

`


const LoseCSS = styled.span`
    color:#ee3434;
    font-weight: bold;

`


const WinCSS = styled.span`
    color:#92da76;
    font-weight: bold;

`