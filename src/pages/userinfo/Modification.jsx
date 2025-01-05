import React, { useState, useEffect } from "react";
import MyLayout from '../../layouts/MyLayout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import AddAvatar from "../../components/AddAvatar";

function Modification() {

    const navigate = useNavigate(); // 用於導航到其他頁面
    const [userData, setUserData] = useState({
        avatar: ''
    });
    const [password, setPassword] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // 用來顯示加載狀態
    const [errorMessage, setErrorMessage] = useState(''); // 用來顯示錯誤信息
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // 密碼顯示/隱藏切換
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    // 性別選擇
    const selectGender = (gender) => {
        if (selectedGender === gender) {
            setSelectedGender(null);  // 如果點擊的是已選擇的性別，則取消選擇
        } else {
            setSelectedGender(gender);  // 否則選擇該性別
        }
    };

    // 取得當前登入的會員資料
    useEffect(() => {
        const storedData = localStorage.getItem('user');

        if (storedData) {
            const userObj = JSON.parse(storedData);
            const UID = userObj.UID;

            if (UID) {
                axios.get(`http://localhost:8000/api/user-info/${UID}`)
                    .then(response => {
                        const Avatar = response.data;
                        setUserData({
                            avatar: Avatar
                        });
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.error('取得用戶資料時發生錯誤:', error);
                        setIsLoading(false);
                    });
            } else {
                console.error('從儲存的資料中找不到 UID.');
                setIsLoading(false);
            }
        } else {
            console.error('在 localStorage 中找不到用戶資料.');
            setIsLoading(false);
        }
    }, []);

    // 表單驗證
    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password);
    };

    // 上傳頭像
    const handleAvatarChange = (base64Image) => {
        setAvatar(base64Image); // 更新 Avatar 为 BASE64 字符串
    };

    // 註冊表單提交處理
    const handleSubmit = async (e) => {
        e.preventDefault(); // 阻止表單的默認行為
        setErrorMessage(''); // 重設錯誤訊息
        setIsLoading(true);  // 開啟載入狀態

        // 表單驗證
        if (!validatePassword(password)) {
            setErrorMessage('密碼至少8個字符，包含字母和數字');
            setIsLoading(false);  // 關閉載入狀態
            return;
        }

        if (!selectedGender) {
            setErrorMessage('請選擇性別');
            setIsLoading(false);  // 關閉載入狀態
            return;
        }

        // 將性別轉換為數字
        const gender = selectedGender === 'male' ? 1 : selectedGender === 'female' ? 0 : null;

        // 使用者送出的資料
        const formData = new FormData();
        formData.append('UserPWD', password);
        console.log('FormData Avatar:', avatar);
        if (avatar) {
            formData.append('Avatar', avatar);
        } else {
            formData.append('Avatar', '');  // 空字符串
        }

        try {
            const response = await axios.put('http://127.0.0.1:8000/api/update-profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // 設置為 multipart/form-data
                }
            });
            setIsLoading(false);  // 關閉載入狀態
            alert('更新成功！');
            navigate('/dashboard'); // 註冊成功後導航到登入頁
        } catch (error) {
            setIsLoading(false);  // 關閉載入狀態
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || '更新失敗，請再試一次。');
            } else {
                setErrorMessage('資料更新失敗，請再試一次。');
            }
            console.error('Error registering:', error);
            console.error('Error response:', error.response);
        }
    };

    // 登出
    const handleLogout = () => {
        localStorage.removeItem('user'); // 清除本地儲存的用戶資料
        navigate('/login'); // 導向登入頁
    };

    // 刪除帳號
    const handleDeleteAccount = async () => {
        const storedData = localStorage.getItem('user');
        if (!storedData) return;
        const userObj = JSON.parse(storedData);
        const UID = userObj.UID;

        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/delete-account/${UID}`);
            alert('帳號已成功刪除');
            localStorage.removeItem('user');
            navigate('/'); // 刪除後導向首頁
        } catch (error) {
            console.error('刪除帳號時發生錯誤:', error);
            setErrorMessage('帳號刪除失敗，請再試一次。');
        }
    };

    return (
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
                        <form onSubmit={handleSubmit}>
                            {/* 密碼 */}
                            <div className="mt-3">
                                <label htmlFor="userPwd" className="form-label">密碼<span style={{ color: '#FF0000' }}>*</span></label>
                                <div className="input-container" style={{ position: 'relative' }}>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        className="form-control"
                                        id="UserPWD"
                                        placeholder="請輸入密碼"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
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
                                <label htmlFor="userPwdDescription" className="text-xs">至少8個字元，包含英文字母（大小寫區分）及數字</label>
                            </div>

                            {/* 性別選擇 */}
                            <div className="mt-3">
                                <label htmlFor="userGender" className="form-label">性別</label>
                                <div className="text-m">
                                    <button
                                        className={`badge rounded-pill mx-1 ${selectedGender === 'male' ? 'selected' : ''}`}
                                        style={{
                                            backgroundColor: selectedGender === 'male' ? '#3b3a38' : '#E9E3DF',
                                            color: selectedGender === 'male' ? '#E9E3DF' : '#3b3a38',
                                            border: '1px solid #3b3a38'
                                        }}
                                        type="button"
                                        id="male"
                                        onClick={() => selectGender('male')}>
                                        男性
                                    </button>
                                    <button
                                        className={`badge rounded-pill mx-1 ${selectedGender === 'female' ? 'selected' : ''}`}
                                        style={{
                                            backgroundColor: selectedGender === 'female' ? '#3b3a38' : '#E9E3DF',
                                            color: selectedGender === 'female' ? '#E9E3DF' : '#3b3a38',
                                            border: '1px solid #3b3a38'
                                        }}
                                        type="button"
                                        id="female"
                                        onClick={() => selectGender('female')}>
                                        女性
                                    </button>
                                </div>
                            </div>

                            {/* 頭像上傳 */}
                            <div className="mt-3">
                                <label htmlFor="userAvatar" className="form-label">上傳頭貼</label>
                                <br />
                                <div className="image-container" style={{ position: 'relative', display: 'inline-block' }}>
                                    {/* 使用 AddAvatar 组件 */}
                                    <AddAvatar avatar={userData.avatar} />
                                </div>
                            </div>
                            <br />
                            {/* 顯示錯誤信息 */}
                            {errorMessage && (
                                <div className="alert alert-danger mt-2" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            {/* <!-- 按鈕 --> */}
                            <div>
                                <button
                                    className="btn btn-lg rounded-3 w-100 py-2 mt-3"
                                    style={{ backgroundColor: '#ebe3e0' }}
                                    type="submit">
                                    確認修改
                                </button>
                                <button
                                    className="btn btn-lg rounded-3 w-100 py-2 mt-3"
                                    style={{ backgroundColor: '#ebe3e0' }}
                                    onClick={handleLogout}>
                                    登出
                                </button>
                                <button
                                    className="button button-dark rounded-3 w-100 py-2 mt-3"
                                    style={{ backgroundColor: '#FF0000', color: '#FFFFFF' }}
                                    onClick={handleDeleteAccount}>
                                    刪除帳號
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MyLayout >
    )
}

export default Modification