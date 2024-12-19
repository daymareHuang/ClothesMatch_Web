import React from 'react'
import ClosetLayout from '../../layouts/ClosetLayout'

function Closet() {
  return (
    <ClosetLayout isActive="單品">
      <div style={{ paddingTop: '92px' }}></div>
      <div className="pb-3 mb-3" style={{height: '540px', overflowY: 'auto'}}>
        {/* <!-- 部位 --> */}
        <div className="border-top">
          <span className="px-3 md-18">上身</span>
          {/* 應是每個單品的render，aka可以放到元件 or 用Array.map ㄉ８ */}
          <a href="./check_single.html" className="text-light">
            <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg1.jpg" alt="loading..." />
          </a>
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg2.jpg" alt="loading..." />
          <a href="/ClosetPart/1"><img src="src/assets/img/icon/dot-pending.svg" style={{ width: '30px' }} alt="more" /></a>
        </div>

        {/* <!-- 部位 --> */}
        <div className="border-top">
          <span className="px-3 md-18">下身</span>
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg1.jpg" alt="loading..." />
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg2.jpg" alt="loading..." />
          <a href="/ClosetPart/2"><img src="src/assets/img/icon/dot-pending.svg" style={{ width: '30px' }} alt="more" /></a>
        </div>

        {/* <!-- 部位 --> */}
        <div className="border-top">
          <span className="px-3 md-18">鞋子</span>
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg1.jpg" alt="loading..." />
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg2.jpg" alt="loading..." />
          <a href="/ClosetPart/3"><img src="src/assets/img/icon/dot-pending.svg" style={{ width: '30px' }} alt="more" /></a>
        </div>

        {/* <!-- 部位 --> */}
        <div className="border-top border-bottom">
          <span className="px-3 md-18">配件</span>
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg1.jpg" alt="loading..." />
          <img className="border rounded my-2 me-2" width="125px" height="125px" src="src/assets/img/eg2.jpg" alt="loading..." />
          <a href="/ClosetPart/4"><img src="src/assets/img/icon/dot-pending.svg" style={{ width: '30px' }} alt="more" /></a>
        </div>
      </div>
    </ClosetLayout>
  )
}

export default Closet