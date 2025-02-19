import { useEffect, useState } from "react"
import styles from "./SearchBox.module.css" 

function SearchBox({amount}) {
    const [datas, setDatas] = useState([])
    // const [modernDatas, setModernDatas] = useState([])
    useEffect (() =>  {
      setDatas([])
      const fetchDatas = async () => {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm")
        const json = await res.json();
        setDatas(json)
      };
      fetchDatas()
    }, [])
    console.log(datas)
    const newDatas = datas.filter(data => data.name.toLowerCase().includes(amount))
    setDatas(newDatas)
    console.log(datas)
    return (
      <div className={styles.container}>
{datas.map(data => (
  <p> {data.name} </p>
) )}
    </div>
  )
}


export default SearchBox




















//  const response =  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&x_cg_demo_api_key=CG-FchY8pJ4u42ZGfhJHoYuNJDm").then(res => res.json()).then(json => setDatas(json)).catch(err => console.log(err)) 