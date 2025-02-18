import styles from "./Search.module.css"
import { FaChevronDown } from "react-icons/fa";


function Search() {
  return (
    <div className={styles.container}>
        <input className={styles.common} type="text" placeholder="Search" />
        <button className={styles.common}> usd <FaChevronDown /> </button>
    </div>
  )
}

export default Search