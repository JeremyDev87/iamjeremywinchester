
window.addEventListener("scroll",() => {
    let richking:any = document.querySelector(".secondContents");
    let javascript:any = document.querySelector(".thirdContents");
    let snow:any = document.querySelector("#outer");
    let scrollLocation:number = document.documentElement.scrollTop;
    if(scrollLocation>50  && scrollLocation <900 && richking.className=="secondContents") {
        richking.className += " fadeInStyle";
        snow.className="";
    }else if(scrollLocation>800  && scrollLocation <1500 && javascript.className=="thirdContents"){
        javascript.className += " fadeInStyle";
    }
})