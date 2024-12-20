// import { useState } from 'react'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import MyLayoutForDashboard from '../../layouts/MyLayoutForDashboard'
// import CurrentDate from './CurrentDate'
import TodaySuggestion from "./TodaySuggestion";
import MoreSuggestion from "./MoreSuggestion";
import CurrentWeather from "./CurrentWeather";


function Dashboard() {


    return (
        <>
            <MyLayoutForDashboard>
                {/* <!-- content --> */}
                <div className="container-fluid" style={{ marginTop: '65px' }}>
                    {/* <!-- 天氣總覽 --> */}
                    <div>
                        <CurrentWeather />
                    </div>
                    {/* <!-- 功能導覽 --> */}
                    {/* <!-- 個人資訊管理 --> */}
                    < div className="container-fluid my-2 py-3 align-items-center" style={{ backgroundColor: '#F8F9F3' }} >
                        {/* <!-- 個人穿搭牆資訊 part 1--> */}
                        < div className="d-flex flex-nowrap align-items-center justify-content-evenly py-2" >
                            <div className="image-container ms-5" style={{ position: 'relative', display: 'inline-block' }}>
                                <Link to="#"><img src="https://www.dummyimage.com/60x60/aad4e3/000.jpg&text=60*60" alt=""
                                    className="img rounded-circle" />
                                    <img src="./src/assets/img/icon/camera.svg" alt=""
                                        style={{ position: 'absolute', bottom: '-4px', right: '-1px', width: '12px' }} /></Link>
                            </div>
                            <div className="container-fluid d-flex text-center justify-content-center text-m">
                                <div className="d-flex flex-column mx-4">
                                    <span>xxxx</span>
                                    <span>貼文</span>
                                </div>
                                <div className="d-flex flex-column mx-4">
                                    <span>xxxx</span>
                                    <span>粉絲</span>
                                </div>
                            </div>
                        </div >
                        {/* <!-- 個人穿搭牆資訊 part 2--> */}
                        <div className="d-flex align-items-center justify-content-between my-2 pt-2 text-m"
                            style={{ backgroundColor: '#F8F9F3' }}>
                            <div className="d-flex flex-nowrap ms-2">
                                <span>@xxxxxxxxxxx</span>&nbsp;
                                {/* <Link to="#"><img src="./src/assets/img/icon/pencil.svg" alt="" width="12px" /></Link> */}
                            </div>
                            {/* <div className="text-s me-2">
                                <div className="badge rounded-pill"
                                    style={{ backgroundColor: '#E9E3DF', color: '#3b3a38', border: '1px solid #3b3a38' }}>休閒</div>
                                <div className="badge rounded-pill"
                                    style={{ backgroundColor: '#E9E3DF', color: '#3b3a38', border: '1px solid #3b3a38' }}>街頭</div>
                                <div className="badge rounded-pill"
                                    style={{ backgroundColor: '#E9E3DF', color: '#3b3a38', border: '1px solid #3b3a38' }}>運動</div>
                            </div> */}
                        </div >
                        {/* <!-- 個人資訊修改 --> */}
                        {/* < div className="d-flex justify-content-center" >
                            <Link to="./modify.html"d><button className="btn btn-sm btn:hover rounded-pill mx-3 text-s"
                                style={{ color: '#3b3a38', border: '1px solid #3b3a38' }}>修改個人資料</button></Link>
                            <Link to="#"><button className="btn btn-sm btn:hover rounded-pill mx-3 text-s"
                                style={{ color: '#3b3a38', border: '1px solid #3b3a38' }}>分享個人檔案</button></Link>
                        </div > */}
                    </div >
                    {/* <!-- 網站功能導覽 --> */}
                    <div style={{ backgroundColor: '#F8F9F3' }} className="container-fluid my-1">
                        <div className="d-flex flex-nowrap align-items-center justify-content-evenly">
                            <Link to="/Closet" style={{ textDecoration: 'none', color: '#3b3a38' }}
                                className="d-flex flex-column my-3 align-items-center justify-content-center text-m">
                                <img src="./src/assets/img/icon/closet.svg" alt="" className="img" width="26px" height="30px" />
                                <span>我的衣櫃</span>
                            </Link>
                            <Link to="/dresswall" style={{ textDecoration: 'none', color: '#3b3a38' }}
                                className="d-flex flex-column my-3 align-items-center justify-content-center text-m">
                                <img src="./src/assets/img/icon/instagram.svg" alt="" className="img" width="30px" />
                                <span>穿搭分享</span>
                            </Link>
                            {/* <Link to="#" style={{ textDecoration: 'none', color: '#3b3a38' }} className="d-flex flex-column my-3 align-items-center justify-content-center text-m">
                                <img src="./src/assets/img/icon/home.svg" alt="" className="img" width="30px" />
                                <span>個人首頁</span>
                            </Link> */}
                            <Link to="/dresswall/yourself" style={{ textDecoration: 'none', color: '#3b3a38' }}
                                className="d-flex flex-column my-3 align-items-center justify-content-center text-m" >
                                <img src="https://www.dummyimage.com/30x30/aad4e3/000.jpg&text=30*30" alt=""
                                    className="img rounded-circle" width="30px" />
                                <span>個人首頁</span>
                            </Link>
                        </div>
                    </div >
                    {/* <!-- 個人功能 --> */}
                    {/* <div className="container-fluid d-flex justify-content-evenly py-3 mt-2 my-1 text-m"
                        style={{ backgroundColor: '#F8F9F3' }}>
                        <Link to="#" style={{ textDecoration: 'none', color: '#3b3a38' }}>
                            <div className="d-flex flex-column align-items-center mt-1">
                                <img src="./src/assets/img/icon/add.svg" alt="" width="30px" />
                                <p className="mb-0">個人單品</p>
                            </div>
                        </Link>
                        <Link to="#" style={{ textDecoration: 'none', color: '#3b3a38' }}>
                            <div className="d-flex flex-column align-items-center mt-1">
                                <img src="./src/assets/img/icon//add.svg" alt="" width="30px" />
                                <p className="mb-0">個人穿搭</p>
                            </div>
                        </Link> */}
                        {/* <Link to="#" style={{ textDecoration: 'none', color: '#3b3a38' }}>
                            <div className="d-flex flex-column align-items-center mt-1">
                                <img src="./src/assets/img/icon//add.svg" alt="" width="30px" />
                                <p className="mb-0">分享穿搭</p>
                            </div>
                        </Link> */}
                    {/* </div > */}
                    {/* <!-- 今日推薦 --> */}
                    < div className="container-fluid align-items-center my-2 py-2" style={{ backgroundColor: '#F8F9F3' }}>
                        <div className="align-items-center py-2">
                            <span className="text-l"><b>今日推薦</b></span>
                            <TodaySuggestion />
                        </div>
                    </div>
                    {/* <!-- 更多穿搭 --> */}
                    < div className="container-fluid align-items-center my-2 py-2" style={{ backgroundColor: '#F8F9F3' }} >
                        <div className="align-items-center py-2">
                            <span className="text-l"><b>更多穿搭</b></span>
                            <MoreSuggestion />
                        </div>
                    </div>
                </div>
            </MyLayoutForDashboard >
        </>
    )
}

export default Dashboard