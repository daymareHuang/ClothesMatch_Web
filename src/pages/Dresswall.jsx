import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../assets/css/dresswall.css'
import { Link } from 'react-router-dom';
import Post from '../components/Post'
import MyLayout from '../layouts/MyLayout';

function Dresswall() {
    return (
        <MyLayout>
            <div className="container">
               

                {/* <!-- gendertab and search icon --> */}
                <div className="w-100 position-relative mt-3">
                    {/* <!-- GenderTab --> */}
                    <ul className="nav justify-content-center nav-underline">
                        {/* 這個active應該要視使用者性別選擇active */}
                        {/* 頁面應該要切換效果 */}
                        <li className="nav-item">
                            <a className="nav-link text-m active" href="#">Man</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-m" href="#">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-m" href="#">Kids</a>
                        </li>
                        {/* <!--  seearch button should be the right-end --> */}
                        <Link className="btn btn-normal rounded-pill position-absolute end-0" to="/dresswall/search">
                            <img className="icon" src="../src/assets/img/icon/search.svg" alt="搜尋" /></Link>
                    </ul>

                </div>

                {/* <!-- Postbutton --> */}

                <div className="w-100 position-relative mt-3">
                    <a className="btn rounded-pill w-100 btn-normal"><img className="icon" src="../src/assets/img/icon/add.svg" alt="add post" /></a>
                </div>

                {/* <!-- post --> */}
                <Post name="David" />
                
                {/* <!-- post --> */}
                <Post name="KaiKai" />

                {/* 要能夠越滑出現越多 */}
            </div>
        </MyLayout>
    )
}

export default Dresswall