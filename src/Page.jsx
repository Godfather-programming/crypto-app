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
        <button onClick={previousHandler}> previous </button>
        <span> 1 </span>
        <span> 2 </span>
        <span> ... </span>
        {
            page > 2 && page < 9 && 
            <> <span> {page} </span>
            <span> ... </span> </> 
        }
        <span> 9 </span>
        <span> 10 </span>


        <button className={styles.next} onClick={nextHandler}> next </button>
    </div>
  )
}

export default Page