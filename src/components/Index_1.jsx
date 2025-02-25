import { useEffect, useState } from "react"
import Form from "../Form"

import chartDown from "../assets/chart-down.svg"
import chartUp from "../assets/chart-up.svg"

import styles from "./Index_1.module.css"
import { ImGift } from "react-icons/im";
import Modal from "./Modal"
import { RotatingLines } from "react-loader-spinner"





function Index_1({page, currency, symbolCurrency, setSymbolCurrency, presence, setPresence }) {
  // console.log(currency)
  // console.log(page)
  // const [image, setImage] = useState(null)
  // const [nouny, setNouny] = useState(null)
  const [datas, setDatas] = useState([])
  useEffect (() => {
    setDatas([])
try {
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`).then(res => res.json()).then(json => setDatas(json)).catch(err => console.log(err)) 
} catch (error) {
  alert(error)
}
  }, [page, currency])
  // console.log(datas)
  //   const {image, symbol, name, current_price, price_change_percentage_24h, total_volume} = data
  // const searchHandler = (information) =>  `https://api.coingecko.com/api/v3/coins/${information}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`
  
  const clickHandler = async (e) => {
    console.log(e.target.value)
    setPresence(true)
  try {
    const res = await fetch(searchHandler(id))
    console.log(id)
    const json = await res.json()
    console.log(json)
  } catch (error) {
    // setPresence(false)
    console.log(error)
  }
  }


  // let symbol = null
  const symbolHandler = () => {
    if (currency === "usd") {
     setSymbolCurrency("$")
    } else if (currency === "eur") {
     setSymbolCurrency("€")
    } else {
      setSymbolCurrency("¥")
    }
  }
  symbolHandler()

  return (
   <>


   


{!datas.length && 
 <div className={styles.loader}>  <RotatingLines strokeColor="red" strokeWidth="3" /> </div>
} 



{datas.map((data) => (
  <>
<TableRow data={data} symbolCurrency={symbolCurrency} key={data.id} presence={presence} setPresence={setPresence}/>
    </>
    ))}



  </>
  )
}

export default Index_1


const TableRow = ({data , symbolCurrency , setPresence}) => {
  const {image, symbol, name, current_price, total_volume, price_change_percentage_24h: price_change, id} = data
  const api = (id) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`
  const clickHandler = async () => {
try {
  const res = await fetch(api(id))
  // console.log(id)
  const json = await res.json()
  console.log(json)
  setPresence({...json, data})
} catch (error) {
  setPresence(null)
}
 }
  return (
    <tr key={id} className={styles.space}>
    <td onClick={clickHandler} className={styles.info}> <img className={styles.coin} src={image} alt="" /> <span> {symbol} </span> </td>
    <td> {name} </td>
    <td> {symbolCurrency}{current_price.toLocaleString()} </td>
    <td style={{color : price_change > 0 ? "#00E676" : "#FF1744"}}> {price_change.toFixed(2)}% </td>
    <td> {symbolCurrency}{total_volume.toLocaleString()} </td>
    <td > <img src={price_change > 0 ? chartUp : chartDown} alt="" /> </td>
  </tr>
  )
}