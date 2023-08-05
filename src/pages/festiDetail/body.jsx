import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import {Festi_info} from './style';

function FestiDetail() {


    return (
        <>
        <Festi_info>
            <div>
                <h1>FestiDetail: 축제 개별 페이지</h1>
            </div>

            <div class='fest_info'>
                <div class='fest_info_img'>
                    <p>이미지</p>
                </div>

                <div class='fest_info_hub'>
                    <p>핵심정보</p>
                </div>

                <div class='fest_info_sub'>
                    <p>부가정보</p>
                </div>

                <div class='fest_info_map'>
                    <p> 각 개별 축제의 지도 api</p>
                </div>

            </div>

            <div class='review_info'>
                <div class='review_posting'>
                    <p>후기 작성칸</p>
                </div>

                <div class='review_posted'>
                    <p>작성된 후기 나열칸</p>
                </div>

            </div>

            </Festi_info>
        </>

    );
}

export default FestiDetail;
