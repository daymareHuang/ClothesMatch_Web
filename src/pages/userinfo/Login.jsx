import React from 'react'
import MyLayout from '../../layouts/MyLayout'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import LoginContent from './LoginContent'
import LoginModification from './LoginModification'



function Login() {
  return (
    <>
      <MyLayout>
        {/* <!-- content --> */}
        <div className="container-fluid" style={{ marginTop: '65px', marginBottom: '55px' }}>
          <div className="container-fluid pt-4" style={{ backgroundColor: '#F8F9F3' }}>
            {/* <!-- banner --> */}
            <div className="container-fluid text-center">
              <p className="text-xl mb-0"><b>歡迎來到Dressify!</b></p>
              <p className="text-xs">穿搭，從此更簡單！Dressify，讓你每天都充滿風格！</p>
            </div>
            {/* <!-- input section --> */}
            <div className="my-3">
              <LoginContent/>
            </div>
            {/* <!-- modification section --> */}
            <div className="container-fluid text-m">
              <LoginModification/>
            </div>
            {/* <!-- login-in section --> */}
            <div className="my-4">
              <div className="my-4">
                <Link to="/Dashboard"><button className="btn btn-lg text-m py-2 w-100" style={{ backgroundColor: '#ebe3e0' }}>登入</button></Link>
              </div>
              <div className="my-4 align-items-center text-center">
                <button className="btn btn-lg text-m py-1 w-100" style={{ backgroundColor: '#ebe3e0' }}>
                  <img src="src/assets/img/icon/google.svg" alt="" width="30px" />&nbsp;Google登入
                </button>
              </div>
            </div>
            <hr />
            {/* <!-- sign-up section --> */}
            <div className="text-m text-center py-2">
              <p>
                <span>沒有帳戶？</span>
                <span><Link to="/Register">請按此登入</Link></span>
              </p>
            </div>
          </div>
        </div>
      </MyLayout>
    </>
  )
}

export default Login