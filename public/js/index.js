var GetScrollLocation = function () {
    return document.documentElement.scrollTop;
};
var ShowBgContents = function () {
    var scrollLocation = GetScrollLocation();
    var richking = document.querySelector(".secondContents");
    var javascript = document.querySelector(".thirdContents");
    var portfolio = document.querySelector(".fourthContents");
    var snow = document.querySelector("#outer");
    if (scrollLocation >= 1 && richking.className == "secondContents") {
        richking.className += " fadeInStyle";
        snow.className = "";
    }
    if (scrollLocation >= 700 && javascript.className == "thirdContents") {
        javascript.className += " fadeInStyle";
    }
    if (scrollLocation >= 1500 && portfolio.className == "fourthContents") {
        portfolio.className += " fadeInStyle";
    }
};
var leftBtn = document.querySelector(".leftArrow");
var rightBtn = document.querySelector(".rightArrow");
var btnEvent = function (parm) {
    var imgDiv = document.querySelector(".mainPortfolio");
    var imgUrl = imgDiv.style.backgroundImage;
    var imgUrlArr = imgUrl.split('/');
    var nowImgNum = Number(imgUrlArr[imgUrlArr.length - 1].replace('.png")', ''));
    nowImgNum === 0 ? nowImgNum = 1 : nowImgNum;
    parm === 'next' ? nowImgNum++ : nowImgNum--;
    nowImgNum = nowImgNum < 1 ? 10 : nowImgNum;
    nowImgNum = nowImgNum > 10 ? 1 : nowImgNum;
    imgDiv.style.backgroundImage = "url('/img/portfolio/".concat(nowImgNum, ".png')");
};
leftBtn.addEventListener("click", function () { btnEvent('before'); });
rightBtn.addEventListener("click", function () { btnEvent('next'); });
window.addEventListener("scroll", ShowBgContents);
ShowBgContents();
