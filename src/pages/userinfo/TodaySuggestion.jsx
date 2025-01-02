import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Dressify.css';
import axios from "axios";

function TodaySuggestion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [photos, setPhotos] = useState([]);

  // 儲存用戶資料的 state
  const [userData, setUserData] = useState({
    avatar: '',
    username: '',
  });
  // 顯示載入狀態
  const [loading, setLoading] = useState(true);

  // 使用 useEffect 取得資料
  useEffect(() => {
    // 從 localStorage 取得儲存的用戶資料
    const storedData = localStorage.getItem('user');

    if (storedData) {
      // 解析 JSON 字串為物件
      const userObj = JSON.parse(storedData);

      // 提取 UID
      const UID = userObj.UID;
      // 如果 UID 存在，發送請求到後端 API 獲取 UserName 和 Avatar
      if (UID) {
        // 抓取 Outfit 圖片
        axios.get("http://localhost:8000/api/outfits/photos")
          .then(response => {
            console.log(response.data);
            setPhotos(response.data);
          })
          .catch(error => {
            console.error("取得用戶資料時發生錯誤:", error);
          });
      } else {
        console.error('從儲存的資料中找不到 UID.');
        setLoading(false);  // 如果 UID 不存在，結束載入狀態
      }
    } else {
      console.error('在 localStorage 中找不到用戶資料.');
      setLoading(false);  // 沒有資料的情況下結束載入狀態
    }
  }, []);

  // 彈出視窗放大檢視圖片
  const openModal = (imgSrc) => {
    setModalImageSrc(imgSrc);
    setIsModalOpen(true);
  };

  // 关闭视窗
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return (
    <div>
      <div className="d-flex flex-nowrap justify-content-around align-items-center">
        {photos.map((photo) => (
          <div key={photo.outfitID}>
            {photo.EditedPhoto ? (
              <img
                src={photo.EditedPhoto}
                alt={`Suggestion ${photo.outfitID}`}
                width="100px"
                id={`suggestion_my_${photo.outfitID}`}
                className="rounded"
                onClick={() => openModal(`${photo.EditedPhoto}`)}
                style={{ objectFit: "cover", height: "150px" }}
              />
            ) : (
              <div>No Image Available</div>
            )}
          </div>
        ))}
      </div>

      {/* 弹出视窗 */}
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        centered
        size="lg"
        animation={true}
        backdrop="static"
      >
        <Modal.Header closeButton style={{ backgroundColor: "#ebe3e0" }}></Modal.Header>
        <Modal.Body style={{ backgroundColor: "#ebe3e0" }}>
          <img
            src={modalImageSrc}
            alt="Enlarged View"
            className="modal-content"
            style={{
              width: "100%",  // 确保图片占满 Modal 宽度
              height: "auto", // 保持图片纵横比
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TodaySuggestion;
