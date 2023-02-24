import CitationLand from "@components/CitationLand"
import HousePoint from "@components/HousePoint"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [housesPoint, setHousesPoint] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:4242/houses`)
      .then((res) => setHousesPoint(res.data))
  }, [])

  return (
    <>
      <HousePoint
        housesPoint={[...housesPoint]}
        setHousesPoint={setHousesPoint}
      />
      <CitationLand />
    </>
  )
}
