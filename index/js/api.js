const backEndBaseUrl = "http://127.0.0.1:8000"
const frontEndBaseUrl = "http://127.0.0.1:5500"
const token = localStorage.getItem("farm_access_token");

async function uploadAuction() {
    const category = document.getElementById('category').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const startPrice = document.getElementById('start-price').value;
    const bidEndDate = document.getElementById('bid-end-date').value;
    const image = document.getElementById("file1").files[0];
    console.log(image)
    formDataPainting = new FormData();
    formDataAuction = new FormData();

    formDataPainting.append('category', category);
    formDataPainting.append('title', title);
    formDataPainting.append('description', description);
    formDataPainting.append('image', image);
    
    // formDataAuction.append('painting', formDataPainting)
    formDataAuction.append('start_bid', startPrice);
    formDataAuction.append('auction_end_date', bidEndDate);

    if (title && description && bidEndDate) {
        const response = await fetch(`${backEndBaseUrl}/gallery/upload/makepainting/`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Authorization': "Bearer " + localStorage.getItem("farm_access_token"),
                'X-CSRFToken': csrftoken,
            },
            body: formDataPainting,
        });

        const response_json = await response.json();

        const paintingId = response_json['id']
        formDataAuction.append('painting', paintingId);

        const response2 = await fetch(`${backEndBaseUrl}/auction/upload/`, {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Authorization': "Bearer " + localStorage.getItem("farm_access_token"),
                'X-CSRFToken': csrftoken,
            },
            body: formDataAuction,
        });
        const response2_json = await response2.json();

        if (response.status === 200 && response2.status === 200) {
            alert("업로드 성공");
            window.location.reload();
        } else if (response.status === 400) {
            alert("업로드 실패");
            // window.location.reload();
        }
    }
    else {
        alert("모든 빈칸을 채워주세요");
    }
}

async function userPointView() {

    const response = await fetch(`${backEndBaseUrl}/user/userpoint/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': "*",
            'X-CSRFToken': csrftoken,
            'Authorization': "Bearer " + localStorage.getItem("farm_access_token"),
        }
    }
    );

    response_json = await response.json()

    if (response.status == 200) {
        myPoint = response_json
        return myPoint
    }

    else {
        return response.status
    }
}