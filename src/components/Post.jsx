import { useState, useEffect } from "react";
// import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';


function Post(props) {
  const [like, setLikes] = useState(props.userlike)
  const [keep, setKeep] = useState(props.userkeep)
  const data = JSON.parse(localStorage.getItem('user'))
  const [loading, setLoading] = useState(false);

  // console.log(props)

  // 這裡再讓使用者按讚跟收回讚
  const handleClickLike = () => {
    // console.log(like)
    if (like) {
      setLikes(false)
      try { 
        const response =  axios.post( 'http://127.0.0.1:8000/api/unlike',
          {
            UID: data.UID,
            PostID: props.postID,
          });
      } catch (error) { 
        console.error('ERROR: ', error.message);
      }
    }
    else {
      setLikes(true)
      try { 
        const response =  axios.post('http://127.0.0.1:8000/api/like',
          {
            UID: data.UID,
            PostID: props.postID,
          });
      } catch (error) { 
        console.error('ERROR: ', error.message);
      }
    }
  }

  // 使用者喜歡這個貼文 或是收回這個喜歡
  // useEffect(() => {
  //   const likePost = async () => {
  //     try {
  //       const response = await axios.post(like ? 'http://127.0.0.1:8000/api/like' : 'http://127.0.0.1:8000/api/unlike',
  //         {
  //           UID: data.UID,
  //           PostID: props.postID,
  //         });
  //     } catch (error) {
  //       console.error('ERROR: ', error.message);
  //     }
  //   }
  //   // 如果like true 執行 likePost 否則 unlikePost
  //   likePost();
  //   // 每次like 變換之後用一次
  // }, [like])


  // 這裡再讓使用者保存或是解除保存
  const handleClickKeep = () => {
    // console.log(keep)
    if (keep) {
      setKeep(false)
      try { 
        const response =  axios.post( 'http://127.0.0.1:8000/api/uncollect',
          {
            UID: data.UID,
            PostID: props.postID,
          });
      } catch (error) { 
        console.error('ERROR: ', error.message);
      }
    }
    else {
      setKeep(true)
      try { 
        const response =  axios.post( 'http://127.0.0.1:8000/api/collect',
          {
            UID: data.UID,
            PostID: props.postID,
          });
      } catch (error) { 
        console.error('ERROR: ', error.message);
      }
    }
  }

  return (
    <>
      {/* <!-- post --> */}
      <div className="card w-100 position-relative mt-3"  >
        {/* <!-- user's pic --> */}
        <img src={props.postpic || '../src/assets/img/user_dino.png'} className="card-img-top postpic" alt="user style picture" />
        <div className="card-body post">
          <div className="row">
            {/* user less information */}
            <div className="col-6 text-truncate overflow-hidden">
              <img className="userImgSmall me-2" src={props.avatar || '../src/assets/img/icon/avatar.svg'} alt="user icon" />
              {/* <!-- should let it ... --> */}
              <b className="text-black ">{props.name || 'Name'}</b>
              {/* <!-- this anchor should be a page or accrodin to have more info of post --> */}

            </div>
            {/* this should be have one more page to put the whole info of the style picture */}
            {/* <div className="col-3 d-flex justify-content-center">
              <a className="m-auto text-black text-decoration-none" href="">...更多</a>
            </div> */}
            <div className="col-6 d-flex justify-content-evenly">

              {/* <!-- heart icon  --> */}

              <img className="icon" src={like ? "../src/assets/img/icon/solidheart.svg" : "../src/assets/img/icon/heart.svg"} alt="like" onClick={handleClickLike} />
              {/* <!-- star icon --> */}
              {/* <!-- it should be solid yellow when pressed --> */}
              <img className="icon" src={keep ? "../src/assets/img/icon/solidstar.svg" : "../src/assets/img/icon/star.svg"} alt="keep" onClick={handleClickKeep} />
              {/* <!-- share icon --> */}
              {/* maybe it should have a page that have the card comtent */}
              {/* <img className="icon" src="../src/assets/img/icon/share.svg" alt="share" /> */}
            </div>
          </div>
          {/* <!-- <h5 className="card-title">postTitle</h5> --> */}
          {/* <!-- <p className="card-text">postContentpostContentpostContentpostContentpostContentpostContentpostContentpostContentpostContentpostContentpostContentpostContent</p> --> */}

        </div>
      </div>
    </>
  )
}

export default Post