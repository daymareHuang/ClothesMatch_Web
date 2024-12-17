import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Dressify.css'
import CurrentDate from '../CurrentDate'


function CurentWeather() {
    return (
        <div className="container-fluid d-flex flex-nowrap justify-content-around align-items-center py-3"
            style={{ backgroundColor: '#F8F9F3' }}>
            {/* <!-- 天氣圖標 --> */}
            <div>
                <img src="./src/assets/img/icon/weather-temp.svg" alt="" width="45px" />
            </div>
            {/* <!-- 日期&降雨機率&濕度 --> */}
            <div className="row align-items-center" style={{ margin: '-20px' }}>
                <CurrentDate />
                <div className="text-xs">
                    <div className="d-flex flex-nowrap justify-content-center text-center">
                        <div><span>最高溫：</span><span id="minTemp">{maxTemp}</span></div>&nbsp;|&nbsp;
                        <div><span>最低溫：</span><span id="maxTemp">{minTemp}</span></div>
                    </div>
                </div>
            </div>

            {/* <!-- 最高溫&最低溫 --> */}
            <div className="text-xs">
                <div className="text-center"><span>濕度：</span><span id="humidity">{Humidity}</span></div>
                <div className="text-center"><span>降雨機率：</span><span id="precipitation">{precipitation}</span></div>
            </div>
        </div>
    )
}

export default CurentWeather