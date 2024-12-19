import React from 'react'
import ClosetLayout from '../../layouts/ClosetLayout'

function ClosetMatch() {
  return (
    <ClosetLayout isActive="穿搭">
      <div style={{ paddingTop: '92px' }}></div>
      {/* <!-- 搭配1 --> */}
      <div className='row container'>
        <div className="col-6 pt-4 px-4">
          <p className="mb-1 ps-1 md-18">穿搭標題1</p>
          <img className="border rounded" src="src/assets/img/eg5.jpg" width="160" height="220" alt="loading..." />
        </div>

        {/* <!-- 搭配2 --> */}
        <div className="col-6 pt-4 px-4">
          <p className="mb-1 ps-1 md-18">穿搭標題2</p>
          <img className="border rounded " src="src/assets/img/eg4.jpg" width="160" height="220" alt="loading..." />
        </div>

        {/* <!-- 搭配3 --> */}
        <div className="col-6 pt-4 px-4">
          <p className="mb-1 ps-1 md-18">穿搭標題3</p>
          <img className="border rounded " src="src/assets/img/eg3.jpg" width="160" height="220" alt="loading..." />
        </div>
      </div>
    </ClosetLayout>
  )
}

export default ClosetMatch