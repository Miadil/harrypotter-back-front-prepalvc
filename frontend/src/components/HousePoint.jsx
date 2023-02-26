import DisplayHouse from "./DisplayHouse"
import { HousesContext } from "../contexts/HousesContext"
import { useContext } from "react"

import "./HousePoint.css"

const HousePoint = (props) => {
  const { houses, addOrRemovePoint, count, addAndRem } =
    useContext(HousesContext)
  return (
    <section id="landHouse">
      {console.info(houses)}
      <div className="landHouseGlobal">
        {/* V1 */}
        <div className="testHousePoint">
          <p>{count}</p>
          <input type="button" value="add 10" onClick={() => addAndRem(10)} />
          <input type="button" value="rem -10" onClick={() => addAndRem(-10)} />
        </div>
        {/* V1 fin */}
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
