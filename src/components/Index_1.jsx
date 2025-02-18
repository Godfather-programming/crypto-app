import { useEffect, useState } from "react"
import Form from "../Form"
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

// import {chart-down.svg, chart-up.svg} from ""
import styles from "./Index_1.module.css"




function Index_1() {
  const [data, setData] = useState([])
//   const truethy = data.price_change_percentage_24h.includes("-") 
  useEffect (() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm").then(res => res.json()).then(json => setData(json)).catch(err => console.log(err)) 
  }, [])
  console.log(data)
//   const {image, symbol, name, current_price, price_change_percentage_24h, total_volume} = data
  return (
   <>

  
   


{!data.length && 
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
{data.map((data) => (
      <tr className={styles.space}>
      <td className={styles.info}> <img className={styles} src={data.image} alt="" /> {data.symbol} </td>
      <td> {data.name} </td>
      <td> ${data.current_price} </td>
      <td> {data.price_change_percentage_24h}% </td>
      <td> $ {data.total_volume} </td>
      <td>  </td>
    </tr>
    ))}


  </>
  )
}

export default Index_1