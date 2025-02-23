import { useEffect, useState } from "react"
import styles from "./SearchBox.module.css" 

function SearchBox({amount, represent}) {
  console.log(amount)
    const [datas, setDatas] = useState([])
    const searchHandler = (text) => `https://api.coingecko.com/api/v3/search?query=${text}&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`

    useEffect (() =>  {
      // const controller = new AbortController()
      // const perform = searchHandler()
      // if(perform) {
      //   setDatas([])
      // }
      setDatas([])
      if(!amount) return
      const fetchDatas = async () => {
try {
    const res = await fetch(searchHandler(amount))
    const json = await res.json();
    console.log(json.coins)
    setDatas(json.coins)
  }
 catch (error) {
  console.log(error)
}
      }    
fetchDatas()
return () => {
  // controller.abort()
}
    }, [amount])
    // const newDatas = datas.filter(data => data.name.toLowerCase().includes(amount))
    // setDatas(newDatas)
    // console.log(datas)
    // const {coins} = datas
    // console.log(coins) 

    return (
<> 



      <div className={styles.container} style={{display : represent ? "block" : "none" }}>

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

{datas.map(data => (
  <p className={styles.info}> <img src={data.large} alt="" /> {data.name} </p>
) )}
    </div>
    </>
  )
}


export default SearchBox




















//  const response =  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm").then(res => res.json()).then(json => setDatas(json)).catch(err => console.log(err)) 