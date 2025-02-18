import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <> 
    <header> 
      <div className={`${styles.headerWrapper} ${styles.layout}`}>  

         <h1 className={styles.headerTitle}> Crypto app </h1>
         <div className={styles.info}> 
            <span className={styles.mainText}> Godfather </span>
            <span> | React.js Full Course </span>
         </div>

         </div>
    </header>

{children}

    <footer> 
<div className={`${styles.footerWrapper} ${styles.layout}`}>
    developed by Godfather ❤️
</div>
    </footer>
     </>
  )
}

export default Layout