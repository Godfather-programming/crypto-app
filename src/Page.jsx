import { useState } from "react"
import styles from "./Page.module.css"
import { BiColor } from "react-icons/bi"

function Page({page, setPage}) {

    const previousHandler = () => {
    if (page <= 1) return
    setPage(page => page - 1)
    }
    const nextHandler = () => {
    if (page >= 10) return
    setPage(page => page + 1)
    }
  return (
    <div className={styles.container}>
        <button onClick={previousHandler} className={page === 1 ? styles.disabled :null }> previous </button>
        <span style={{backgroundColor: page === 1 ? "#2979FF" : "inherit"}}> 1 </span>
        <span style={{backgroundColor: page === 2 ? "#2979FF" : "inherit"}}> 2 </span>
        <span> ... </span>
        {
            page > 2 && page < 9 && 
            <> <span style={{backgroundColor: "#2979FF"}}> {page} </span>
            <span> ... </span> </> 
        }
        <span style={{backgroundColor: page === 9 ? "#2979FF" : "inherit"}}> 9 </span>
        <span style={{backgroundColor: page === 10 ? "#2979FF" : "inherit"}}> 10 </span>


        <button className={styles.next} onClick={nextHandler} style={{opacity : page === 10 ? "0.6" : "1"}}> next </button>
    </div>
  )
}

export default Page