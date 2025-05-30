import axios from 'axios'
import Reactm, { useEffect } from 'react'
import Header from './components/Header'
import Fotter from './components/Fotter'
import Home from './components/Home'

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
      <Header />
      <Home/>
      <Fotter/>
    </div>
  )
}

export default App
