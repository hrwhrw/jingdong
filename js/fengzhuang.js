//吸顶
let xiDing =(id)=>{
    let head = document.querySelector(id);
    console.log(head);
    let menu = document.getElementById('menu');
    let iw = head.offsetHeight;				
    //滚动滑轮
    window.onscroll = ()=> {
        let scrollTop = window.scrollY;//获取滚动距离Y
        if(scrollTop >= iw) {
            menu.className = 'fix';
        }else{
            menu.className = '';
        }
    }
}

//回到顶部
let returnTop =(btnId,height)=>{
    let totop = document.querySelector(btnId);
    console.log(totop);
    //1.当浏览器滚动过程中，若滚动条位置大于800px，才显示totop
    window.onscroll =function(){
        if(window.scrollY>height){
            totop.style.display ='block';
        }else if(window.scrollY<=height){
            totop.style.display ='none'
        }			
    }
    //2.点击totop,设置浏览器滚动距离，慢慢变小
    // 在事件中开启定时器，记得先清除定时器
    totop.onclick =function(){
        clearInterval(totop.timer);
        totop.timer =setInterval(function(){
            let top =window.scrollY;//1获取当前值，赋给变量
            let speed = (0-top)/10;//2动态计算速度
            top += speed;//3变量更新
            if(top==0){
                clearInterval(totop.timer);
            }
            window.scrollTo(0,top);
        },10)
    }  
}
//倒计时
let daoJiShi=(id)=>{
    let output = document.getElementById(id);
    let end = new Date("2019/2/26 15:20:00");
    daojishi();
    setInterval(daojishi,1000)

    function daojishi(){
        let now = new Date();
        let miao= parseInt((end-now)/1000);
        let second = miao%60;
        let minute= parseInt(miao/60)%60;
        let hour = parseInt(miao/60/60)%24;
        let tian = parseInt((miao/60/60)%24);
        output.innerHTML=tian+"天"+hour+"时"+minute+"分"+second+"秒";

    }
}
//选项卡
let xuanXiangKa=(id)=>{
    let clickBox = document.getElementsByClassName(id)[0];
    console.log(clickBox);
    let contentBox = document.getElementsByClassName("contentBox")[0];
    let clicks = clickBox.children;
    let boxs = contentBox.children;
    // 1.第一个clicks高亮，及第一个div显示
    clicks[0].className = "active";
    boxs[0].className = "active";
    // 2.遍历每个clicks，
    // 点击不同的按钮
    //(1)先清除所有高亮,自己要高亮
    //(2)清除所有div显示，对应的div显示
    // let i = 0;//全局变量，所以每次更新都是更新同一个i
    for(let i=0;i<clicks.length;i++){
        clicks[i].idx = i;
        //clicks[0].idx=0   clicks[1].idx=1  clicks[2].idx=2;
        //不可能绑定一个，再等你点击一个，再绑定下一个 i==>3 
        clicks[i].onclick = function(){ 
            for(let j=0;j<clicks.length;j++){
                clicks[j].className = "";
                boxs[j].className = "";
            }
            // this:当前绑定的被点击的那个对象
            this.className = "active";
            boxs[this.idx].className = "active";
            // boxs[i].className = "active";//错误写法：报错：
            // Cannot set property 'className' of undefined ==>boxs[i]是undefined
        }
    }
        
}
//轮播图
let lunBo=(id)=>{
    let focus =document.querySelector(id);
    console.log(focus);
    let foUl =focus.children[0];
    let newLi = foUl.children[0].cloneNode(true);//复制li
    let prev = focus.children[1].children[0];
    console.log(prev);
    let next = focus.children[1].children[1];
    console.log(next);
    foUl.appendChild(newLi);//追加到父元素的最后一个位置
    let idx =0;//2(1)索引要为全局变量
    let page;//变成全局变量
    //1.等待第一张图片加载完毕，实现大盒子及foUl的宽度
    let firstImg =foUl.children[0].children[0];//img
    let len =foUl.children.length;//li的长度
    firstImg.onload =function(){
        focus.style.width =firstImg.offsetWidth +'px';
    foUl.style.width =firstImg.offsetWidth * len +'px';
    }
    
    //2.每个2秒播放一张
    let timer = setInterval(autoPlay,2000);
    //3.做小圆
    createDotted();
    //5.鼠标移入focus上面，停止轮播，移除focus,回复轮播
    focus.onmouseover =function(){
        clearInterval(timer);
    }
    focus.onmouseout =function(){
        timer = setInterval(autoPlay,2000);
    }
    //6.点击右键，调用自动轮播函数
    next.onclick = ()=>{
        autoPlay();
    }
    //7.点击左键，idx--.调用showPic()
    prev.onclick =function(){
        idx--;
        showPic();
    }
    console.log(page);
    // 8.点击小圆点
    page.onclick = function(e){

        if(e.target.tagName == "SPAN"){
            idx = e.target.innerText - 1;
            showPic();
        }
    }
    //自动轮播函数
    function autoPlay(){
        idx++;
        showPic();
    }
        function showPic(){
        if(idx==len){
            foUl.style.left =0;
            idx =1;
        } 
        if(idx ==-1){
            idx =3;
            foUl.style.left = -firstImg.offsetWidth*(len-1)+ 'px';
        }
        //4.移除所有高亮,当前索引对应的小圆点高亮
        for(let i=0;i<len-1;i++){//移除所有高亮
            page.children[i].classList.remove("active");
        }
        if(idx==len-1){
            page.children[0].classList.add("active");
        }else{
            page.children[idx].classList.add("active");
        }
        
        bufferAnimation(foUl,{left:-firstImg.offsetWidth*idx},20)
    }

    //3.做小圆点
    function createDotted(){
     page =document.createElement("div");//添加节点
     page.classList.add("page");//记得添加类名
    for(let i=1;i<len;i++){//不知道有几个span，所有遍历
        let span =document.createElement("span");
        span.innerHTML  = i;//添加数字 
        page.appendChild(span);//然后追加到page里面	
    }
    focus.appendChild(page);
    page.children[0].classList.add("active");//添加高亮
    }      
}
//下拉菜单
let xiaLa =(id,boxId)=>{
    let btn = document.getElementById(id);
    let box = document.getElementById(boxId);
    let istrue = true;
    //点击按钮，下拉框显示
    btn.onclick = function (ev) {
    ev.stopPropagation();
    if(ev.stopPropagation){
        ev.stopPropagation
    }else{
        ev.cancelBubble = true;
    }
    if(istrue){
        box.style.display = 'block';
        console.log('显示')
    }
    else{
        box.style.display = 'none';
        console.log('隐藏')
    }
    istrue = !istrue;

    }
    document.onclick =function (){
    istrue = true;
    box.style.display = 'none';
    } 
}
//手风琴
//找节点
let fenQin =(btnId)=>{
    let btns = document.querySelectorAll(btnId);
    console.log(btns);
    let cons = document.querySelectorAll('#box ul');
    
    //				//手风琴效果：多个下拉菜单
    for(let i = 0; i < btns.length; i++) {
        btns[i].onmouseover = function() {//鼠标移入的时候，下面的菜单出现
            this.children[1].style.height = '120px';
            this.children[1].style.overflow = '';
            console.log(666);
        }
        btns[i].onmouseout = function() {//鼠标移开隐藏
            this.children[1].style.height = '0';
            this.children[1].style.overflow = 'hidden';
        }
    }
}
//放大镜
 //1.获取元素
 let fangDaJing =(id)=>{
    let magnify = document.querySelector(id);
    console.log(magnify);
    let minBox = document.querySelector('.min-img');
    let minImg = document.querySelector('.min-img img');
    let mask = document.querySelector('.mask');
    let maxBox = document.querySelector('.max-img');
    let maxImg = document.querySelector('.max-img img');
    minBox.onmouseenter = function(){
        mask.style.display = 'block';
        maxBox.style.display = 'block';
    }
    minBox.onmousemove =function(e){
        let x =(e.clientX -magnify.offsetLeft) -mask.offsetWidth/2;
        let y =(e.clientY -magnify.offsetTop) -mask.offsetHeight/2;
        //遮罩运动的最大距离
        let maxX=minBox.offsetWidth -mask.offsetWidth;
        let maxY=minBox.offsetHeight -mask.offsetHeight;
        if(x>maxX){
            x =maxX;
        };
        if(y>maxY){
            y=maxY;
        };
        if(x<=0){
            x=0;
        }if(y<=0){
            y=0;
        }
        mask.style.left =x +'px';
        mask.style.top =y +'px';   
        let biliX =(maxImg.offsetWidth-maxBox.offsetWidth)/maxX;
        let biliY =(maxImg.offsetHeight-maxBox.offsetHeight)/maxY;
        maxImg.style.left= -x*biliX +'px';
        maxImg.style.top = -y* biliY + 'px';
    }
    minBox.onmouseleave =function(){
        mask.style.display = 'none';
        maxBox.style.display = 'none';
    }
    let imglist =document.querySelectorAll(".img-list li");
    for(let i=0;i<imglist.length;i++){
        (function(i){
            imglist[i].onclick =function(){
                minImg.src =`../img/lb${i+1}.jpg`;
                maxImg.src =`../img/lb${i+1}.jpg`;
            }
        })(i)
    }
 }
