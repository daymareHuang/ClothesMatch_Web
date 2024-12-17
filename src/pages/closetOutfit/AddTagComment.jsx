import React, { useContext, useRef } from 'react'
// import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Dressify.css'

import OutfitContext from "../../contexts/OutfitContext";

function AddTagComment({ setIsSliderVisible, selectID }) {
    const { tagList } = useContext(OutfitContext)
    const { comment, type, size, content } = tagList[selectID]

    // 各 element
    const commentRef = useRef(null);
    const typeRef = useRef(null);
    const sizeRef = useRef(null);
    const brandRef = useRef(null);

    function handleCommit(event) {
        event.preventDefault()

        tagList[selectID].comment = commentRef.current.value;
        tagList[selectID].type = typeRef.current.value;
        tagList[selectID].size = sizeRef.current.value
        tagList[selectID].content = brandRef.current.value;

        setIsSliderVisible(false);
    }

    const handleCommentInput = (event) => {

    }


    return (
        <div className='d-flex flex-column align-items-center container m-0'>
            <form className='row px-3'>
                {/* Comment */}
                <div>
                    <label className="text-s mt-2 mb-2" htmlFor='comment'>標註內容 :</label>
                    <textarea ref={commentRef} defaultValue={comment} id='comment' onInput={handleCommentInput}
                        className="text-m form-control w-100 ps-4"
                        style={{ backgroundColor: 'var(--color-second)', height: '100px', resize: 'none', }}>
                    </textarea>
                </div>

                {/* 選項 */}
                <div className="row mt-4">
                    {/* 類型 */}
                    <div className='col form-group'>
                        <label className='text-s' htmlFor='type' >類型</label>
                        <select className='rounded-pill text-m form-select' style={{ backgroundColor: 'var(--color-second)' }} id='type' ref={typeRef} defaultValue={type} >
                            <option value="1" >羽絨外套</option>
                            <option value="2" >西裝外套</option>
                            <option value="3" >商務襯衫</option>
                        </select>
                    </div>

                    {/* 尺寸 */}
                    <div className="col form-group">
                        <label className='text-s' htmlFor='size' >類型</label>
                        <select className='rounded-pill text-m form-select' style={{ backgroundColor: 'var(--color-second)' }} ref={sizeRef} id='size' defaultValue={size} >
                            <option value="1" >XS</option>
                            <option value="2" >S</option>
                            <option value="3" >M</option>
                            <option value="4" >L</option>
                            <option value="5" >XL</option>
                            <option value="6" >XXL</option>
                        </select>
                    </div>
                </div>

                {/* 牌子 */}
                <div className="row mt-4">
                    <div className='form-group col'>
                        <label className='text-s' htmlFor='brand' >牌子</label>
                        <select className='rounded-pill text-m px-3 form-select' style={{ backgroundColor: 'var(--color-second)' }} id='brand' ref={brandRef} defaultValue={content} >
                            <option value="Uniqlo" >Uniqlo</option>
                            <option value="Beams" >Beams</option>
                            <option value="H&M" >H&M</option>
                        </select>
                    </div>
                </div>


                {/* 送出 */}
                <div className='row d-flex justify-content-center mt-4 mb-2'>
                    <button className=" btn px-4 rounded-pill"
                        style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', width: '100px' }}
                        onClick={handleCommit} >新增</button>
                </div>

            </form>
        </div>
    )
}

export default AddTagComment
