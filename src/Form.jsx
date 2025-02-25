import Index_1 from "./components/index_1"
import styles from "./Form.module.css"

function Form({children}) {
  return (
    <div className={styles.container}>  
    <table> 
        <thead className={styles.thead}>  
            <th> Coin </th>
            <th> Name </th>
            <th> Price </th>
            <th> 24h </th>
            <th> Total Volume </th>
            <th className={styles.hidden}>  </th>
    </thead>

<tbody> 
    {children}
</tbody>
    </table>
     </div>
  )
}

export default Form