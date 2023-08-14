import axios from 'axios';

const serverApi = axios.create({
    headers:{
        'Content-Type': 'application/json',
    }
});

export const detailApi = async () => {
    let detail = [];
    let detailCommon = [];
    let detailCommon_title = [];
    let detailCommon_overview = [];

    await serverApi(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/detail/2657490`).then((res) => {
        detail = res.data;
        detailCommon = res.data.detailCommon;
    });
    return [detail, detailCommon, detailCommon_title, detailCommon_overview];

}

// export const getFestiDetail = async (festiId) => {
//     try {
//         const response = await serverApi.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/detail/content_id`);

//         const data = response.data;
//         return data;
//     } catch (error) {
//         console.error('에러 발생: ', error);
//         return null;
//     }

// };
