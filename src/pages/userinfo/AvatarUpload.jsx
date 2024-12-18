import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

// cmd npm install react-bootstrap bootstrap react-cropper cropperjs

function AvatarUpload() {
    const [image, setImage] = useState(null);  // 儲存上傳圖片的連結
    const [croppedImage, setCroppedImage] = useState(null);  // 儲存裁剪後圖片的連結
    const [showModal, setShowModal] = useState(false);  // 控制視窗開啟及關閉
    const cropperRef = useRef(null);  // 引用 Cropper

    // 圖片上傳
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);  // 設置上傳圖片的連結
                setCroppedImage(null);  // 清除裁剪後的圖片
            };
            reader.readAsDataURL(file);
        }
    };

    // 即時更新預覽
    const handleCrop = () => {
        if (cropperRef.current) {
            const cropperInstance = cropperRef.current.cropper;
            if (cropperInstance) {
                const croppedCanvas = cropperInstance.getCroppedCanvas();
                if (croppedCanvas) {
                    const croppedDataUrl = croppedCanvas.toDataURL();
                    setCroppedImage(croppedDataUrl);
                }
            }
        }
        // 關閉視窗
        setShowModal(false);
    };

    return (
        <div>
            <div className="mt-3">
                <label htmlFor="userAvatar" className="form-label">&nbsp;&nbsp;上傳頭貼</label>
                <input
                    type="file"
                    className="form-control align-content-center w-50"
                    id="userAvatar"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>

            {/* 預覽已上傳的圖片 */}
            <div className=" d-flex flex-column mt-3">
                {croppedImage ? (
                    <img
                        src={croppedImage}  // 顯示裁剪後的圖片
                        alt="預覽圖片"
                        width="60px"
                        height="60px"
                        className="align-content-center mb-3 rounded-circle"
                    />
                ) : image ? (
                    <img
                        src={image}  // 顯示上傳的圖片
                        alt="預覽圖片"
                        width="60px"
                        height="60px"
                        className="align-content-center mb-3 rounded-circle"
                    />
                ) : (
                    // 顯示預設頭像
                    <img
                        src="src/assets/img/icon/avatar.svg"
                        alt="預設頭像"
                        width="60px"
                        height="60px"
                        className="align-content-center mb-3 rounded-circle"
                    />
                )}

                {/* 上傳圖片後，才會顯示圖片編輯按鈕 */}
                {image && (
                    <Button variant="light" style={{ backgroundColor: '#ebe3e0' }} className="btn btn-lg rounded-3 text-s w-25" onClick={() => setShowModal(true)}>
                        編輯圖片
                    </Button>
                )}
            </div>

            {/* 開新modal已編輯圖片 */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Cropper
                        src={image}
                        style={{ width: '100%', height: '400px' }} // 調整圖片顯示大小
                        initialAspectRatio={1}
                        aspectRatio={1}
                        guides={false}
                        ref={cropperRef} // 設定來源
                        viewMode={1}  // 避免圖片超出範圍
                        background={false} // 背景透明
                        autoCropArea={1} // 預設保留全部範圍
                        responsive={true} // 自適應裁剪範圍
                        checkOrientation={true}  // 禁止圖片旋轉
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" style={{ backgroundColor: '#ebe3e0' }} className="btn btn-lg rounded-3" onClick={handleCrop}>
                        確定
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AvatarUpload