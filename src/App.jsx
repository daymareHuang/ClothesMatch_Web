import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/dresswall.css'
import Post from './components/Post'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        {/* <!-- navbar --> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 ">
          <div className="container-fluid">
            <a className="navbar-brand" href="./dresswall.html">Dressify</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./mypage.html">Me</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        {/* <!-- gendertab and search icon --> */}
        <div className="w-100 position-relative mt-3">
          {/* <!-- GenderTab --> */}
          <ul className="nav justify-content-center nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
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
            <a className="btn btn-normal rounded-pill position-absolute end-0" href="./wallsearch.html">
              <img className="icon" src="../src/assets/img/icon/search.svg" alt="搜尋" /></a>
          </ul>

        </div>

         {/* <!-- Postbutton --> */}

        <div className="w-100 position-relative mt-3">
          <a className="btn rounded-pill w-100 btn-normal"><img className="icon" src="../src/assets/img/icon/add.svg" alt="add post" /></a>
        </div>



        {/* <!-- post --> */}
      
        <Post name="David"/>

        <Post name="KaiKai" />




      </div>
    </>
  )
}

export default App
