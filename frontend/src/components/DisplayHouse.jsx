import { useState } from "react"

import "./DisplayHouse.css"

const DisplayHouse = ({ id, houseName, housePoint, addOrRemovePoint }) => {
  const [nbPoint, setNbPoint] = useState("0")

  return (
    <div className="landHouseCard" key={id}>
      <div className="landHouseName">{houseName}</div>
      <div className="landHousePoint">{housePoint}</div>
      <div className="landHouseAddPoint">
        <input
          type="number"
          className="number-input"
          onChange={(e) => setNbPoint(e.target.value)}
        />
        {parseInt(nbPoint) !== 0 && nbPoint !== "" ? (
          <input
            type="button"
            className="landHouseAddButton"
            value={nbPoint > 0 ? `+ ${nbPoint}` : `${nbPoint}`}
            onClick={() => addOrRemovePoint(id, nbPoint)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
export default DisplayHouse
