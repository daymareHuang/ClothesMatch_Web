import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'


function TodaySuggestion() {
  return (
    <div className="d-flex flex-nowrap justify-content-around align-items-center">
      <div><img src="./src/assets/img/icon/example_1.jpg" alt="" width="100px" id="suggestion_my_1" className="rounded" /></div>
      <div><img src="./src/assets/img/icon/example_1.jpg" alt="" width="100px" id="suggestion_my_2" className="rounded" /></div>
      <div><img src="./src/assets/img/icon/example_1.jpg" alt="" width="100px" id="suggestion_my_3" className="rounded" /></div>
    </div>
  )
}

export default TodaySuggestion