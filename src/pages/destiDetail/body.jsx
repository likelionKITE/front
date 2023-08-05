import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import {Desti_info} from './style';

function DestiDetail() {
    return(
        <>
        <Desti_info>
            <div>
                <h1>DestiDetail: 여행지 개별 페이지</h1>
            </div>

            <div class='desti_info'>
                <div class='desti_info_img'>
                    <p>이미지</p>
                </div>

                <div class='desti_info_hub'>
                    <p>핵심정보</p>
                </div>

                <div class='desti_info_sub'>
                    <p>부가정보</p>
                </div>

                <div class='desti_info_map'>
                    <p> 각 개별 여행지의 지도 api</p>
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

            </Desti_info>
        </>

    );
}

export default DestiDetail;
