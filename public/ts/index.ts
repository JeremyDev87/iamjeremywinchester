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


const leftBtn = document.querySelector(".leftArrow");
const rightBtn = document.querySelector(".rightArrow");
const btnEvent = (parm:string) :void => {
    let imgDiv:HTMLDivElement = document.querySelector(".mainPortfolio");
    let imgUrl = imgDiv.style.backgroundImage;
    let imgUrlArr:string[] = imgUrl.split('/');
    let nowImgNum : number= Number(imgUrlArr[imgUrlArr.length-1].replace('.png")',''));
    nowImgNum===0?nowImgNum=1:nowImgNum;
    parm==='next'?nowImgNum++:nowImgNum--;
    nowImgNum = nowImgNum<1?10:nowImgNum;
    nowImgNum = nowImgNum>10?1:nowImgNum;
    imgDiv.style.backgroundImage=`url('/img/portfolio/${nowImgNum}.png')`;
}
leftBtn.addEventListener("click",()=>{btnEvent('before')});
rightBtn.addEventListener("click",()=>{btnEvent('next')});
window.addEventListener("scroll",ShowBgContents);
ShowBgContents();