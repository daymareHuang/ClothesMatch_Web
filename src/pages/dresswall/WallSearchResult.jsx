import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

import Post from '/src/components/Post.jsx'
import MyLayout from '../../layouts/MyLayout'


function Wallsearchresult() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <MyLayout>
      <div className="container">


        {/* <!--search --> */}
        <form className="d-flex position-relative mt-3" role="search">

          {/* <!--search input --> */}
          <input className="form-control rounded-start-pill rounded-end-0 bgc-normal" type="search" placeholder="Search" aria-label="Search" />
          {/* <!--condition button --> */}
          {/* <!--more condition to set --> */}
          <button type="button" className="btn btn-normal  rounded-end-0  rounded-start-0 " onClick={handleShow} >
            <img className="icon" src="../src/assets/img/icon/settings-sliders.svg" alt="" />
          </button>
          {/* <!--search button --> */}
          <a className="btn btn-normal rounded-end-pill rounded-start-0" type="submit" href="../dresswall/result">
            <img className="icon" src="../src/assets/img/icon/search.svg" alt="" />
          </a>

        </form>

        {/* <!--result post --> */}
        <Post />

        {/* <!--result post --> */}
        <Post />

        {/* Search Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{ backgroundColor: "#f9f8f4" }}>
            <Modal.Title >進階篩選</Modal.Title>
            <img className='iconsmall ms-auto' variant="secondary" onClick={handleClose} src="../src/assets/img/icon/cross-circle.svg" alt="" />
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#f9f8f4" }}>

            {/* <!-- type of the clothes  --> */}
            <div className="row">
              <div className="col-2"><label htmlFor="">類型:</label></div>
              <div className="col-10">
                <select className="w-100" name="clothesType" id="" defaultValue="default" style={{ backgroundColor: "#ebe3e0" }}>
                  <option value="default" disabled >請選擇一個類型</option>
                  <optgroup label="外套">
                    <option value="羽絨外套">羽絨外套</option>
                    <option value="西裝外套">西裝外套</option>
                    <option value="大衣">大衣</option>
                  </optgroup>
                  <optgroup label="襯衫">
                    <option value="商務襯衫">商務襯衫</option>
                    <option value="休閒襯衫">休閒襯衫</option>
                    <option value="Polo衫">Polo衫</option>
                  </optgroup>
                  <optgroup label="T-shirt">
                    <option value="長袖T恤">長袖T恤</option>
                    <option value="短袖T恤">短袖T恤</option>
                    <option value="連帽T恤">連帽T恤</option>
                  </optgroup>
                  <option value="毛衣">毛衣/針織衫</option>
                  <option value="連身">連身裙/褲</option>
                  <optgroup label="褲子">
                    <option value="牛仔褲">牛仔褲</option>
                    <option value="西裝褲">西裝褲</option>
                    <option value="工裝褲">工裝褲</option>
                    <option value="棉褲">棉褲</option>
                    <option value="九分褲">九分褲</option>
                    <option value="卡其褲">卡其褲</option>
                    <option value="寬褲">寬褲</option>
                    <option value="短褲">短褲</option>
                  </optgroup>
                  <optgroup label="裙子">
                    <option value="長裙">長裙</option>
                    <option value="短裙">短裙</option>
                  </optgroup>
                  <optgroup label="帽子">
                    <option value="毛帽">毛帽</option>
                    <option value="棒球帽/鴨舌帽">棒球帽/鴨舌帽</option>
                    <option value="漁夫帽">漁夫帽</option>
                    <option value="貝雷帽">貝雷帽</option>
                    <option value="草帽">草帽</option>
                    <option value="紳士帽">紳士帽</option>
                  </optgroup>
                  <optgroup label="包包">
                    <option value="後背包">後背包</option>
                    <option value="側背包">側背包</option>
                    <option value="手拿包">手拿包</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <br />

            {/* <!-- color  --> */}
            <div className="row">
              <div className="col-2">顏色:</div>
              <div className="col-10">
                <select className="w-100" name="" id="" defaultValue="default" style={{ backgroundColor: "#ebe3e0" }}>
                  <option value="default" disabled >請選擇一個顏色</option>
                  <option value="white">白色</option>
                  <option value="gray">灰色</option>
                  <option value="black">黑色</option>
                  <option value="red">紅色</option>
                  <option value="orange">橙色</option>
                  <option value="yellow">黃色</option>
                  <option value="green">綠色</option>
                  <option value="blue">藍色</option>
                  <option value="indigo">靛色</option>
                  <option value="purple">紫色</option>
                </select>
              </div>
            </div>
            <br />

            {/* <!-- brand  --> */}
            <div className="row">
              <div className="col-2">品牌:</div>
              <div className="col-10">
                <select className="w-100" name="" id="" defaultValue="default" style={{ backgroundColor: "#ebe3e0" }}>
                  <option value="default" disabled >請選擇一個品牌</option>
                  <option value="Uniqlo">Uniqlo</option>
                  <option value="Zara">Zara</option>
                  <option value="GU">GU</option>
                  <option value="Net">Net</option>
                  <option value="UrbanResearch">Urban Research</option>
                  <option value="H&M">H&M</option>
                  <option value="A&F">Abercrombie & Fitch</option>
                </select>
              </div>
            </div>
            <br />

            {/* <!-- 褲子的尺寸 尺碼  --> */}
            <div className="row">
              <div className="col-2">尺吋:</div>
              <div className="col-10">
                <select className="w-100" name="" id="" defaultValue="default" style={{ backgroundColor: "#ebe3e0" }}>
                  <option value="default" disabled >請選擇一個尺寸</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="3XL">3XL</option>
                </select>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-2">季節:</div>
              <div className="col-10">
                <select className="w-100" name="" id="" defaultValue="default" style={{ backgroundColor: "#ebe3e0" }}>
                  <option value="default" disabled >請選擇一個季節</option>
                  <option value="Spring">春</option>
                  <option value="Summer">夏</option>
                  <option value="Autumn">秋</option>
                  <option value="Winter">冬</option>
                </select>
              </div>
            </div>
            <br />
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: "#f9f8f4" }}>
            <a href="../dresswall/result" variant="secondary" onClick={handleClose}>
              <img className="icon" src="../src/assets/img/icon/search.svg" alt="" />
            </a>
            {/* <Button variant="secondary" onClick={handleClose}>
                    關閉
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    確認
                  </Button> */}
          </Modal.Footer>
        </Modal>

      </div>
    </MyLayout>
  )
}

export default Wallsearchresult