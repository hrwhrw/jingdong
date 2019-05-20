$(function(){
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
        var dl=document.querySelector(".dl");
        $(dl).css('display',"block");
    },function(){
        var dl=document.querySelector(".dl");
        $(dl).css('display',"none");
    });

    $('.chaoshi_nav_header').hover(function(){
        var cnm=document.querySelector(".chaoshi_nav_body");
        $(cnm).css('display','block'); 
    },function(){
        var cnm=document.querySelector(".chaoshi_nav_body");
        $(cnm).css('display','none');
    });
    $('.chaoshi_nav_body').hover(function(){
        var cnm=document.querySelector(".chaoshi_nav_body");
        $(cnm).css('display','block'); 
    },function(){
        var cnm=document.querySelector(".chaoshi_nav_body");
        $(cnm).css('display','none');
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
});


// 渲染，分页
let type = '';
let order ='';
function init(pages){
    $.ajax({
        type:'get',
        url:'../api/liebiao.php',
        // data : 'name=' + name,
        data:{
             num:5,
             page:pages,
             type:'price',
             order:order
            
        },
        success:function(str){
            let arr = JSON.parse(str)
            console.log(arr)
            //渲染
            $(`.gl-warp`).html(arr.goodslist.map((item)=>{
                return`<li class="gl-item" data-id="${item.id}">
                <div class="gl-i-wrap" >
                    <div class="p-img">
                        <a href=""></a>
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="p-price">
                        <strong class="J_100000499657" >
                            <em>￥</em>
                            <i>${item.price}</i>
                        </strong>		
                    </div>
                    <div class="p-name p-name-type-2">
                        <a href="">
                            <em>
                                <span class="p-tag" style="background-color:#c81623">
                                    京东超市
                                </span>
                                ${item.name}
                            </em>
                            <i class="promo-words" id="J_AD_100000499657">
                                    【三只松鼠·果干品类日】前1000件限量下单立减20元，专区满199立减100元，立即抢购》
                            </i>
                        </a>
                    </div>
                    <div class="p-shop">
                        <span class="J_im_icon">
                            <a href="" class="curr-shop">三只松鼠京东自营旗舰店</a>
                        </span>
                    </div>
                    <div class="p-icons" id="J_pro_100000499657" data-done="1">
                        <i class="goods-icons J-picon-tips J-picon-fix">自营</i>
                        <i class="goods-icons4 J-picon-tips">满145-40</i>		
                    </div>
                </div>                                  
            </li>`
            }))   
            layui.use('laypage', function(){
                var laypage = layui.laypage;
                
                //执行一个laypage实例
                laypage.render({
                  elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
                  ,count: arr.total
                    ,curr:arr.page
                    ,limit:arr.num
                    ,jump:function(obj,first){
                        if(!first){
                            console.log(obj.curr)
                            //do something
                            init(obj.curr)
                          }
                       
                    }//数据总数，从服务端得到
                });
              });
            }
    })
}
init(1);
//排序
$(function(){
    let isok=true;
    // let order = '';

    $('.curr4').on('click',function(){
        console.log(555)
        if(isok){
            order ='ASC';
            $('.curr4').html = '降价';
            $('.curr4').css('background','red');
            init(1)
        }else{
            order ='DESC';
            $('.curr4').html ='升价';
            $('.curr4').css('background','#fff');
            init(1)
        }
        isok =!isok;
    })
});
// 跳转
$(function(){
    $('.gl-warp').on('click', 'li',function(){
        console.log(666)
        let hqId=$(this).attr('data-id');
        console.log(hqId);
        window.open('xiangqing.html?'+hqId);
    })
})
