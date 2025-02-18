import Index_1 from "./components/index_1"
import styles from "./Form.module.css"

function Form({children}) {
  return (
    <table> 
        <thead>  
        <tr>
            <th> Coin </th>
            <th> Name </th>
            <th> Price </th>
            <th> 24h </th>
            <th> Total Volume </th>
            <th className={styles.hidden}> chart </th>
        </tr>
    </thead>

    {children}
    </table>
  )
}

export default Form