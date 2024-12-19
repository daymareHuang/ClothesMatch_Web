import React, { useEffect } from 'react'
import ClosetLayoutO from '../../layouts/ClosetLayoutO'
import { useLocation, useNavigate } from 'react-router-dom';

function ClosetEditSingle() {
  const location = useLocation();
  const croppedImgURL = location.state?.croppedImgURL; // 從 state 中取出 croppedImgURL

  // here 需要加上取得使用者輸入的資料 => 再存入資料庫  （然後每次回到closet的畫面就是get所有資料出來～）

  return (
    <ClosetLayoutO>
      <div className="fixed-top bg-light d-flex justify-content-center" style={{top: '50px'}}>
        {croppedImgURL ? (
          <img src={croppedImgURL} alt="pic" height="200px" />
        ) : (
          <p>沒有圖片被傳遞過來！</p>  // here之後可考慮替換成預設圖片
        )}
      </div>
      
      <div style={{ paddingTop: '8px' }}></div>
      {/* <!-- input/select body for editing info --> */}
      <div className="container px-5" style={{ marginTop: '260px', height: '320px', overflowY: 'auto' }}>
        <div className="mb-3">
          <label htmlFor="" className="form-label required">名稱</label>
          <input className="form-control text-center" type="text" placeholder="請輸入名稱" required />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label required">類型</label>
          <select name="type" className="form-select text-center" id="" required>
            <option hidden>請選擇類型</option>

            <optgroup label="外套">
              <option value="">羽絨外套</option>
              <option value="">羽絨外套</option>
              <option value="">大衣外套</option>
            </optgroup>
            <optgroup label="襯衫">
              <option value="">商務襯衫</option>
              <option value="">休閒襯衫</option>
              <option value="">Polo衫</option>
            </optgroup>
            <optgroup label="T-shirt">
              <option value="">長袖</option>
              <option value="">短袖</option>
              <option value="">連帽</option>
            </optgroup>
            <optgroup label="其他">
              <option value="">毛衣/針織</option>
              <option value="">連身褲/裙</option>
            </optgroup>

            <optgroup label="褲子">
              <option value="">牛仔褲</option>
              <option value="">西裝褲</option>
              <option value="">工裝褲</option>
              <option value="">棉褲</option>
              <option value="">九分褲</option>
              <option value="">卡其褲</option>
              <option value="">寬褲</option>
              <option value="">短褲</option>
            </optgroup>
            <optgroup label="裙子">
              <option value="">長裙</option>
              <option value="">短裙</option>
            </optgroup>

            <option value="">拖鞋/涼鞋</option>
            <option value="">運動鞋</option>
            <option value="">休閒鞋</option>
            <option value="">高跟鞋</option>
            <option value="">皮鞋</option>
            <option value="">靴子</option>

            <optgroup label="帽子">
              <option value="">毛帽</option>
              <option value="">棒球帽</option>
              <option value="">漁夫帽</option>
              <option value="">貝雷帽</option>
              <option value="">草帽</option>
              <option value="">紳士帽</option>
            </optgroup>
            <optgroup label="包包">
              <option value="">後背包</option>
              <option value="">側背包</option>
              <option value="">手拿包</option>
            </optgroup>

          </select>

        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">色系</label>
          <select name="" id="" className="form-select text-center">
            <option hidden>請選擇色系</option>
            <option value="">黑色系</option>
            <option value="">白色系</option>
            <option value="">灰色系</option>
            <option value="">紅色系</option>
            <option value="">黃色系</option>
            <option value="">綠色系</option>
            <option value="">藍色系</option>
            <option value="">橘色系</option>
            <option value="">紫色系</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">品牌</label>
          <select name="" id="" className="form-select text-center">
            <option hidden>請選擇品牌</option>
            <option value="">Uniqlo</option>
            <option value="">Zara</option>
            <option value="">AirSpace</option>
            <option value="">Nike</option>
            <option value="">Net</option>
            <option value="">其他</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">尺寸</label>
          <select name="" id="" className="form-select text-center">
            <option hidden>請選擇尺寸</option>
            <option value="">XXS</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
          </select>
        </div>

      </div>

      <div id="progress" className="fixed-bottom border-top bg-light d-flex justify-content-between" style={{ height: '55px' }}>
        <a href="./Crop" className="btn btn-dark m-2 rounded-pill">上一步</a>
        {/* 若使用者在此點擊「上一步」=> 會沒有將資料一同傳過去 */}
        <a href="./Closet" className="btn btn-dark m-2 rounded-pill">完&nbsp;&nbsp;&nbsp;&nbsp;成</a>
      </div>
    </ClosetLayoutO>
  )
}

export default ClosetEditSingle