import React, { useState } from 'react'
import ClosetLayoutN from '../../layouts/ClosetLayoutN'
import { useParams } from 'react-router-dom';

// 解決1-4會不同的問題...!
import eg1 from '../../assets/img/eg1.jpg';
import eg2 from '../../assets/img/eg2.jpg';
import eg3 from '../../assets/img/eg3.jpg';
import eg4 from '../../assets/img/eg4.jpg';
import eg5 from '../../assets/img/eg5.jpg';

function ClosetPart() {
  const { part } = useParams();
  // 1 for 上身, 2 for 下身, 3 for 鞋子 4 for 配件
  const partTitle =
  part === '1' ? '上身' :
  part === '2' ? '下身' :
  part === '3' ? '鞋子' :
  part === '4' ? '配件' :
  '未知分類';
  return (
    <ClosetLayoutN>
      <div style={{ paddingTop: '62px' }}></div>
      <div className="container" >
        {/* <!-- header --> */}
        <div className="fixed-top bg-light my-5" style={{top: '14px'}}>
          <div className="d-flex justify-content-between align-items-center border-bottom">
            <div className="px-3 p-2 md-18"><b>{partTitle}</b></div>
            <a href="/Closet" className="px-3"><img src="/src/assets/img/icon/cross-circle.svg" style={{width: '25px'}} alt="cancel" /></a>
          </div>
        </div>

        <div>
          <div className="container-fluid mt-5 pt-2 pb-3 px-4">
            <div className="row g-3">
              <img className="col-6 border rounded" width="17px" height="175px" src={eg1} alt="loading..." />

              <img className="col-6 border rounded" width="175px" height="175px" src={eg2} alt="loading..." />

              <img className="col-6 border rounded" width="175px" height="175px" src={eg3} alt="loading..." />

              <img className="col-6 border rounded" width="175px" height="175px" src={eg4} alt="loading..." />

              <img className="col-6 border rounded" width="175px" height="175px" src={eg5} alt="loading..." />
            </div>
          </div>

        </div>

      </div>
    </ClosetLayoutN>
  )
}

export default ClosetPart