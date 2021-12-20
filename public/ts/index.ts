
window.addEventListener("scroll",() => {
    let richking:any = document.querySelector(".secondContents");
    let snow:any = document.querySelector("#outer");
    let scrollLocation:number = document.documentElement.scrollTop;
    if(scrollLocation>50  && scrollLocation <900 && richking.className=="secondContents") {
        richking.className += " fadeInStyle";
        snow.className="";
    }
})