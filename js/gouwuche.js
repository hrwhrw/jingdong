$(function() {
	/*
	 	购物车功能实现：
	 		* 数量的改变:加减数量、手动修改
	 		* 数量变，小计跟着变
	 		* 删除当行
	 		* 全选功能
	 		* 总数量和总价格计算
	*/

	//接口拿到数据渲染到页面：自己做

	//1.数量的改变:加减数量、手动修改,小计跟着变

	//事件委托写法
	$('#cart').on('click', '.addnum', function() {
		var num = $(this).prev().val();
		var kucun = $(this).prev().data('num');
		num++;
		//上限：库存量
		if(num >= kucun) {
			num = kucun;
		}
		$(this).prev().val(num);
		total($(this));
	});	

	$('#cart').on('click', '.cutnum', function() {
		var num = $(this).next().val();
		num--;
		//上限：库存量
		if(num <= 1) {
			num = 1;
		}
		$(this).next().val(num);
		total($(this));
	});

	//手动输入改变数量
	$('#cart').on('input', '.nownum', function() {
		var num = $(this).val();
		var kuncun = $(this).data('num');
		if(num <= 1) {
			num = 1;
		} else if(num >= kuncun) {
			num = kuncun;
		}
		$(this).val(num);
		total($(this));
	});

	//小计
	function total(now) {
		//找数量
		var num = $(now).parent().find('.nownum').val();
		//找单价
		var price = $(now).parent().prev().text().slice(2);
		//小计=数量 * 单价
		var xiaoji = (num * price).toFixed(2);
		//		console.log(num,price,xiaoji);
		$(now).parent().next().html('￥ ' + xiaoji);
		all();

	}

	//删除当行
	$('#cart').on('click', '.good_del', function() {
		//		console.log(888);
		var res = confirm('您确定要删除吗？');
		if(res) {
			$(this).parent().remove();
		}
		update();
	});

	//是否应该保留最后一行：如果没有商品了，就隐藏这行(算总价和总数量的)
	function update() {
		var len = $('#cart .addnum').size();
		if(len == 0) {
			//没有商品了
			$('#del').hide();
		}
	}

	//全选
	$('#allchecked input').click(function() {
		var isok = $('#allchecked input').prop('checked');
		$('.good_check input').prop('checked', isok);
		all();

	});

	//计算总数量和总价格
	var arr = [];

	function all() {

		$('.good_check input').each(function(i, item) {
			if($(item).prop('checked')) {
				//这一行被勾选，把的下标存到数组里面
				arr.push(i);

			}
		});
		//		console.log(arr);

		//求总数量
		var num = 0;
		var price = 0;
		arr.forEach(function(item) { //0 1 
			num += $('.nownum').eq(item).val() * 1;
			price += $('.good_total').eq(item).text().slice(2) * 1;
		});

		//		console.log(num,price.toFixed(2));

		//渲染
		$('#allnum').html('已选 ' + num + ' 件商品');
		$('#totalprice').html('总计（不含运费）：￥' + price.toFixed(2));
		arr = []; //数组用完就清空
	}

	//点击复选框控制全选
	$('#cart').on('click', '.good_check input', function() {
		var len = $('.good_check input:checked').size;
		var total = $('.good_check input').size;
		if(len == total) {
			//证明全部勾选了
			$('#allchecked input').prop('checked', true);
		} else {
			$('#allchecked input').prop('checked', false);
		}
		all(); //刷新总数量和总价格
	});
    

	//全删
	$('#delall').click(function() {
		var newarr = [];
		$('.good_check input').each(function(i, item) {
			if($(item).prop('checked')) {
				//这一行被勾选，把的下标存到数组里面
				newarr.push(i);

			}
		});

		console.log(newarr);

		//删掉多行
		var res = confirm('您确定要全删吗？');
		if(res) {
			for(var i = newarr.length - 1; i >= 0; i--) {
				$('.goods').eq(newarr[i]).remove();
			}

			//刷新价格
			all();
			update();
		}

    });
    

});


window.onload = function(){
	var carList = document.querySelector("#carList");
	var subPrice = document.querySelector(".subPrice");
	var btnClear = document.querySelector("#btnClear");
	// 1.获取cookie的值（字符串）转成数组对象
	//  * 获取到的cookie也有可能为空
	var goodslistArr = window.localStorage.goodslist || [];
	// (1)"" || []  ===> false || [] ===> []
	// (2)"json字符串" || []  ==> "json字符串"
	if(typeof goodslistArr == "string"){
			goodslistArr = JSON.parse(goodslistArr);
	}
	// render();
 
	//4.点击x按钮，其实删除的是数组中的这个对象，
	// *找对象：通过当前点击的li的currentGuid与数组对象的guid进行比较，一致的话，让数组把这个索引对应的值删掉
	// *将数组重新存入cookie，再重新渲染 
	// carList.onclick = function(e){
	// 		if(e.target.className == "btn-close"){
	// 				var currentGuid = e.target.parentElement.dataset.guid;
	// 				var i;
	// 				goodslistArr.some(function(item,idx){
	// 						i = idx;
	// 						return item.guid == currentGuid;
	// 				})
	// 				goodslistArr.splice(i,1);
	// 				render();
	// 				window.localStorage.goodslist = JSON.stringify(goodslistArr);
	// 		}
	// }


	// //5. 清空购物车
	// btnClear.onclick = function(){
	// 		goodslistArr = [];
	// 		carList.innerHTML = "";
	// 		subPrice.innerText = 0;
	// 		window.localStorage.removeItem("goodslist");


	// }

// 	function render(){
// 			//2. 将数组goodslistArr渲染到页面上
// 			//3. 计算总价，渲染到subPrice
// 			var total = 0;
// 			carList.innerHTML = goodslistArr.map(function(item){
// 					var {guid,imgurl,gname,price,qty} = item;
// 					total += price * qty;
// 					return `<li data-guid="${guid}">
// 								 <img src="${imgurl}" >
// 								 <p>${gname}</p>
// 								 <p class="price"><input type="button" value="-" class="jian"/><span class="qian">${price}</span>x<span>${qty}</span><input type="button" value="+" class="addNum"/></p>
// 								 <input type="button" value="X" class="btn-close">
// 						 </li>`;
// 			}).join("");
// 			subPrice.innerText = total.toFixed(2);
// 	}						
// }

$(function(){
		function init(){
			$.ajax({
					url: '../api/orders.php',
					type: 'post',
					data: {
							
					},
					success:function(str){
						var	 arr = JSON.parse(str);
							// console.log(arr.infos);
							// create1(arr.infos);
							// create(arr.infos);
							create(arr.infos);
							console.log(arr.infos)
					}
			})

	}
	init();
	function create(item){
			var haha= $.map(item,function(item, idex){
					return `<li class="goods">
					<p class="good_check"><input type="checkbox" name="good" value="" /></p>
					<p class="good_name">
							<img src="${item.img}" alt="" class="tupian">
							<img class="chaoshi" src="https://img10.360buyimg.com/img/jfs/t8485/356/1281159143/15432/343a6ec9/59b73dbaN9c878bcc.png" alt="">
							<a href="">${item.name}</a>
					</p>
					<p class="kong"></p>
					<p class="good_price">￥&nbsp;${item.price}</p>
					<p class="num">
							<span class="cutnum">-</span>
							<input class="nownum" data-num="10" type="text" value="${item.num}" />
							<span class="addnum">+</span>
					</p>
					<p class="good_total">￥&nbsp;${item.zongjia}</p>
					<p class="good_del">
							<a href="javascript:;">删除</a>
					</p>
			</li>`
			})
			// var xixixi =+ haha;
			$('#cart').html(haha);   
	}


})
}
