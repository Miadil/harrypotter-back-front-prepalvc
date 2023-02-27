import { useContext } from "react"
import DisplayHouse from "./DisplayHouse"
import { HousesContext } from "../contexts/HousesContext"
import "./HousePoint.css"

const HousePoint = (props) => {
  const { count, addAndRem, houses, addOrRemovePoint } =
    useContext(HousesContext)

  return (
    <section id="landHouse">
      <div className="landHouseGlobal">
        <div className="testHousePoint">
          {/* test ----------- */}
          <p>{count}</p>
          <input type="button" value="add 10" onClick={() => addAndRem(10)} />
          <input type="button" value="rem 10" onClick={() => addAndRem(-10)} />
          {/* test fin----------- */}
        </div>
        <h1 className="landHouseTitre">House Points</h1>
        <hr />
        <div className="landHousePointGlobal">
          {houses.map((dataPoint) => {
            return (
              <DisplayHouse
                key={dataPoint.id}
                {...dataPoint}
                addOrRemovePoint={addOrRemovePoint}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default HousePoint
