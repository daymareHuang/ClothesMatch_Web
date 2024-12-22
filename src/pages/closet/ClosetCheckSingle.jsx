import React, { useRef, useState } from 'react'
import ClosetLayoutN from '../../layouts/ClosetLayoutN'
import Post from '../../components/Post'

function ClosetCheckSingle() {
  const titleRef = useRef();
  function handleEdit() {
    // 找到class='edited'的部分，讓他們消失
    document.querySelectorAll('.edited').forEach(elem => {
      elem.classList.add('d-none');
    })

    // 找到class='editing'的部分，並顯示出來
    document.querySelectorAll('.editing').forEach(elem => {
      elem.classList.remove('d-none');
    })
  }

  function handleCancelEdit() {
    if (confirm('確定放棄編輯？')) {  // 可以考慮使用bootstrap的modal？
      // 找到class='edited'的部分，並顯示出來
      document.querySelectorAll('.edited').forEach(elem => {
        elem.classList.remove('d-none');
      })

      // 找到class='editing'的部分，讓他們消失
      document.querySelectorAll('.editing').forEach(elem => {
        elem.classList.add('d-none');
      })
    }
  }

  // here需連接api put data
  function handleConfirmEdit() {
    // 這裡一樣可以下if(confirm('確定完成編輯？')){}
    // 要多一個拿到上面editing中 user's input並改寫edited裡面的value！
    const editing = document.querySelectorAll('.editing');
    const edited = document.querySelectorAll('.edited');

    const editedName = editing[1].children[1].value;
    // const editedType = editing[2].querySelector('option[selected]').innerText; 這個不會跟著「選擇之後」做改變～～
    const editedType = editing[2].options[editing[2].selectedIndex].text;
    const editedColor = editing[3].options[editing[3].selectedIndex].text;
    const editedBrand = editing[4].options[editing[4].selectedIndex].text;
    const editedSize = editing[5].options[editing[5].selectedIndex].text;

    // 把上面拿到的更改後的value放在input的value中（就是之後會render的地方～）
    titleRef.current.innerText = editedName;
    edited[1].value = editedType;
    edited[2].value = editedColor;
    edited[3].value = editedBrand;
    edited[4].value = editedSize;

    // 找到class='edited'的部分，並顯示出來
    edited.forEach(elem => {
      elem.classList.remove('d-none');
    })

    // 找到class='editing'的部分，讓他們消失
    editing.forEach(elem => {
      elem.classList.add('d-none');
    })
  }

  // 處理我的穿搭／推薦穿搭的隱藏、顯示
  // -1 點擊「推薦穿搭」
  function handleShare() {
    // 更改標頭文字顏色
    document.getElementById('sShare').classList.remove('text-secondary');
    document.getElementById('sMy').classList.add('text-secondary');

    // 更改顯示的area
    document.getElementById('sShareArea').classList.remove('d-none');
    document.getElementById('sMyArea').classList.add('d-none');
  }

  // -2 點擊「我的穿搭」
  function handleMy() {
    // 更改標頭文字顏色
    document.getElementById('sMy').classList.remove('text-secondary');
    document.getElementById('sShare').classList.add('text-secondary');

    // 更改顯示的area
    document.getElementById('sMyArea').classList.remove('d-none');
    document.getElementById('sShareArea').classList.add('d-none');
  }

  return (
    <ClosetLayoutN>
      <div className="container" >
        {/* <!-- header --> */}
        <div className="fixed-top bg-light my-5" style={{ top: '14px' }}>
          <div className="d-flex justify-content-between align-items-center border-bottom">
            <div ref={titleRef} className="px-4 p-3 text-m"><b>單品ㄉ名稱😳</b></div>

            <a href="/Closet" className="px-4"><img src="/src/assets/img/icon/cross-circle.svg" style={{ width: '25px' }} alt="cancel" /></a>
          </div>
          <div className="p-3 text-center border-bottom" style={{ backgroundColor: 'var(--color-base)' }}>
            <img className="border rounded bg-white" width="175px" height="175px" src="src/assets/img/eg.jpg" alt="loading..." />
          </div>
        </div>

      </div>
      <div style={{ paddingTop: '234px' }}></div>

      {/* <!-- 單品資訊header --> */}
      <div className="px-3 p-2 border-bottom d-flex justify-content-between sticky-top" style={{ backgroundColor: 'var(--color-second)' }}>
        <div>
          <span className="pe-2 text-s"><b>單品資訊</b></span>
          <img className="ms-1 align-middle pb-1 edited" src="src/assets/img/icon/pencil.svg" alt="edit" style={{ width: '18px' }} onClick={handleEdit} />
        </div>
        <div className="d-none editing">
          <img className="me-2" src="src/assets/img/icon/cross.svg" alt="cancel" style={{ width: '18px' }} onClick={handleCancelEdit} />
          <img id="confirmEditIcon" className='me-2' src="src/assets/img/icon/check.svg" alt="confirm" style={{ width: '18px' }} onClick={handleConfirmEdit} />
        </div>
      </div>

      {/* <!-- 單品資訊content --> */}
      <div className="px-5 m-3" style={{ height: '270px', overflowY: 'auto' }}>

        <div className="mb-3 d-none editing">
          <label htmlFor="" className="form-label required text-s">名稱</label>
          <input className="form-control text-s" type="text" defaultValue="單品ㄉ名稱😳" required />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label required text-s">類型</label>
          <input className="form-control text-center edited text-s" type="text" value="長裙" disabled />

          <select name="type" className="form-select text-center d-none editing text-s" id="" required>
            <option hidden value="0">請選擇類型</option>

            <optgroup label="外套">
              {/* here也可串接資料庫，但render速度可能就會偏慢？好處是更新資料庫前端就可以跟著改變 */}
              <option value="1">羽絨外套</option>
              <option value="2">羽絨外套</option>
              <option value="3">大衣外套</option>
            </optgroup>
            <optgroup label="襯衫">
              <option value="4">商務襯衫</option>
              <option value="5">休閒襯衫</option>
              <option value="6">Polo衫</option>
            </optgroup>
            <optgroup label="T-shirt">
              <option value="7">長袖</option>
              <option value="8">短袖</option>
              <option value="9">連帽</option>
            </optgroup>
            <optgroup label="其他">
              <option value="10">毛衣/針織</option>
              <option value="11">連身褲/裙</option>
            </optgroup>

            <optgroup label="褲子">
              <option value="12">牛仔褲</option>
              <option value="13">西裝褲</option>
              <option value="14">工裝褲</option>
              <option value="15">棉褲</option>
              <option value="16">九分褲</option>
              <option value="17">卡其褲</option>
              <option value="18">寬褲</option>
              <option value="19">短褲</option>
            </optgroup>
            <optgroup label="裙子">
              <option value="20" selected>長裙</option>
              <option value="21">短裙</option>
            </optgroup>

            <option value="22">拖鞋/涼鞋</option>
            <option value="23">運動鞋</option>
            <option value="24">休閒鞋</option>
            <option value="25">高跟鞋</option>
            <option value="26">皮鞋</option>
            <option value="27">靴子</option>

            <optgroup label="帽子">
              <option value="28">毛帽</option>
              <option value="29">棒球帽</option>
              <option value="30">漁夫帽</option>
              <option value="31">貝雷帽</option>
              <option value="32">草帽</option>
              <option value="33">紳士帽</option>
            </optgroup>
            <optgroup label="包包">
              <option value="34">後背包</option>
              <option value="35">側背包</option>
              <option value="36">手拿包</option>
            </optgroup>

          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label text-s">色系</label>
          <input className="form-control text-center edited text-s" type="text" value="白色系" disabled />

          <select name="" id="" className="form-select text-center d-none editing text-s">
            <option hidden value="0">請選擇色系</option>
            <option >黑色系</option>
            <option selected>白色系</option>
            <option >灰色系</option>
            <option >紅色系</option>
            <option >黃色系</option>
            <option >綠色系</option>
            <option >藍色系</option>
            <option >橘色系</option>
            <option >紫色系</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label text-s">品牌</label>
          <input className="form-control text-center edited text-s" type="text" value="uniqlo" disabled />

          <select className="form-select text-center d-none editing text-s">
            <option hidden value="0">請選擇品牌</option>
            <option selected>Uniqlo</option>
            <option >Zara</option>
            <option >AirSpace</option>
            <option >Nike</option>
            <option >Net</option>
            <option >H&M</option>
            <option >其他</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label text-s">尺寸</label>
          <input className="form-control text-center edited text-s" type="text" value="S" disabled />

          <select name="" id="" className="form-select text-center d-none editing text-s">
            <option hidden value="0">請選擇尺寸</option>
            <option >XXS</option>
            <option >XS</option>
            <option selected>S</option>
            <option >M</option>
            <option >L</option>
            <option >XL</option>
            <option >XXL</option>
          </select>
        </div>

      </div>

      {/* <!-- 相關穿搭header --> */}
      <div className="px-3 p-2 text-s border-top border-bottom sticky-top" style={{ backgroundColor: 'var(--color-second)' }}>
        <div className="d-flex justify-content-between">
          <div id="sMy" onClick={handleMy}><b>我的穿搭</b></div>
          <div id="sShare" className="text-secondary" onClick={handleShare}><b>推薦穿搭</b></div>
        </div>
      </div>

      {/* <!-- 相關穿搭content --> */}
      {/* <!-- 我的穿搭 --> */}
      <div id="sMyArea" className="px-3" style={{ height: '275px', overflowY: 'auto', marginBottom: '58px' }}>
        {/* <!-- 穿搭eg1. --> */}
        <div className="rounded-4 mt-4 px-2 p-2 myO">
          <strong className="text-secondary ps-1 text-s">約會穿搭！</strong>
          <div className="d-flex" style={{ width: '325px', overflowX: 'auto' }}>
            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item10.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item20.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item22.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item36.svg" />
            </div>
          </div>
        </div>

        {/* <!-- 穿搭eg2. --> */}
        <div className="rounded-4 mt-4 px-2 p-2 myO">
          <strong className="text-secondary ps-1 text-s">小日常（這裡是輸入的穿搭的標題哦！）</strong>
          <div className="d-flex" style={{ width: '325px', overflowX: 'auto' }}>
            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item8.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item20.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item24.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item29.svg" />
            </div>

            <div>
              <img className="border rounded my-2 me-1" width="95px" src="public/items/item34.svg" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 推薦穿搭 --> */}
      <div id="sShareArea" className="p-3 d-none" style={{ height: '275px', overflowY: 'auto', marginBottom: '58px' }}>
        <Post name="小萱" />
        <Post name="小凱" />
        <Post name="小奕" />
      </div>

    </ClosetLayoutN>
  )
}

export default ClosetCheckSingle