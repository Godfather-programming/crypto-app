import { useEffect, useState } from "react"
import styles from "./SearchBox.module.css" 
import { RotatingLines } from "react-loader-spinner"



function SearchBox({amount, represent , setError}) {
  // console.log(amount)
    const [datas, setDatas] = useState([])
    const searchHandler = (text) => `https://api.coingecko.com/api/v3/search?query=${text}&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm`

    useEffect (() =>  {
      const controller = new AbortController()
      // const perform = searchHandler()
      // if(perform) {
      //   setDatas([])
      // }
      setDatas([])
      if(!amount) return
      const fetchDatas = async () => {
try {
    const res = await fetch(searchHandler(amount), {signal : controller.signal})
    const json = await res.json();
    console.log(json.coins)
    if(json.coins) {setDatas(json.coins)
    } else {
  alert(json.status.error_message)
    }
  }
 catch (error) {
  if(error.name !== "AbortError")
  alert(error)
}
      }    
fetchDatas()
return () => {
  controller.abort()
}
    }, [amount])
    // const newDatas = datas.filter(data => data.name.toLowerCase().includes(amount))
    // setDatas(newDatas)
    // console.log(datas)
    // const {coins} = datas
    // console.log(coins) 

    return (
 



      <div key={datas.map(data => data.id)} className={styles.container} style={{display : represent ? "block" : "none" }}>

      {!datas.length && 
 <div className={styles.loader}> <RotatingLines strokeColor="red" width="50px" height="50px" strokeWidth="3" />  </div> 
     } 
<ul>  
{datas.map(data => (
  <li className={styles.info}> <img src={data.thumb} alt="" /> {data.name} </li>
) )}
</ul>
    </div>
    
  )
}


export default SearchBox




















//  const response =  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm").then(res => res.json()).then(json => setDatas(json)).catch(err => console.log(err)) 