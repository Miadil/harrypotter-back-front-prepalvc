import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const HousesContext = createContext()

const HousesContextProvider = (props) => {
  const [houses, setHouses] = useState([])
  const [count, setCount] = useState(100)

  const addAndRem = (point) => {
    setCount((oldCount) => oldCount + point)
  }

  const addOrRemovePoint = (id, point) => {
    setHouses(
      houses.map((house) => {
        if (house.id === id) {
          return { ...house, housePoint: house.housePoint + parseInt(point) }
        }
        return house
      })
    )
  }

  useEffect(() => {
    axios.get(`http://localhost:4242/houses`).then((res) => setHouses(res.data))
  }, [])

  // todo qu'and la state houses et modifier post les info vers le back avec useEffect

  return (
    <HousesContext.Provider
      value={{ count, addAndRem, houses, addOrRemovePoint }}
    >
      {props.children}
    </HousesContext.Provider>
  )
}

export default HousesContextProvider
