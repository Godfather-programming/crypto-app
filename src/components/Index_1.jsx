import { useEffect, useState } from "react"
import Form from "../Form"

import chartDown from "../assets/chart-down.svg"
import chartUp from "../assets/chart-up.svg"

import styles from "./Index_1.module.css"
import { ImGift } from "react-icons/im";
import Modal from "./Modal"
import { RotatingLines } from "react-loader-spinner"





function Index_1({page, currency }) {
  // console.log(currency)
  // console.log(page)
  
  const [image, setImage] = useState("")
  const [nouny, setNouny] = useState("")
  const [datas, setDatas] = useState([])
  const [presence, setPresence ] = useState(false)
  useEffect (() => {
    setDatas([])
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`).then(res => res.json()).then(json => setDatas(json)).catch(err => console.log(err)) 
  }, [page, currency])
  // console.log(datas)
  //   const {image, symbol, name, current_price, price_change_percentage_24h, total_volume} = data
  
  const clickHandler = (e) => {
   const noun = e.target.innerText
   console.log(noun)
   if(noun === "BTC") {
    setNouny("Bitcoin")
    setImage("https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400")
   }
   setPresence(modal => !modal)
  }
  let name = null;
  const nameHandler = (e) => { 
    name = e.target.value
    console.log(name)
  }

  return (
   <>


   


{!datas.length && 
 <RotatingLines strokeColor="red" strokeWidth="3" />
} 



{datas.map((data) => (

  <>
<Modal presence={presence} setPresence={setPresence}  data={data} nouny={nouny} image={image}/>

      <tr key={data.id} className={styles.space}>
      <td className={styles.info}> <img className={styles.coin} src={data.image} alt="" /> <span onClick={clickHandler}> {data.symbol} </span> </td>
      <td onClick={nameHandler}> {data.name} </td>
      <td> ${data.current_price.toLocaleString()} </td>
      <td style={{color : data.price_change_percentage_24h > 0 ? "#00E676" : "#FF1744"}}> {data.price_change_percentage_24h.toFixed(2)}% </td>
      <td> ${data.total_volume.toLocaleString()} </td>
      <td > <img src={data.price_change_percentage_24h > 0 ? chartUp : chartDown} alt="" /> </td>
    </tr>
    </>
    ))}



  </>
  )
}

export default Index_1