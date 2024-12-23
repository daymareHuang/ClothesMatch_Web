import React, { useState, useRef, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../css/Dressify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import OutfitContext from "../../contexts/OutfitContext";
import MyLayoutHeader from '../../layouts/MyLayoutHeader';

function ImgEditContrast() {
    let navigate = useNavigate();
    const { imageSrc, filterStyle, setContrast, contrast, CroppedSrc } = useContext(OutfitContext)

    // 儲存上一動數值
    const [originalValue, setOriginalValue] = useState(contrast)

    function handleChange() {
        // 更改 Context 的數值
        setContrast(event.target.value)
    }
    function handleCancel() {
        // 把數值回復成調整前
        setContrast(originalValue)
        navigate("/ImgEditList")
    }
    function handleSave() {
        // 儲存數值
        setOriginalValue(contrast)
        navigate("/ImgEditList")
    }
    const handleTouchStart =()=>{
        document.body.style.overflow = "hidden"; // 禁用滾動
    }
    const handleTouchEnd =()=>{
        document.body.style.overflow = ""; // 恢復滾動
    }


    return (<>
        <MyLayoutHeader>
        <div className="w-100 d-flex flex-column align-items-center px-5" style={{ height: '585px', marginTop: '50px'}} >
                <span className='text-center text-s letterSpacing-2 mt-4 mb-3'>調整對比</span>

                {/* 照片 */}
                <div style={{ height: '375px', width: '285px', overflow: 'hidden' }} className="w-100 rounded-4">
                    <span style={filterStyle}>
                        <img className="" src={CroppedSrc || imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </span>
                </div>

                {/* 拉桿 */}
                <div className='w-100 px-4 mt-5 mb-2'>
                    <input onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onChange={handleChange} className='form-range w-100' type="range" min={50} max={150} value={contrast} />
                </div>

                {/* save/ cancel */}
                <div className="w-100 d-flex justify-content-between mt-4 px-3">
                    <button onClick={handleCancel} className='btn'>
                        <img src="src/assets/img/icon/cross-circle-fill-black.svg" width={'40px'} />
                    </button>
                    <button onClick={handleSave} className='btn'>
                        <img src="src/assets/img/icon/Ok.svg" width={'40px'} />
                    </button>
                </div>
            </div>
        </MyLayoutHeader>
    </>)
}

export default ImgEditContrast
