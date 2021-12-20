
window.addEventListener("scroll",() => {
    let richking:any = document.querySelector(".secondContents");
    let javascript:any = document.querySelector(".thirdContents");
    let snow:any = document.querySelector("#outer");
    let scrollLocation:number = document.documentElement.scrollTop;
    if(scrollLocation>=1  && scrollLocation <700 && richking.className=="secondContents") {
        richking.className += " fadeInStyle";
        snow.className="";
    }else if(scrollLocation>=700  && scrollLocation <1500 && javascript.className=="thirdContents"){
        javascript.className += " fadeInStyle";
    }
})