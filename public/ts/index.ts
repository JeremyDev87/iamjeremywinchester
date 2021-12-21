const GetScrollLocation = ():number => {
    return document.documentElement.scrollTop;
}

const ShowBgContents = ():void => {
    let scrollLocation:number = GetScrollLocation();
    let richking:any = document.querySelector(".secondContents");
    let javascript:any = document.querySelector(".thirdContents");
    let portfolio:any = document.querySelector(".fourthContents");
    let snow:any = document.querySelector("#outer");
    if(scrollLocation>=1  && richking.className=="secondContents") {
        richking.className += " fadeInStyle";
        snow.className="";
    }
    if(scrollLocation>=700  && javascript.className=="thirdContents"){
        javascript.className += " fadeInStyle";
    }
    if(scrollLocation>=1500  && portfolio.className=="fourthContents"){
        portfolio.className += " fadeInStyle";
    }
}
window.addEventListener("scroll",ShowBgContents);
ShowBgContents();