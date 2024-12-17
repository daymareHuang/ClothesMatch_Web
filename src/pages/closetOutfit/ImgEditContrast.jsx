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


    return (<>
        <MyLayoutHeader>
            {/* 暫時 */}
            <div className='w-100' style={{ height: "50px" }}></div>
            <div className=" d-flex flex-column align-items-center px-5" style={{ height: '585px' }} >
                <span className='text-center text-s letterSpacing-2 mt-4 mb-3'>調整對比</span>

                {/* 照片 */}
                <div className="rounded-5 overflow-hidden" style={{ width: '270px' }} >
                    <img style={filterStyle} className="img-fluid" src={CroppedSrc || imageSrc} />
                </div>

                {/* 拉桿 */}
                <div className='w-100 px-4 mt-5 mb-2'>
                    <input onChange={handleChange} className='form-range w-100' type="range" min={50} max={150} value={contrast} />
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
