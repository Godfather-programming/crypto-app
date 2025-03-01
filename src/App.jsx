import { useState } from "react"
import Index_1 from "./components/index_1"
import Form from "./Form"
import Layout from "./Layout"
import Page from "./Page"
import Search from "./Search"
import Currency from "./Currency"
import Modal from "./components/Modal"

function App() {
  const [page, setPage] = useState(1)
  const [symbolCurrency, setSymbolCurrency] = useState("$")
  const [currency, setCurrency] = useState("usd")
  const [show, setShow] = useState(false)
  const [presence, setPresence ] = useState(null)
  
  const previousHandler = () => {
    if (page <= 1) return
    setPage(page => page - 1)
    }
    const nextHandler = () => {
    if (page >= 10) return
    setPage(page => page + 1)
    }
  return (
<>
<Layout>
<Search show={show} setShow={setShow} currency={currency}/>
<Form >   
<Index_1 page={page} currency={currency} symbolCurrency={symbolCurrency} setSymbolCurrency={setSymbolCurrency} presence={presence} setPresence={setPresence}/>
</Form>
<Page page={page} setPage={setPage} />
{!!presence && <Modal presence={presence} setPresence={setPresence} symbolCurrency={symbolCurrency}/> }
<Currency currency={currency}  setCurrency={setCurrency} show={show} setShow={setShow}/>
</Layout>
</>
  )
}

export default App
