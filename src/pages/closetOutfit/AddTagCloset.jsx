import React, { useContext } from 'react'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Dressify.css'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// 各別頁面
import OutfitContext from "../../contexts/OutfitContext";


function AddTagCloset({setIsSliderVisible, selectID }) {
    const {tagList} = useContext(OutfitContext)
    const [clothes, setClothes] = useState([])
    const [filter, setFilter] = useState([])

    // API 拿衣櫃資料
    React.useEffect(() => {
        async function callAPI() {
            let response = await fetch("../../public/clothes.json");
            let json = await response.json();
            setClothes(json.categories)
            setFilter(json.categories)
        }
        callAPI()
    }, [])

    // 選擇類型
    function handle() {
        let val = event.target.value
        // 把對應的類型資料拿出來
        function result() { return clothes.find(({ type }) => type == val) }

        // 如果選擇顯示全部，就用原始資料，不然就拿對應類型
        setFilter(val === 'ALL' ? [...clothes] : [result()]);
    }

    // 選擇單品
    function handleSelect(event) {
        console.log(selectID);
        
        tagList[selectID].content = event.target.getAttribute('dataTitle');
        setIsSliderVisible(false);
    }

    return (
        <div className='d-flex flex-column align-items-center container m-0'>
            {/* 選擇類型 */}
            <div className='ps-3 w-100 mb-5'>
                <select className='rounded-pill text-center form-control px-2 text-m' 
                        style={{width:'100px', backgroundColor:'var(--color-white)'}}
                        onChange={handle}>
                    <option value="ALL" defaultValue>顯示全部</option>
                    {clothes.map(({ type }) => <option key={type} value={type}>{type}</option>)}
                </select>
            </div>

            {/* 把每個類型的單品顯示出來 */}
            {filter.map(({ items, type }) => <div className='row w-100 px-4' key={type}>
                <p className='text-s text-end pe-4'>{type}</p>
                <hr />
                {/* 圖片 */}
                <Swiper
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={10}
                    grabCursor={true}
                    className='mySwiper mb-5'
                    style={{ width: '375px' }}
                >
                    {items.map((value) => {
                        return (
                            <SwiperSlide style={{ width: '100%' }}>
                                <img onClick={handleSelect} dataTitle={value.title} className='rounded-set-3' style={{ width: '100%' }} src={value.image} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>)}
        </div>
    )
}

export default AddTagCloset
