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
var arr='';
$(function(){
    var strs = decodeURI(document.location.search.slice(1));
    console.log(strs)
    function init(){
        $.ajax({
            url: '../api/xiangqing.php',
            type: 'post',
            data: {
                id: strs
            },
            success:function(str){
                 arr = JSON.parse(str);
                // console.log(arr.infos);
                // create1(arr.infos);
                create(arr.infos);
                // create2(arr.infos);
                console.log(arr.infos)
            }
        })

    }
    init();
    function create(item){
        var haha= $.map(item,function(item, idex){
            return `<div class="ww">
            <!-- 左放大镜 -->
            <div class="preview-wrap">
                <div class="magnify-box">
                    <div class="min-img">
                        <img src="${item.img}" alt="">
                        <div class="mask" style="display: none; left: 152px; top: 0px;"></div>
                    </div>
                    <div class="max-img" style="display: none;">
                        <img src="${item.img}" alt="" style="left: -274px; top: 0px;">
                    </div>
                </div>
                <div class="img-list">
                    <a href="" id="spec-forward" class="arrow-prev disabled">
                        <i class="sprite-arrow-prev  layui-icon layui-icon-left" style="font-size: 30px;"></i>
                    </a>
                    <ul>                           
                        <li><img src="../img/lb1.jpg" alt=""></li>
                        <li><img src="../img/lb2.jpg" alt=""></li>
                        <li><img src="../img/lb3.jpg" alt=""></li>
                        <li><img src="../img/lb4.jpg" alt=""></li>
                        <li><img src="../img/lb5.jpg" alt=""></li>                           
                    </ul>  
                    <a href="" id="spec-forward" class="arrow-next disabled">
                        <i class="sprite-arrow-prev layui-icon layui-icon-right" style="font-size: 30px;"></i>
                    </a>
                </div>   
                <img src="../img/jiatu4.png" alt="" class="jiatu">
            </div>
            <script src="../js/fengzhuang.js"></script>
            <script>
                fangDaJing('.magnify-box');
            </script>

            <!-- 中 -->
            <div class="itemInfo-wrap">
                <div class="sku-name">
                    <img src="https://img10.360buyimg.com/img/jfs/t8485/356/1281159143/15432/343a6ec9/59b73dbaN9c878bcc.png" alt="">
                    
                   ${item.name}               
                </div>
                <!-- 价格位置 -->
                <div class="summary summary-first">
                    <div class="yi">
                        <div class="dt">京 东 价</div>
                        <span class="p-price">
                            <span>￥</span>
                            <span class="price J-p-100000499657">${item.price}</span>
                        </span>
                    </div>
                    <div class="er">
                        <img src="../img/jiatu5.png" alt="">
                    </div>
                </div>
                <div class="summary p-choose-wrap">
                    <img src="../img/jiatu8.png" alt="">
                    <div id="choose-btns" class="choose-btns clearfix">
                        <input type="text" class="put" value="1">
                        <a href="javascript:void(0);" class="a1">+</a>
                        <a href="javascript:void(0);" class="a2">-</a>
                        <a href="gouwuche.html" class="jiaru">加入购物车</a>
                    </div>
                </div>
            </div>
            <!-- 右 -->
            <div class="track">
                <img src="../img/jiatu3.png" alt="">
            </div>
        </div>`
        })
        $('#123').html(haha);   
    }


    let num = 0;
    $('#123').on('click', 'a', function() {
        num = $('.put').val();
        if ($(this).hasClass('a1')) {
            num++;
            $('.put').val(num)
        }
        if ($(this).hasClass('a2')) {
            
            if (num == 1) {
                alert("商品数量最少为一");
                num = 1;
            } else {
                num--;
            }
            $('.put').val(num)
        }
    })
    $('#123').on('click','.jiaru',function(){
        console.log(name)
        function init1(){
            $.ajax({
                url: '../api/gouwuche.php',
                type: 'post',
                data: {
                    name:arr.infos[0].name
                    ,img:arr.infos[0].img
                    ,price:arr.infos[0].price
                    ,count_price:arr.infos[0].price*num
                    ,nums:num
                },
                success:function(str){
                   
                }
            })
        }
        init1();
    })
})