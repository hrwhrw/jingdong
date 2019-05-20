$(function(){
    $('#mpanel4').click(function(e){
        e.stopPropagation();
    });
    
});
//     $('#mpanel4').slideVerify({
//         type : 2,		//类型
//         vOffset : 5,	//误差量，根据需求自行调整
//         vSpace : 5,	//间隔
//         imgName : ['1.jpg', '2.jpg'],
//         imgSize : {
//             width: '400px',
//             height: '200px',
//         },
//         blockSize : {
//             width: '40px',
//             height: '40px',
//         },
//         barSize : {
//             width : '400px',
//             height : '40px',
//         },
//         ready : function() {
//         },
//         success : function() {
//             console.log(123)
//             $('#mpanel4').css('display','none');
//             alert("注册成功,点击下一步去登录吧！");
//         },
//         error : function() {
// //		        	alert('验证失败！');
//         }
        
//     });


       

// if($(" input[ type='text' ]").attr("value")==''){
//     console.log(55)
//     $('.tiJiao').click(function(){
//         $('.i-error').css('display','block');
//     })
// }else{
//      $('.tiJiao').click(function(){
//         if(!this.isok) {
//             $('#mpanel4').css('display','block');
//             this.isok = true;
//         }
//     });
// }
  
//     $('.layui-input').on('blur',function(){
//         $.ajax({
//             type:'psot',
//             url:'../api/zhuce.php',
//             data:{
//                 uname:uname
//             },    
//             success:str=>{
//                 if(str=='yes'){
                     
//                 }else{
 
//                 }
//             }
//         })
//     })              
document.addEventListener("DOMContentLoaded",function(){   
    // var register = document.querySelector("#register");
    var layuiinput = document.querySelector(".layui-input");
    // var tiJiao =document.querySelector('.tiJiao');
    var mpanel4 =document.querySelector('#mpanel4');
    var upwd =document.querySelector('.upwd');
    // var error =document.querySelector('.i-error');
    var xiaYiBu =document.querySelector(".xiaYiBu");
    var status =[200,304];
    var unameStatus =false;
    var upwdStatus =false;

    //1.当用户名失去焦点时，当用户名满足要求(不能为空，不能以数字开头，限制6-12位)
    //2.发送请求到php，将用户名传过去，php去数据库进行查找
    layuiinput.onblur=()=>{
        if(layuiinput.value==''){
            layuiinput.nextElementSibling.innerText ="请输入手机号码";
        }else{
            ajax2({
                type:'post',
                url:'../api/zhuce.php',
                data : 'uname=' + layuiinput.value,
                success:function(str){
                   
                    if(str=='yes'){
                        layuiinput.nextElementSibling.innerText ="✔";
                        layuiinput.nextElementSibling.style.color = "#58bc58";
                        unameStatus =true;
                        
                    }else{
                        layuiinput.nextElementSibling.innerText ="占用";
                        unameStatus=false;
                        layuiinput.nextElementSibling.style.color = "rgb(249, 41, 83)";
                        }
    
                                
                }   
            })
        }
        
    }
    xiaYiBu.onclick =()=>{
        if(unameStatus){
            ajax2({
                type:'post',
                url:'../api/zhuce_reg.php',
                data:'uname='+layuiinput.value+'&upwd='+upwd.value,
                success:function(str){
                    console.log(str);
                    if(str=='yes'){
                        location.href='denglu.html?'+layuiinput.value;
                    }else{
                        alert("注册失败");
                    }
                }
            })
        }else{
            alert("请完善信息");
        }
        alert('注册成功')
    } 
})

     