import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'


function UserInfoInput() {
    // State to track password visibility
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div>
            {/* <!-- ID --> */}
            <div className="mt-3">
                <label htmlFor="userId" className="form-label">&nbsp;&nbsp;使用者名稱<span
                    style={{ color: '#FF0000' }}>*</span></label>
                <input type="text" className="form-control" id="userId" placeholder="請輸入使用者名稱" />
            </div>
            <label htmlFor="userIdDescription" className="text-xs">&nbsp;&nbsp;包含英文字母（大小寫區分）、數字及特殊符號</label>
            {/* <!-- Password --> */}
            <div className="mt-3">
                <label htmlFor="userPwd" className="form-label">&nbsp;&nbsp;密碼<span style={{ color: '#FF0000' }}>*</span></label>
                <div className="input-container" style={{ position: 'relative' }}>
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        className="form-control"
                        id="userPwd"
                        placeholder="請輸入密碼" />
                    <img
                        src="src/assets/img/icon/eye_lash.svg"
                        alt="Closed Eye Icon"
                        width="20px"
                        id="checkEye"
                        className="checkEye"
                        style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            right: '10px',
                            bottom: '-20%',
                            transform: 'translateY(-50%)',
                            display: isPasswordVisible ? 'none' : 'block',
                        }}
                        onClick={togglePasswordVisibility} />

                    <img
                        src="src/assets/img/icon/eye.svg"
                        alt="Open Eye Icon"
                        width="20px"
                        id="openEye"
                        className="openEye"
                        style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            right: '10px',
                            bottom: '-20%',
                            transform: 'translateY(-50%)',
                            display: isPasswordVisible ? 'block' : 'none',
                        }}
                        onClick={togglePasswordVisibility} />
                </div>
            </div>
            <label htmlFor="userPwdDescription" className="text-xs">&nbsp;&nbsp;至少8個字元，包含英文字母（大小寫區分）及數字</label>
        </div>
    )
}

export default UserInfoInput