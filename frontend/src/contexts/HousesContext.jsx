import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const HousesContext = createContext()

const HousesContextProvider = (props) => {
  const [houses, setHouses] = useState([])
  // Todo v1
  const [count, setCount] = useState(0)
  const addAndRem = (point) => {
    setCount((oldCount) => oldCount + point)
  }
  // todo fin V1

  const addOrRemovePoint = (id, point) => {
    setHouses(
      houses.map((e) => {
        if (e.id === id) {
          return { ...e, housePoint: e.housePoint + parseInt(point) }
        }
        return e
      })
    )
  }

  useEffect(() => {
    axios.get(`http://localhost:4242/houses`).then((res) => setHouses(res.data))
  }, [])

  // TODO metre un useEffect et lancer l'axios ver le back pour metre a jour les element dans la bdd

  return (
    <HousesContext.Provider
      value={{ houses, addOrRemovePoint, count, addAndRem }}
    >
      {props.children}
    </HousesContext.Provider>
  )
}

export default HousesContextProvider
