window.addEventListener("scroll", function () {
    var richking = document.querySelector(".secondContents");
    var javascript = document.querySelector(".thirdContents");
    var snow = document.querySelector("#outer");
    var scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > 50 && scrollLocation < 900 && richking.className == "secondContents") {
        richking.className += " fadeInStyle";
        snow.className = "";
    }
    else if (scrollLocation > 800 && scrollLocation < 1500 && javascript.className == "thirdContents") {
        javascript.className += " fadeInStyle";
    }
});
