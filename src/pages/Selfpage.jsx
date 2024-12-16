import React from 'react'
import MyLayout from '../layouts/MyLayout'


function Selfpage() {
  return (
    <MyLayout>
     <div className="container">
            
            {/* <!--edit line and to last page --> */}
            <div className="d-flex justify-content-between w-100 mt-3">
                {/* <!--the to-left arrow to the last page --> */}
                <img className="icon" src="../src/assets/img/icon/angle-left.svg" alt="go back" />
                {/* <!--pen icon can change the user-self's info  --> */}
                {/* <!--and it should be the right end --> */}
                <img className="icon" src="../src/assets/img/icon/pencil.svg" alt="edit profile" />
            </div>

            {/* <!--user's info  --> */}
            <div className="row mt-3 m-auto">
                <div className="d-flex position-relative col-3" style={{height: "65px", width: "70px"}}>
                    {/* <!--user's img  --> */}
                    <img className="userImgBig" src="../src/assets/img/user_img.png" alt="your photo" />
                    {/* <!--to the right bottom of the div --> */}
                    <img className="iconsmall position-absolute bottom-0 end-0" src="../src/assets/img/icon/camera.svg" alt="edit your photo" />
                </div>

                {/* <!--userName and Name --> */}
                <div className="col-9 m-auto text-truncate overflow-hidden">
                    {/* <!--user's Name --> */}
                    {/* <!--should let it ... more than a number and limit of character--> */}
                    <h5 className="userName text-xl text-black ">Name</h5>
                    {/* <!--user's userName --> */}
                    {/* <!--should let it have 25 limit of character --> */}
                    <span className="name text-s text-black">@userName@userName@userName</span>
                </div>
            </div>

            {/* <!--user's introduction --> */}
            <div className=" m-auto mt-3">
                {/* <!--userIntroduction --> */}
                <p className="userIntro mx-3 text-black text-xs ">
                    userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce
                    userIntroduce
                    userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce
                    userIntroduce userIntroduce userIntroduce
                    userIntroduce
                    userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce
                    userIntroduce
                    userIntroduce userIntroduce userIntroduce userIntroduce userIntroduce
                    userIntroduce userIntroduce userIntroduce
                    userIntroduce
                </p>
            </div>

            {/* <!--user's number of post and fan --> */}
            {/* <!--this div should be another color to apart the picture and ther user Information --> */}
            <div className="d-flex justify-content-between bgc-normal mt-3" style={{height: "50px"}}>
                {/* <!--postNumber --> */}
                <p className="text-m my-auto">postNumber篇文章</p>
                {/* <!--fanNumber should be right end of this div --> */}
                <p className="text-m my-auto">fanNumber位粉絲</p>
            </div>

            {/* <!--user post and bookmark --> */}
            <ul className="nav d-flex justify-content-center nav-underline mt-3">
                <li className="nav-item">
                    <a className="nav-link active text-m" aria-current="page" href="#">Posts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-m" href="#">Collections</a>
                </li>

            </ul>

             {/* <!--user's all post -->  */}
            {/* <!--it should be two pair one line --> */}
            <div className="mt-3 row bgc-normal" style={{paddingTop: "10px",paddingBottom: "10px"}}>
                {/* <!--hover should be click hand instead --> */}
                <img className="stylePic col-6 mt-1" src="../src/assets/img/user_dino.png" data-bs-toggle="modal"
                    data-bs-target="#pictureModal" />
                <img className="stylePic col-6 mt-1" src="../src/assets/img/user_dino.png" alt="" />
                <img className="stylePic col-6 mt-1" src="../src/assets/img/user_dino.png" alt="" />
                <img className="stylePic col-6 mt-1" src="../src/assets/img/user_dino.png" alt="" />
            </div>

        </div>
    </MyLayout>
  )
}

export default Selfpage