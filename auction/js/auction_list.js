// 경매 아이템 모두 보여주기
async function getAllAuctionView() {

    // api.js에서 경매 데이터 조회
    const auctions = await auctionView();

    // 경매 data를 html에 append
    var closingAuctions = auctions['closing_auctions']
    var hotAuctions = auctions['hot_auctions']
    var noBidAuctions = auctions['nobid_auctions']
    const closingAuctionsList = document.getElementById("closing-auction-container")
    const hotAuctionsList = document.getElementById("hot-auction-container")
    const noBidAuctionsList = document.getElementById("nobid-auction-container")

    // 함수 실행시 기존 각 auction-container의 child node 모두 삭제
    closingAuctionsList.replaceChildren()
    hotAuctionsList.replaceChildren()
    noBidAuctionsList.replaceChildren()

    for (let i = 0; i < closingAuctions.length; i++) {
        var newAuction = document.createElement("div")
        newAuction.setAttribute("class", "auction closing-auction")
        closingAuctionsList.append(newAuction)

        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", "#")
        newAuction.append(newAnchor)


        var newImage = document.createElement("img")
        newImage.setAttribute("class", "image")
        newImage.setAttribute("src", "https://preview.redd.it/6z3wrreza5a61.png?width=640&crop=smart&auto=webp&s=24019710b7e392758cb4440b6bb72b32d36e5118")
        newAnchor.append(newImage)

        var newOverlay = document.createElement("div")
        newOverlay.setAttribute("class", "overlay")
        newAnchor.append(newOverlay)

        var newText = document.createElement("div")
        var newLine = document.createElement("br")
        newText.setAttribute("class", "text")
        newText.innerHTML += '제목: ' + closingAuctions[i]['painting']['title']
        newText.append(newLine)
        newText.innerHTML += '원작자: ' + closingAuctions[i]['painting']['artist']['nickname']
        newText.append(newLine)
        newText.innerHTML += '현 소유자: ' + closingAuctions[i]['painting']['owner']
        newText.append(newLine)
        newText.innerHTML += 'Current Bid: ' + closingAuctions[i]['current_bid']
        newText.append(newLine)
        newText.innerHTML += 'Time Remaining: ' + closingAuctions[i]['auction_end_date']
        newText.append(newLine)
        newOverlay.append(newText)
    }

    for (let i = 0; i < hotAuctions.length; i++) {
        var newAuction = document.createElement("div")
        newAuction.setAttribute("class", "auction hot-auction")
        hotAuctionsList.append(newAuction)

        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", "#")
        newAuction.append(newAnchor)

        var newImage = document.createElement("img")
        newImage.setAttribute("class", "image")
        newImage.setAttribute("src", "https://artfiles.alphacoders.com/151/thumb-1920-151878.jpg")
        newAnchor.append(newImage)

        var newOverlay = document.createElement("div")
        newOverlay.setAttribute("class", "overlay")
        newAnchor.append(newOverlay)

        var newText = document.createElement("div")
        var newLine = document.createElement("br")
        newText.setAttribute("class", "text")
        newText.innerHTML += '제목: ' + hotAuctions[i]['painting']['title']
        newText.append(newLine)
        newText.innerHTML += '원작자: ' + hotAuctions[i]['painting']['artist']['nickname']
        newText.append(newLine)
        newText.innerHTML += '현 소유자: ' + hotAuctions[i]['painting']['owner']
        newText.append(newLine)
        newText.innerHTML += 'Current Bid: ' + hotAuctions[i]['current_bid']
        newText.append(newLine)
        newOverlay.append(newText)
    }

    for (let i = 0; i < noBidAuctions.length; i++) {
        var newAuction = document.createElement("div")
        newAuction.setAttribute("class", "auction nobid-auction")
        noBidAuctionsList.append(newAuction)

        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", "#")
        newAuction.append(newAnchor)


        var newImage = document.createElement("img")
        newImage.setAttribute("class", "image")
        newImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyXIYSfnM9rP4xi_RLcTwAQebcmZ_eZuJtA&usqp=CAU")
        newAnchor.append(newImage)

        var newOverlay = document.createElement("div")
        newOverlay.setAttribute("class", "overlay")
        newAnchor.append(newOverlay)

        var newText = document.createElement("div")
        var newLine = document.createElement("br")
        newText.setAttribute("class", "text")
        newText.innerHTML += '제목: ' + noBidAuctions[i]['painting']['title']
        newText.append(newLine)
        newText.innerHTML += '원작자: ' + noBidAuctions[i]['painting']['artist']['nickname']
        newText.append(newLine)
        newText.innerHTML += '현 소유자: ' + noBidAuctions[i]['painting']['owner']
        newText.append(newLine)
        newText.innerHTML += 'Current Bid: ' + noBidAuctions[i]['current_bid']
        newText.append(newLine)
        newOverlay.append(newText)
    }

    btnView()

}

// 카테고리별 경매 아이템 보여주기
async function getCategoryAuctionView(category) {

    // api.js에서 카테고리별 경매 데이터 조회
    const auctions = await categoryView(category);

    // 경매 data를 html에 append
    var closingAuctions = auctions['closing_auctions']
    var hotAuctions = auctions['hot_auctions']
    var noBidAuctions = auctions['nobid_auctions']
    const closingAuctionsList = document.getElementById("closing-auction-container")
    const hotAuctionsList = document.getElementById("hot-auction-container")
    const noBidAuctionsList = document.getElementById("nobid-auction-container")

    // 함수 실행시 기존 각 auction-container의 child node 모두 삭제
    closingAuctionsList.replaceChildren()
    hotAuctionsList.replaceChildren()
    noBidAuctionsList.replaceChildren()

    for (let i = 0; i < closingAuctions.length; i++) {
        var newAuction = document.createElement("div")
        newAuction.setAttribute("class", "auction closing-auction")
        closingAuctionsList.append(newAuction)

        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", "#")
        newAuction.append(newAnchor)


        var newImage = document.createElement("img")
        newImage.setAttribute("class", "image")
        newImage.setAttribute("src", "https://m.7art7.com/web/product/big/202012/a6352d03c87af7166e62c854ebc3b092.jpg")
        newAnchor.append(newImage)

        var newOverlay = document.createElement("div")
        newOverlay.setAttribute("class", "overlay")
        newAnchor.append(newOverlay)

        var newText = document.createElement("div")
        var newLine = document.createElement("br")
        newText.setAttribute("class", "text")
        newText.innerHTML += '제목: ' + closingAuctions[i]['painting']['title']
        newText.append(newLine)
        newText.innerHTML += '원작자: ' + closingAuctions[i]['painting']['artist']['nickname']
        newText.append(newLine)
        newText.innerHTML += '현 소유자: ' + closingAuctions[i]['painting']['owner']
        newText.append(newLine)
        newText.innerHTML += 'Current Bid: ' + closingAuctions[i]['current_bid']
        newText.append(newLine)
        newText.innerHTML += 'Time Remaining: ' + closingAuctions[i]['auction_end_date']
        newText.append(newLine)
        newOverlay.append(newText)
    }

    for (let i = 0; i < hotAuctions.length; i++) {
        var newAuction = document.createElement("div")
        newAuction.setAttribute("class", "auction hot-auction")
        hotAuctionsList.append(newAuction)

        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", "#")
        newAuction.append(newAnchor)

        var newImage = document.createElement("img")
        newImage.setAttribute("class", "image")
        newImage.setAttribute("src", "https://m.7art7.com/web/product/big/202012/a6352d03c87af7166e62c854ebc3b092.jpg")
        newAnchor.append(newImage)

        var newOverlay = document.createElement("div")
        newOverlay.setAttribute("class", "overlay")
        newAnchor.append(newOverlay)

        var newText = document.createElement("div")
        var newLine = document.createElement("br")
        newText.setAttribute("class", "text")
        newText.innerHTML += '제목: ' + hotAuctions[i]['painting']['title']
        newText.append(newLine)
        newText.innerHTML += '원작자: ' + hotAuctions[i]['painting']['artist']['nickname']
        newText.append(newLine)
        newText.innerHTML += '현 소유자: ' + hotAuctions[i]['painting']['owner']
        newText.append(newLine)
        newText.innerHTML += 'Current Bid: ' + hotAuctions[i]['current_bid']
        newText.append(newLine)
        newOverlay.append(newText)
    }

    for (let i = 0; i < noBidAuctions.length; i++) {
        var newAuction = document.createElement("div")
        newAuction.setAttribute("class", "auction nobid-auction")
        noBidAuctionsList.append(newAuction)

        var newAnchor = document.createElement("a")
        newAnchor.setAttribute("href", "#")
        newAuction.append(newAnchor)


        var newImage = document.createElement("img")
        newImage.setAttribute("class", "image")
        newImage.setAttribute("src", "https://m.7art7.com/web/product/big/202012/a6352d03c87af7166e62c854ebc3b092.jpg")
        newAnchor.append(newImage)

        var newOverlay = document.createElement("div")
        newOverlay.setAttribute("class", "overlay")
        newAnchor.append(newOverlay)

        var newText = document.createElement("div")
        var newLine = document.createElement("br")
        newText.setAttribute("class", "text")
        newText.innerHTML += '제목: ' + noBidAuctions[i]['painting']['title']
        newText.append(newLine)
        newText.innerHTML += '원작자: ' + noBidAuctions[i]['painting']['artist']['nickname']
        newText.append(newLine)
        newText.innerHTML += '현 소유자: ' + noBidAuctions[i]['painting']['owner']
        newText.append(newLine)
        newText.innerHTML += 'Current Bid: ' + noBidAuctions[i]['current_bid']
        newText.append(newLine)
        newOverlay.append(newText)
    }

    btnView()

}


// Load More Button - 누를시 보여주는 경매 아이템을 4개씩 증가
var closingAuctions = document.getElementsByClassName('closing-auction');
var loadMoreClosingBtn = document.querySelector('#load-more-closing');
var closingAuctionsCount = 4;
loadMoreClosingBtn.addEventListener('click',
    function () {
        for (var i = closingAuctionsCount; i < closingAuctionsCount + 4; i++) {
            if (closingAuctions[i]) {
                closingAuctions[i].style.display = 'block';
            }
        }
        closingAuctionsCount += 4;
        if (closingAuctionsCount >= closingAuctions.length) {
            event.target.style.display = 'none';
        }
    }
)

var hotAuctions = document.getElementsByClassName('hot-auction');
var loadMoreHotBtn = document.querySelector('#load-more-hot');
var hotAuctionsCount = 4;
loadMoreHotBtn.addEventListener('click',
    function () {
        console.log(hotAuctions.length)
        for (var i = hotAuctionsCount; i < hotAuctionsCount + 4; i++) {
            if (hotAuctions[i]) {
                hotAuctions[i].style.display = 'block';
            }
        }
        hotAuctionsCount += 4;
        if (hotAuctionsCount >= hotAuctions.length) {
            event.target.style.display = 'none';
        }
    }
)

var noBidAuctions = document.getElementsByClassName('nobid-auction');
var loadMoreNoBidBtn = document.querySelector('#load-more-nobid');
var noBidAuctionsCount = 4;
loadMoreNoBidBtn.addEventListener('click',
    function () {
        for (var i = noBidAuctionsCount; i < noBidAuctionsCount + 4; i++) {
            if (noBidAuctions[i]) {
                noBidAuctions[i].style.display = 'block';
            }
        }
        noBidAuctionsCount += 4;
        if (noBidAuctionsCount >= noBidAuctions.length) {
            event.target.style.display = 'none';
        }
    }
)

// 경매가 4개 이상일 경우에만 Load More Button 보여주기
// 비동기 페이지에서는 버튼을 숨겨주는 함수를 추가적으로 만들어야함
function btnView() {
    console.log('btnView')
    console.log(closingAuctions.length)
    console.log(hotAuctions.length)
    console.log(noBidAuctions.length)

    if (closingAuctions.length > 4) {
        loadMoreClosingBtn.style.display = 'block';
    }
    else {
        loadMoreClosingBtn.style.display = 'none';
    }
    if (hotAuctions.length > 4) {
        loadMoreHotBtn.style.display = 'block';
    }
    else {
        loadMoreHotBtn.style.display = 'none';
    }
    if (noBidAuctions.length > 4) {
        loadMoreNoBidBtn.style.display = 'block';   
    }
    else {
        loadMoreNoBidBtn.style.display = 'none';
    }
}

// 페이지 로딩이 완료되면 실행
$('document').ready(getAllAuctionView());

// btnView() 실행하는 시간 보여주기
// setTimeout(function () { btnView(); }, 200);
