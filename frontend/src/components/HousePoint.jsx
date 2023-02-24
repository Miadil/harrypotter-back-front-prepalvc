import DisplayHouse from "./DisplayHouse"
import "./HousePoint.css"

const HousePoint = (props) => {
  return (
    <section id="landHouse">
      <div className="landHouseGlobal">
        <h1 className="landHouseTitre">House Points</h1>
        <hr />
        <div className="landHousePointGlobal">
          {props.housesPoint.map((dataPoint) => {
            return <DisplayHouse key={dataPoint.id} {...dataPoint} />
          })}
        </div>
      </div>
    </section>
  )
}
export default HousePoint
