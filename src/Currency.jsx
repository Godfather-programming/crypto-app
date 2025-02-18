import styles from "./Currency.module.css"
import { GiConfirmed } from "react-icons/gi";

function Currency({setCurrency, show, setShow, currency}) {
  console.log(show)

  return (
    <div className={styles.container} style={{display : show ? "block" : "none" }}>
      <div className={styles.wrapper}>
     <span onClick={() => {
        setCurrency("usd")
        setShow(show => !show)
     }}> USD <p> {currency === "usd" ? <GiConfirmed /> : "" } </p> </span>
     <span onClick={() => {
        setCurrency("eur")
        setShow(show => !show)
     }}> EUR <p> {currency === "eur" ? <GiConfirmed /> : "" } </p> </span>
     <span onClick={() => {
        setCurrency("jpy")
        setShow(show => !show)
     }}> JPY <p> {currency === "jpy" ? <GiConfirmed /> : "" } </p> </span>
     </div>
    </div>
  )
}

export default Currency