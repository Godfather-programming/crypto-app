import styles from "./Search.module.css"
import { FaChevronDown } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { useState } from "react";


function Search({show, setShow, currency}) {
  console.log(show)
 const [amount, setAmount] = useState("")
 const changeHandler = (e) => {
 const text = e.target.value.trim().toLowerCase()
 setAmount(text)
 }
 console.log(amount)
  return (
    <div className={styles.container}>
        <input className={styles.common} type="text" placeholder="Search" value={amount} onChange={changeHandler}/>
        <SearchBox amount={amount}/>
        <button className={styles.common} onClick={() => setShow(show => !show)}> {currency} <FaChevronDown /> </button>
    </div>
  )
}

export default Search