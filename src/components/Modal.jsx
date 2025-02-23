import { useEffect, useState } from "react"
import styles from "./Modal.module.css"
import js from "@eslint/js"

function Modal({presence, setPresence, name}) {
    console.log(name)
    // const [modal, setModal] = useState(true)
    const [data, setData] = useState([])
    const searchHandler = (information) =>  `https://api.coingecko.com/api/v3/coins/${information}/market_chart?vs_currency=usd&days&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`

useEffect(() => {
    const fetchData = async () => {
    try {
    const res = await fetch(searchHandler(name))
    const json = await res.json()
    console.log(json) 
    setData(json)
    console.log(data)
    } catch (error) {
    console.log(error)        
    }
    }
  fetchData()
}, [name])


    const clickHandler = (e) => {
      console.log(e.target)
      setPresence(presence => !presence)
    }
  return (
    <div className={styles.container} style={{display : presence ? "block" : "none"}}>
        <div onClick={clickHandler} className={styles.wrapper} >  
      <span className={styles.remove}> X </span>  
      <div className={styles.info}>
        <span> ❤️ </span>
        <span> btc </span>
      </div>

        <div className={styles.option}>      
        <span> Prices </span>
        <span> Market Caps </span>
        <span> Total Volumes </span>
      </div>

      <div className={styles.data}> 
        <span className={styles.certain}> Price:<span> $35612 </span>   </span>
        <span className={styles.certain}> ATH: <span> $69405 </span> </span>
        <span className={styles.certain}> Market Cap: <span> $1234567881000 </span> </span>
      </div>

      </div>

    </div>
  )
}

export default Modal