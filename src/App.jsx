import axios from 'axios'
import Reactm, { useEffect } from 'react'
import Header from './components/Header'
import Fotter from './components/Fotter'

const App = () => {
  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get("https://internshala.com/hiring/search")
      console.log(response.data)
    }

    fetchData()
  })
  return (
    <div >
      <Header/>
      <Fotter/>
    </div>
  )
}

export default App
