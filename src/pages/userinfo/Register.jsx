import React, { useState, useEffect } from "react";
import MyLayout from '../../layouts/MyLayout'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import UserInfoInput from './UserInfoInput'
import GenderInput from './GenderInput'
// import StylePreferenceInput from './StylePreferenceInput'
import AvatarUpload from "./AvatarUpload";


function Register() {
  return (
    <>
      <MyLayout>
        {/* <!-- content --> */}
        < div className="container-fluid" style={{ marginTop: '65px', marginBottom: '55px' }}>
          <div className="container-fluid py-3 my-4" style={{ backgroundColor: '#F8F9F3' }}>
            {/* <!-- banner --> */}
            <div className="container-fluid text-center">
              <p className="text-xl"><b>註冊會員</b></p>
              <p className="text-xs mt-0">請輸入以下資訊繼續註冊</p>
              <p className="text-xs mt-0"><span style={{ color: '#FF0000' }}>*</span>為必填項目</p>
            </div>
            {/* <!-- input section --> */}
            <div className="my-4 text-s">
              {/* <!-- Email --> */}
              <div className="mt-3">
                <label htmlFor="email" className="form-label">&nbsp;&nbsp;Email<span
                  style={{ color: '#FF0000' }}>*</span></label>
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
                <label htmlFor="userHeight" className="form-label">&nbsp;&nbsp;身高<span
                  style={{ color: '#FF0000' }}>*</span></label>
                <div className="d-flex flex-nowrap align-items-center">
                  <input type="number" className="form-control w-50" id="userHeight" />
                  <span>&nbsp;cm</span>
                </div>
              </div> */}
              {/* <!-- Weight --> */}
              {/* <div className="mt-3">
                <label htmlFor="userWeight" className="form-label">&nbsp;&nbsp;體重</label>
                <div className="d-flex flex-nowrap align-items-center">
                  <input type="text" className="form-control w-50" id="userWeight" />
                  <span>&nbsp;kg</span>
                </div>
              </div> */}
              {/* <!-- Style preference --> */}
              {/* <div className="mt-3">
                <label htmlFor="stylePreference" className="form-label">&nbsp;&nbsp;穿搭風格偏好<span
                  style={{ color: '#FF0000' }}>*</span></label>
                <div>
                  <div className="text-m">
                    <StylePreferenceInput />
                  </div>
                </div>
              </div> */}
              {/* <!-- Avatar --> */}
              <AvatarUpload />
              {/* <!-- button --> */}
              <div>
                <button className="btn btn-lg rounded-3 w-100 py-2 mt-3" style={{ backgroundColor: '#ebe3e0' }}>註冊會員</button>
              </div>
            </div>
          </div>
        </div>
      </MyLayout >
    </>
  )
}

export default Register