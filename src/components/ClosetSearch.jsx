import React, { useRef } from 'react'

function ClosetSearch({close}) {
  const resultRef = useRef();
  function handleOverlay() {
    // 如果點擊的目標不在內部元素，觸發關閉
    if (
      // 檢查是否useRef已經被建立
      resultRef.current &&
      // 如果   ref中包含了點擊的部分   以外的 （啊就是overlay的部分）
      !resultRef.current.contains(event.target)
    ) {
      // 關閉SearchPopup
      close()
    }
  }

  function handleSearch() {
    
    // 點擊後更新搜尋的結果  （之後串接api再調整？）
    resultRef.current.innerHTML = `<img
                      width="160px"
                      height="160px"
                      src="src/assets/img/eg.jpg"
                    />`;
  }

  return (
    <>
      <div className="container-fluid fixed-top bg-light my-5" style={{ top: '14px' }}></div>
      <div className="py-5">
        {/* <!-- search bar --> */}
        <div className="container-fluid fixed-top bg-light py-3" style={{ top: '50px' }}>
          <div className="d-flex justify-content-between align-items-center pt-1">
            <div>
              <input className="form-control rounded-pill text-m" type="text" placeholder="白色襯衫" style={{ width: '320px' }} />
            </div>

            <div>
              <img src="src/assets/img/icon/search.svg" className='me-2' style={{ width: '20px' }} alt="search" onClick={handleSearch}/>
            </div>
          </div>
        </div>

        {/* <!-- 空間補償，避免被 fixed-top 遮擋 --> */}
        <div style={{ paddingTop: '80px' }}></div>

        <div id="searchOverlay" onClick={handleOverlay} className="bg-dark bg-opacity-25" style={{ height: '600px' }}>
          {/* seach result */}
          <div ref={resultRef} className="pt-2 pb-3 mb-3 rounded-bottom-4" style={{ height: '280px', backgroundColor: 'var(--color-base)' }}>
            serach result // 搜尋後的結果呈現在這邊？
          </div>

        </div>
      </div>
    </>
  )
}

export default ClosetSearch