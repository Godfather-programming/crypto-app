import { useEffect, useState } from "react"
import Form from "../Form"

import chartDown from "../assets/chart-down.svg"
import chartUp from "../assets/chart-up.svg"

import styles from "./Index_1.module.css"
import { ImGift } from "react-icons/im";




function Index_1({ page, currency, }) {
  // console.log(currency)
  // console.log(page)
  const [datas, setDatas] = useState([])
  useEffect (() => {
    setDatas([])
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`).then(res => res.json()).then(json => setDatas(json)).catch(err => console.log(err)) 
  }, [page, currency])
  console.log(datas)
  //   const {image, symbol, name, current_price, price_change_percentage_24h, total_volume} = data

  return (
   <>

  
   


{!datas.length && 
<div>
<div className={styles.s1}>
      <div className={`${styles.s} ${styles.sb} ${styles.sb1} `}></div>
      <div className={`${styles.s} ${styles.sb} ${styles.sb2} `}></div>
      <div className={`${styles.s} ${styles.sb} ${styles.sb3} `}></div>
      <div className={`${styles.s} ${styles.sb} ${styles.sb4} `}></div>
    </div>


    <div className={styles.s2}>
      <div className={`${styles.s} ${styles.sb} ${styles.sb5} `}></div>
      <div className={`${styles.s} ${styles.sb} ${styles.sb6} `}></div>
      <div className={`${styles.s} ${styles.sb} ${styles.sb7} `}></div>
      <div className={`${styles.s} ${styles.sb} ${styles.sb8} `}></div>
    </div>

    <div class={styles.bigcon}>
      <div class={`${styles.big} ${styles.b}`}></div>
    </div>
       
  </div>
} 
{datas.map((data) => (
      <tr key={data.id} className={styles.space}>
      <td className={styles.info}> <img className={styles.coin} src={data.image} alt="" /> {data.symbol} </td>
      <td> {data.name} </td>
      <td> ${data.current_price} </td>
      <td style={{color : data.price_change_percentage_24h > 0 ? "#00E676" : "#FF1744"}}> {data.price_change_percentage_24h}% </td>
      <td> $ {data.total_volume} </td>
      <td > <img src={data.price_change_percentage_24h > 0 ? chartUp : chartDown} alt="" /> </td>
    </tr>
    ))}


  </>
  )
}

export default Index_1