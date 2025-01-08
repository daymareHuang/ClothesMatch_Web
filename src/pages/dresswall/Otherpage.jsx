import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'
import '../../css/Dressify.css'
import '../../css/dresswall.css'
import MyLayout from '../../layouts/MyLayout'
import AddAvatar from "../../components/AddAvatar";
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



function Otherpage() {
    const data = JSON.parse(localStorage.getItem('user'))
    const location = useLocation();
    const authorID = location.state?.id || 'No data';
    const [userinfo, setUserInfo] = useState({})
    const [postNumber, setPostNumber] = useState(0);
    const [fanNumber, setFanNumber] = useState(0);
    const [userPosts, setUserPosts] = useState([]);
    const [userCollects, setUserCollects] = useState([]);




    // 拿到別人的資料名字 intro 大頭貼
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/otherppl', {
                    UID: authorID,
                })
                // console.log(response.data[0])
                setUserInfo(response.data[0])
            }
            catch (error) {
                console.error('ERROR: ', error.message)
            }

        }
        getUserInfo();
    }, [])

    // 拿到別人的貼文數
    useEffect(() => {
        const getpostNum = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/getpostnum', {
                    UID: authorID,
                })
                // console.log(response.data);
                setPostNumber(response.data[0].postNum);
            } catch (error) {
                console.error('ERROR: ', error.message)
            }
        }
        getpostNum();

    }, [])
    // 拿到別人的post
    useEffect(() => {
        const getuserpost = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/getuserpost', {
                    UID: authorID,
                })
                setUserPosts(response.data)
            } catch (error) {
                console.error('ERROR: ', error.message)
            }
        }
        getuserpost();
    }, [])

    // 拿到別人的 collect
    useEffect(() => {
        const getusercollect = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/getusercollect', {
                    UID: authorID,
                })
                setUserCollects(response.data)
            } catch (error) {
                console.error('ERROR: ', error.message)
            }
        }
        getusercollect();
    }, [])


    return (
        <MyLayout>
            <div className="container">
                {/* <!--user's info  --> */}
                <div className="row mt-3 m-auto">
                    <div className="d-flex position-relative col-3" style={{ height: "65px", width: "70px" }}>
                        {/* <!--user's img  --> */}
                        {/* <img className="userImgBig" src="../src/assets/img/user_img.png" alt="your photo" /> */}
                        <img className="userImgBig" src={userinfo.Avatar} alt="" />
                    </div>

                    {/* <!--userName and Name --> */}
                    <div className="col-9 m-auto text-truncate overflow-hidden">
                        {/* <!--user's Name --> */}
                        {/* <!--should let it ... more than a number and limit of character--> */}
                        <h5 className="userName text-xl text-black ">{userinfo.UserName}</h5>
                    </div>
                    {/* follow */}
                </div>

                {/* <!--user's introduction --> */}
                <div className=" m-auto mt-3">
                    {/* <!--userIntroduction --> */}
                    {userinfo.UserIntro ?
                        (<p className="userIntro mx-3 text-black text-xs ">{userinfo.UserIntro}</p>)
                        :
                        (<p className="userIntro mx-3 text-secondary text-xs text-center">尚無介紹</p>)
                    }


                </div>

                {/* <!--user's number of post and fan --> */}
                <div className="d-flex justify-content-between bgc-normal mt-3 rounded" style={{ height: "50px" }}>
                    {/* <!--postNumber --> */}
                    <p className="text-m my-auto ms-3">{postNumber} 篇文章</p>
                    {/* <!--fanNumber should be right end of this div --> */}
                    <p className="text-m my-auto me-3">fanNumber位粉絲</p>
                </div>

                <Tabs defaultActiveKey="Post" id="genderTab" className="mb-3 justify-content-center text-m " variant="underline">
                    <Tab id="postTab" eventKey="Post" title="Post" className='text-black row bgc-normal p-3 rounded'>
                        {
                            userPosts.map((post, key) => (
                                <img className="stylePic col-6 mt-3" src={post.EditedPhoto} key={key} />
                            ))
                        }

                    </Tab>
                    <Tab id="collectTab" eventKey="Collect" title="Collect" className='text-black row bgc-normal p-3 rounded'>
                        {
                            userCollects.map((collect, key) => (
                                <img className="stylePic col-6 mt-3" src={collect.EditedPhoto} key={key} />
                            ))
                        }
                    </Tab>
                </Tabs>

            </div>
        </MyLayout>
    )
}

export default Otherpage