import { useEffect, useState } from "react"
import styles from "./Modal.module.css"
import convertData from "../helpers/convertData"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function Modal({presence, setPresence, symbolCurrency }) {
  console.log(symbolCurrency)
  // const [data] = presence
  // const [image, name] = data
  console.log(presence.data.image)
const [type, setType] = useState("prices")
// console.log(convertData(presence, type))
    // console.log(name)
    // const [modal, setModal] = useState(true)
    // const [information, setData] = useState([])


// useEffect(() => {
//     const fetchData = async () => {
//     try {
//     // const res = await fetch(searchHandler(name))
//     const json = await res.json()
//     console.log(json) 
//     setData(json)
//     // console.log(data)
//     } catch (error) {
//     console.log(error)        
//     }
//     }
//   fetchData()
// }, [name])
const typeHandler = (eve) => {
  // console.log(eve.target.tagName)
  if(eve.target.tagName === "BUTTON") {
    const x = eve.target.innerText.toLowerCase().replace(" ", "_")
    setType(x)
  }
}


    const clickHandler = () => {
      setPresence(null)
    }
  return (
    <div className={styles.container} style={{display : presence ? "block" : "none"}}>
        <div className={styles.wrapper} >  
      <span onClick={clickHandler} className={styles.remove}> X </span>  
      <div className={styles.info}>
        <img className={styles.image} src={presence.data.image} alt="Bad" />  
        <span className={styles.noun}> {presence.data.name} </span>
      </div>
      <div className={styles.graph}> 
 <ChartComponent data={convertData(presence, type)} type={type}/>
      </div>

        <div className={styles.option} onClick={typeHandler}>      
        <button style={{backgroundColor : type === "prices" ? "#2979FF" : "inherit", color :  type === "prices" ? "#fff" : "inherit"}} > Prices </button>
        <button style={{backgroundColor : type === "market_caps" ? "#2979FF" : "inherit" , color :  type === "market_caps" ? "#fff" : "inherit"}}> Market Caps </button>
        <button style={{backgroundColor : type === "total_volumes" ? "#2979FF" : "inherit", color :  type === "total_volumes" ? "#fff" : "inherit"}}> Total Volumes </button>
      </div>

      <div className={styles.data}> 
        <span className={styles.certain}> Price:<span> {symbolCurrency}{presence.data.current_price.toLocaleString()} </span>   </span>
        <span className={styles.certain}> ATH: <span> {symbolCurrency}{presence.data.ath.toLocaleString()} </span> </span>
        <span className={styles.certain}> Market Cap: <span> {symbolCurrency}{presence.data.market_cap.toLocaleString()} </span> </span>
      </div>

      </div>

    </div>
  )
}

export default Modal

const ChartComponent = ({data, type}) => {
  return (  <ResponsiveContainer width="100%" height="100%"> 
    <LineChart width={400} height={400} data={data}> 
      <YAxis dataKey={type} domain={["auto", "auto"]}/>
      <XAxis dataKey="date" hide/>
      <Legend />
    <CartesianGrid color="#404042" />
    <Tooltip contentStyle={{color : "red"}}/>
    <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px"/>
    </LineChart>
  </ResponsiveContainer>  )
}




















{/* <button onClick={() => setType("prices")} style={{backgroundColor : type === "prices" ? "#2979FF" : "inherit", color :  type === "prices" ? "#fff" : "inherit"}} > Prices </button> */}