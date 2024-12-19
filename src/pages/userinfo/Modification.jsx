import React, { useState, useEffect } from "react";
import MyLayout from '../../layouts/MyLayout'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import UserInfoInput from './UserInfoInput';
import GenderInput from './GenderInput'
// import StylePreferenceInput from './StylePreferenceInput'
import AvatarUpload from "./AvatarUpload";

function Modification() {
    return (
        <>
            <MyLayout>
                {/* <!-- content --> */}
                <div className="container-fluid" style={{ marginTop: '65px', marginBottom: '55px' }}>
                    <div className="container-fluid py-3 my-4" style={{ backgroundColor: '#F8F9F3' }}>
                        <div>
                            {/* <!-- banner --> */}
                            <div className="container-fluid text-center">
                                <p className="text-xl"><b>修改會員資料</b></p>
                                <p className="text-xs mt-0">若您需要修改會員資料，請在以下頁面修改</p>
                            </div>
                            {/* <!-- input section --> */}
                            <div className="my-4 text-s">
                                {/* <!-- Email --> */}
                                <div className="mt-3">
                                    <label htmlFor="email" className="form-label">&nbsp;&nbsp;Email</label>
                                    <input type="email" className="form-control" id="userEmail" placeholder="請輸入郵件" />
                                </div>
                                {/* <!-- ID --> */}
                                {/* <!-- Password --> */}
                                <UserInfoInput />
                                {/* <!-- Birthday --> */}
                                {/* <div className="mt-3">
                                    <label htmlFor="userBirth" className="form-label">&nbsp;&nbsp;生日</label>
                                    <input type="date" className="form-control w-50" id="userBirth" />
                                </div> */}
                                {/* <!-- Gender --> */}
                                <div className="mt-3">
                                    <label htmlFor="userGender" className="form-label">&nbsp;&nbsp;性別</label>
                                    <div className="text-m">
                                        <GenderInput />
                                    </div>
                                </div>
                                {/* <!-- Height --> */}
                                {/* <div className="mt-3">
                                    <label htmlFor="userHeight" className="form-label">&nbsp;&nbsp;身高（cm）</label>
                                    <input type="number" className="form-control w-25" id="userHeight" />
                                </div> */}
                                {/* <!-- Weight --> */}
                                {/* <div className="mt-3">
                                    <label htmlFor="userWeight" className="form-label">&nbsp;&nbsp;體重（kg）</label>
                                    <input type="number" className="form-control w-25" id="userWeight" />
                                </div> */}
                                {/* <!-- Style preference --> */}
                                {/* <div className="mt-3">
                                    <label htmlFor="stylePreference" className="form-label">&nbsp;&nbsp;穿搭風格偏好<span
                                        style={{ color: '#FF0000' }}>*</span></label>
                                    <div className="text-m">
                                        <StylePreferenceInput />
                                    </div>
                                </div> */}
                                {/* <!-- Avatar --> */}
                                <AvatarUpload />
                                {/* <!-- button --> */}
                                <div>
                                    <button className="btn btn-lg rounded-3 w-100 py-2 mt-3" style={{ backgroundColor: '#ebe3e0' }}>修改會員資料</button>
                                    <button className="btn btn-lg rounded-3 w-100 py-2 mt-3" style={{ backgroundColor: '#ebe3e0' }}>登出</button>
                                    <button className="button button-dark rounded-3 w-100 py-2 mt-3" style={{ backgroundColor: '#FF0000', color: '#FFFFFF' }}>刪除帳號</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyLayout >
        </>
    )
}

export default Modification