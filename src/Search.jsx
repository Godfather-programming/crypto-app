import styles from "./Search.module.css"
import { FaChevronDown } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { useState } from "react";


function Search({show, setShow, currency}) {
  console.log(show)
     const [represent, setRepresent] = useState(false)
 const [amount, setAmount] = useState("")
 const changeHandler = (e) => {
  setRepresent(true)
 const text = e.target.value.trim().toLowerCase()
 setAmount(text)
 if(!text) {
  setRepresent(false)
 }
 }
 console.log(amount)
  return (
    <> 
        <SearchBox amount={amount} represent={represent}/>
    <div className={styles.container}>
        <input className={styles.common} type="text" placeholder="Search" value={amount} onChange={changeHandler}/>
        <button className={styles.common} onClick={() => setShow(show => !show)}> {currency} <FaChevronDown /> </button>
    </div>
        </>
  )
}

export default Search