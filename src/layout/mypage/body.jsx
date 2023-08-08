import React from "react";


function Mypage() {

    return (
        <>
            <div class='aboutme'>
                <h1>About Me</h1>
                {/* 가운데 위치한 표로 닉네임, ID, 비번 */}

                <table>
                    <td>
                        <tr>Nick Name</tr>
                        <tr>ID</tr>
                        <tr>PW</tr>
                    </td>
                    <td>
                        <tr>닉네임 정보</tr>
                        <tr>아이디 정보</tr>
                        <tr>비밀번호 정보</tr>
                    </td>
                    <td>
                        <tr><button>변경</button></tr>
                        <tr><br></br></tr>
                        <tr><button>변경</button></tr>
                    </td>

                </table>
            </div>

            <div class='mylikes' >
                <h1>My Likes</h1>
                {/* 종대로(왼->오) 찜한 목록들 나열 */}

            </div>

            <div class='myreview'>
                <h1>My Review</h1>
                {/* 횡대로(위->아래) 내가 쓴 리뷰들 나열  */}

            </div>
        </>
    )
}

export default Mypage;