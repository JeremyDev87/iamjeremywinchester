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
    var nowImgNum = Number(imgUrlArr[imgUrlArr.length - 1].replace('.jpeg")', ''));
    nowImgNum === 0 ? nowImgNum = 1 : nowImgNum;
    parm === 'next' ? nowImgNum++ : nowImgNum--;
    nowImgNum = nowImgNum < 1 ? 8 : nowImgNum;
    nowImgNum = nowImgNum > 8 ? 1 : nowImgNum;
    imgDiv.style.backgroundImage = "url('/img/portfolio/".concat(nowImgNum, ".jpeg')");
    var subtitle = document.querySelector(".fourthSubTitle span");
    var subDescription = document.querySelector(".fourthSubTitle p");
    switch (nowImgNum) {
        case 1:
            subtitle.innerHTML = "test1";
            subDescription.innerHTML = "test1";
            break;
        case 2:
            subtitle.innerHTML = "test2";
            subDescription.innerHTML = "test2";
            break;
        case 3:
            subtitle.innerHTML = "test3";
            subDescription.innerHTML = "test3";
            break;
        case 4:
            subtitle.innerHTML = "test4";
            subDescription.innerHTML = "test4";
            break;
        case 5:
            subtitle.innerHTML = "test5";
            subDescription.innerHTML = "test5";
            break;
        case 6:
            subtitle.innerHTML = "test6";
            subDescription.innerHTML = "test6";
            break;
        case 7:
            subtitle.innerHTML = "test7";
            subDescription.innerHTML = "test7";
            break;
        case 8:
            subtitle.innerHTML = "test8";
            subDescription.innerHTML = "test8";
            break;
        case 9:
            subtitle.innerHTML = "test9";
            subDescription.innerHTML = "test9";
            break;
        case 10:
            subtitle.innerHTML = "test10";
            subDescription.innerHTML = "test10";
            break;
        default:
            subtitle.innerHTML = "asdf";
            subDescription.innerHTML = "asdf";
            break;
    }
};
leftBtn.addEventListener("click", function () { btnEvent('before'); });
rightBtn.addEventListener("click", function () { btnEvent('next'); });
window.addEventListener("scroll", ShowBgContents);
ShowBgContents();
