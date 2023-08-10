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
                    {/* festiDetail 폴더에 있는 hanriver 이미지 추가 */}
                    <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width='300px' height='300px'></img>

                </div>

                <div class='fest_info_hub'>
                    <p>Name</p>
                    <p><br></br></p>
                    <p>Address</p>
                    <p><br></br></p>
                    <p>My Likes</p>
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
                    <p>리뷰 제목: </p>
                    <input type='text'></input>
                    <button>리뷰 작성</button>
                    
                </div>
                <div class='review_posting_detail'>
                    <p>리뷰 내용: </p>
                    <input type='text'></input>
                </div>

                <div class='review_posted'>
                    <p>작성된 후기 나열칸</p>
                    <input type='text'></input>
                </div>

            </div>

            </Festi_info>
        </>

    );
}

export default FestiDetail;
