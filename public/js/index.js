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
window.addEventListener("scroll", ShowBgContents);
ShowBgContents();
