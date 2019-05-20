$(function(){
    $('.dropdown_wrap').hover(function(){
        var ddt=document.querySelector(".ddt");
        $(ddt).css('display',"block");
    },function(){
        var ddt=document.querySelector(".ddt");
        $(ddt).css('display',"none");
    });

    $('.fore3').hover(function(){
        var dd=document.querySelector(".dd");
        $(dd).css('display',"block",);
        $('.fore3').css('background', '#fff');
    },function(){
        var dd=document.querySelector(".dd");
        $(dd).css('display',"none");
        $('.fore3').css('background', '#e3e4e5');
    });

    $('#settleup-2014').hover(function(){
        $('.dl').css('display','block'); 
    },function(){
        $('.dl').css('display','none');
    });

    $('.headerqrcode_lk').hover(function(){
            $('.headerqrcode_qc').css('opacity','1');
        },function(){
            $('.headerqrcode_qc').css('opacity','0');
        });  
    
        $('.item1').hover(function(){
            var cnm=document.querySelector(".cnm1");
            $(cnm).css('display',"block");
        },function(){
            var cnm=document.querySelector(".cnm1");
            $(cnm).css('display',"none");
        });
        $('.item2').hover(function(){
            var cnm=document.querySelector(".cnm2");
            $(cnm).css('display',"block");
        },function(){
            var cnm=document.querySelector(".cnm2");
            $(cnm).css('display',"none");
        });

        $('.item3').hover(function(){
            var cnm=document.querySelector(".cnm3");
            $(cnm).css('display',"block");
        },function(){
            var cnm=document.querySelector(".cnm3");
            $(cnm).css('display',"none");
        });
        $('.item4').hover(function(){
            var cnm=document.querySelector(".cnm4");
            $(cnm).css('display',"block");
        },function(){
            var cnm=document.querySelector(".cnm4");
            $(cnm).css('display',"none");
        }); 
        $('.itemm').hover(function(){
            var cnm=document.querySelector(".cnm");
            $(cnm).css('display',"block");
        },function(){
            var cnm=document.querySelector(".cnmm");
            $(cnm).css('display',"none");
        }); 
        
        $('.layui-anim').hover(function(){
            console.log(5)
            $(this).addClass('layui-anim-scaleSpring');
        },function(){
            $(this).removeClass('layui-anim-scaleSpring');
            
        });
        $('.csi_img').hover(function(){
            console.log(5)
            $(this).addClass('layui-anim layui-anim-upbit');
        },function(){
            $(this).removeClass('layui-anim layui-anim-upbit');     
        });

        // var gadd=document.querySelectorAll(".goods_add");
        $('.goods_item').hover(function(){
            // $(gadd).css('top',"190px");
            $(this).find(`.goods_add`).css('display','block');
            // $(gadd).css('display','block');
            // $(gadd).addClass('layui-anim layui-anim-upbit');
            $(this).find(`.goods_add`).addClass('layui-anim layui-anim-upbit');

        },function(){     
            $(this).find(`.goods_add`).css('display','none');
            $(this).find(`.goods_add`).removeClass('layui-anim layui-anim-upbit');
            // $(gadd).css('display','none');
            // $(gadd).removeClass('layui-anim layui-anim-upbit');
        }); 
        // 选项卡
        $('.layui-tab-title').on('click','li',function(){
            console.log($(this).attr(`data-id`))
            let block = document.getElementsByClassName(`layui-tab-item`)
            for(let i = 0 ;i<block.length;i++){
             
                if($(`.sb`).css(`right`)==`-270px`){
                    $('.sb').animate({
                    right:0
                },300); 
                }else{
                if($(`.layui-tab-item`).eq($(this).attr(`data-id`)).hasClass(`layui-show`)){ 
                    $('.sb').animate({
                        right:'-270px'
                    },300);
                }
              }  
            }
            
        })

});
// 轮播图
$(document).ready(function () {
    var mySwiper1 = new Swiper ('.swiper1', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: ' .swiper-pagination',
          type: 'progressbar',
          renderProgressbar: function (progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          }
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:true,
        effect : 'fade',
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })   
      
      var mySwiper2 = new Swiper ('.swiper2', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination2',
          },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:true,
        // effect : 'fade',
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })  

      
   })

//    倒计时

$(document).ready(function () {
    var p = document.querySelector(".time");
    // console.log(p)
    var end = new Date("2019/10/26 11:20:00");
		daojishi();
		setInterval(daojishi,1000)

		function daojishi(){
			var now = new Date();
			var miao= toDb(parseInt((end-now)/1000)) ;
			var second = toDb(miao%60);
			var minute= toDb(parseInt(miao/60)%60) ;
			var hour = toDb(parseInt(miao/60/60)%24) ;
			// var tian = parseInt((miao/60/60)%24);
			// p.innerHTML=hour+"时"+minute+"分"+second+"秒";
            p.innerHTML=`<div class="time_item time_hour">
                            <span class="time_item_txt">${hour}</span>
                        </div>
                        <div class="time_split">
                            <i class="time_split_dot time_split_top"></i>
                            <i class="time_split_dot time_split_bottom"></i>
                        </div>
                        <div class="time_item time_minute">
                            <span class="time_item_txt">${minute}</span>
                        </div><div class="time_split">
                            <i class="time_split_dot time_split_top"></i>
                            <i class="time_split_dot time_split_bottom"></i>
                        </div>
                        <div class="time_item time_second">
                            <span class="time_item_txt">${second}</span>
                        </div>`
        }
})

layui.use('util', function(){
    var util = layui.util;
    
    //执行
    util.fixbar({
      bar1: true
      ,click: function(type){
        console.log(type);
        if(type === 'bar1'){
          alert('点击了bar1')
        }
      },
      showHeight:1000,
    });
  });

 //注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function(){
    var element = layui.element;
    
    //…
  });


// 渲染
ajax2({
    type:'post',
    url:'../api/index.php',
    // data : 'name=' + name,
    success:function(str){
        let arr = JSON.parse(str)
        console.log(arr)
        $(`.chaoshi_seckill_list`).html(arr.map((item)=>{
            return` <li class="chaoshi_seckill_item csi">
            <div class="csi_pic">
                <a href="" class="csi_pic_lk">
                    <img src="${item.img}" alt="" class="csi_img lui">
                    <p class="csi_name">${item.name}</p>
                </a>
            </div>
            <p class="csi_price clearfix">    
                <span class="csi_price_new" "="">¥${item.price}</span>    
                <a href="" class="J_goods_add cdi_add">
                    <i class="cdi_add_icon"></i>
                </a> 
            </p>
        </li>`
        }))            
    }   
})

document.addEventListener("DOMContentLoaded",function(){
    var linklogin =document.querySelector('.link-login');
    var linkregist= document.querySelector('.link-regist');
    var tuiChu =document.querySelector('.tuiChu');
    if(getCookie('uname')){
        linklogin.innerHTML=getCookie("uname") +' 欢迎你';
        linkregist.innerHTML='退出';
        linkregist.style.display="none";
        tuiChu.style.display="inline-block";
    }else{
        linklogin.innerHTML='请登录';
        linklogin.onclick=()=>{
        location.href='html/denglu.html';
        linkregist.style.display="inline-block";
        tuiChu.style.display="none";
        }
    }
    tuiChu.onclick =function(){
        removeCookie('uname');
        location.href='index.html';
    }
})

document.addEventListener("DOMContentLoaded",function(){
    var goodss = document.querySelector(".goodss");
    console.log(goodss)
    // 5.当第一次进入页面，""||[] ===> goodslist为空数组。
    var goodslist = window.localStorage.goodslist || [];
    // console.log(goodslist)
    if(typeof goodslist == "string"){
        goodslist = JSON.parse(goodslist);
        // console.log(goodslist)
    }
    // 1.点击添加到购物车按钮，将当前li的信息保存成数组对象，存储到cookie
    goodss.onclick = function(e){
        
        if(e.target.className == "goods_add_txt"){
            console.log(66);
            //2.当点击时，通过guid判断是否已经存在该商品。
            //* 遍历goodslist数组，拿每个对象的guid与当前currentGuid作比较，若有一致的就返回true
            //* 拿到与当前guid一致的那个对象在数组中存储的索引值
            var currentLi = e.target.parentNode.parentNode;
            console.log(e.target)
            var currentGuid = currentLi.dataset.id;
            console.log(currentGuid)
            var i;
            var res = goodslist.some(function(item,idx){
                
                i = idx;//只要找到guid是一致的，idx就不会继续往下遍历了
                return item.id == currentGuid;
            })
            //3.若返回值为true，说明对象已经存在，对该对象的数量加1。若返回值为false，说明不存在，创建新对象。
            if(res){
                // console.log(res)
                goodslist[i].qty++;

            }else{
                var obj = {};
                obj.id = currentGuid;
                obj.imgurl = currentLi.children[0].children[0].src;
                obj.gname = currentLi.children[1].innerText;
                obj.price = currentLi.children[2].innerText;
                obj.qty = 1;
                goodslist.push(obj);
                console.log(goodslist);
            }
            //4.不管是数量加1还是创建新对象，都要重新存储cookie
            window.localStorage.goodslist = JSON.stringify(goodslist);
         
        }
    }
})