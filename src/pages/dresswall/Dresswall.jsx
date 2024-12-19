import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import '../../css/dresswall.css'
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import Post from '../../components/Post'
import MyLayout from '../../layouts/MyLayout';

function Dresswall() {
   
    return (
        <MyLayout>
            <div className="container">
                {/* <!-- gendertab and search icon --> */}
                <div className="w-100 position-relative mt-3 justify-content-center">
                    {/* <!-- GenderTab --> */}
                    {/* <Tabs defaultActiveKey="home" id="genderTab" className="mb-3" variant="underline">
                        <Tab eventKey="home" title="Man" className='text-black'>
                            <p>這是主頁內容。</p>
                        </Tab>
                        <Tab eventKey="profile" title="Women">
                            <p>這是個人資料內容。</p>
                        </Tab>
                        <Tab eventKey="contact" title="Kids">
                            <p>這是聯絡內容。</p>
                        </Tab>
                        <Link className="btn btn-normal rounded-pill position-absolute end-0" to="/dresswall/search">
                            <img className="icon" src="../src/assets/img/icon/search.svg" alt="搜尋" /></Link>
                    </Tabs> */}
                    <ul className="nav justify-content-center nav-underline" id="myTab">
                        {/* 這個active應該要視使用者性別選擇active */}
                        {/* 頁面應該要切換效果 */}
                        <li className="nav-item">
                            <button className="nav-link text-m active text-black" href="">Man</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-m text-black" href="">Women</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-m text-black" href="">Kids</button>
                        </li>
                        {/* <!--  seearch button should be the right-end --> */}
                        <Link className="btn btn-normal rounded-pill position-absolute end-0" to="/dresswall/search">
                            <img className="icon" src="../src/assets/img/icon/search.svg" alt="搜尋" /></Link>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0"></div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0"></div>
                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0"></div>
                        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">...</div>
                    </div>

                </div>

                {/* <!-- Postbutton --> */}

                {/* <div className="w-100 position-relative mt-3">
                    <a className="btn rounded-pill w-100 btn-normal"><img className="icon" src="../src/assets/img/icon/add.svg" alt="add post" /></a>
                </div> */}

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