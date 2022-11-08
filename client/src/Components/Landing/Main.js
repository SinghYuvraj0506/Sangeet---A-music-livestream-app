import React from 'react'
import "./Main.css"

function Main() {
  return (
    <div className="mainbox">
        <section className="imagebanner">
            <img src={require("../Images/banner_1.png")} alt="Sangeet" />
        </section>
    </div>
  )
}

export default Main