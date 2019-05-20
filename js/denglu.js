document.addEventListener("DOMContentLoaded",function(){
    // var register = document.querySelector("#register");
    var uname = document.querySelector(".uname");
    var upwd =document.querySelector(".upwd");
    var btnimg =document.querySelector(".btn-img");
    var status =[200,304];
    var unameStatus =false;
    var upwdStatus =false;

    var str = decodeURI (location.search.slice(1));
    console.log(str);
    uname.value =str;

    btnimg.onclick =()=>{
        if(getCookie('uname')){
            alert("请先退出");
        }else{
            ajax2({                    
                type:'post',
                url:'../api/denglu.php',
                data:'uname='+uname.value +'&upwd='+upwd.value,
                success:function(str){
                    if(str=='yes'){
                        location.href='../index.html?'+uname.value;
                        setCookie('uname',uname.value,1);
                    }else{
                        alert("登录失败");
                    }
                }
            })
        }                
    } 
})