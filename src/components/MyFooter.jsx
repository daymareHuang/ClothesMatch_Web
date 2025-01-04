import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Dressify.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


function MyFooter() {

    const [image, setImage] = useState(null); // 儲存使用者上傳的照片

    // 使用
    useEffect(()=>{
        const userinfo = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/userself', {
                    UID: 1,
                });
                console.log('yes')
                 setImage(response.data[0].Avatar);
            }
            catch (error) {
                console.error('ERROR: ', error.message);
            }
        }
        userinfo();
    },[])

    return (
        <footer className="nav navbar fixed-bottom justify-content-evenly align-items-center"
            style={{ backgroundColor: '#ebe3e0' }}>
            <div><Link to="/Closet"><img src="../src/assets/img/icon/closet.svg" alt="" width="30px" /></Link></div>
            <div><Link to="/dresswall"><img src="../src/assets/img/icon/instagram.svg" alt="" width="30px" /></Link></div>
            <div><Link to="/Dashboard"><img src="../src/assets/img/icon/home.svg" alt="" width="30px" /></Link></div>
            {/*    // 圖像是沒有登入的狀態 : /Login
                     // 圖像有登入的狀態 : /dresswall/yourself
    
                <div><Link to="./modify.html"><img src="https://www.dummyimage.com/30x30/aad4e3/000.jpg&text=30*30" alt=""
                className="img rounded-circle" width="30px" /></Link></div> 
            */}
            <div><a href="/dresswall/yourself"><img src={image || "../src/assets/img/user_fullpic.jpg"} alt=""
                className="img rounded-circle" width="30px" height="30px" style={{objectFit:"cover"}} /></a></div>
        </footer>
    )
}

export default MyFooter