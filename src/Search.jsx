import styles from "./Search.module.css"
import { FaChevronDown } from "react-icons/fa";
import SearchBox from "./SearchBox";


function Search({show, setShow, currency}) {
  console.log(show)

  return (
    <div className={styles.container}>
        <input className={styles.common} type="text" placeholder="Search" />
        <SearchBox />
        <button className={styles.common} onClick={() => setShow(show => !show)}> {currency} <FaChevronDown /> </button>
    </div>
  )
}

export default Search