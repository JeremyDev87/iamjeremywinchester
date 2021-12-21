var GetScrollLocation = function () {
    return document.documentElement.scrollTop;
};
var ShowBgContents = function () {
    var scrollLocation = GetScrollLocation();
    var richking = document.querySelector(".secondContents");
    var javascript = document.querySelector(".thirdContents");
    var snow = document.querySelector("#outer");
    if (scrollLocation >= 1 && richking.className == "secondContents") {
        richking.className += " fadeInStyle";
        snow.className = "";
    }
    if (scrollLocation >= 700 && javascript.className == "thirdContents") {
        javascript.className += " fadeInStyle";
    }
};
window.addEventListener("scroll", ShowBgContents);
ShowBgContents();
