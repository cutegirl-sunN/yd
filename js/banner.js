$(function(){
	var imgs=$('.pic');
	var list=$('.circle-li');
	var box=$('#banner');
	var width=parseInt(getStyle(box,"width"));
	var Left=$('.bannerleft')[0];
	var right=$('.bannerright')[0];
	// console.log(width);
	var now=0;
	var next=0;
	var flag=true;
	var T=setInterval(fun,1000);
	function fun(){
		next=now+1;
		if(next>=imgs.length){
			next=0;
		}
		imgs[next].style.left=width+'px';
		
		animate(imgs[now],{left:-width},600);
		animate(imgs[next],{left:0},600);
		list[now].style.background='#ccc';
		list[next].style.background='red';
		now=next;
	}

	banner.onmouseover=function(){
		clearInterval(T);
	}
	banner.onmouseout=function(){
		T=setInterval(fun,1000)
	}
	right.onclick=function(){
		fun();
	}
	Left.onclick=function(){
		next=now-1;
		// console.log(next);
		if(next<0){
			next=imgs.length-1;
		}
		imgs[next].style.left=-width+'px';
		animate(imgs[now],{left:width},600);
		animate(imgs[next],{left:0},600);
		list[now].style.background='#ccc';
		list[next].style.background='red';
		now=next;
	}
	for(i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onclick=function(){
			if(this.index>now){
				imgs[this.index].style.left=width+'px';
				animate(imgs[now],{left:-width},600);
			}else if(this.index<now){
				imgs[this.index].style.left=-width+'px';
				animate(imgs[now],{left:width},600);
			}
			animate(imgs[this.index],{left:0},600);
			list[now].style.background='#ccc';
			list[this.index].style.background='red';
			now=this.index;
		}
	}
	


	var lunbo=$("#lunbo");
	var left=$("#lunbo-left");
	var Right=$("#lunbo-right");
	var Width=parseInt(getStyle($(".LB-li")[0],"width"));
	var imgBox=$("#lunbo-box");
	var t=setInterval(move,2000);
	function move(){
		animate(imgBox,{left:-Width},600,function(){
			var imgfirst=getFirst(imgBox);
			imgBox.appendChild(imgfirst)
			imgBox.style.left=0+"px";
		});

	}
	lunbo.onmouseover=function(){
		clearInterval(t);
	}
	lunbo.onmouseout=function(){
		t=setInterval(move,2000);
	}
	left.onclick=function(){
		var last=getLast(imgBox);
		var first=getFirst(imgBox);
		insertBefore(last,first);
		imgBox.style.left=-Width+"px";
		animate(imgBox,{left:0},600)
	}
	Right.onclick=function(){
		move();
	}

	var box_li=$(".box-li");
	for(var i=0;i<box_li.length;i++){
		if(i==0){
			continue;
		}
		hover(box_li[i],function(){
			var height=this.offsetHeight;
			var select_box=$(".select-box",this)[0];
			select_box.style.display='block';
			this.style.background='#f3f3f3';
		},function(){
			var that=this;
			var select_box=$('.select-box',this)[0];
			select_box.style.display='none';
			that.style.background='#f3f3f3';
		})
	}

	
	var down=$(".down")[0];
	var login=$(".login")[0];
	hover(down,function(){
		var down_one=$(".down-one",this)[0];
		down_one.style.display="block";
		login.style.background="#fff";
	},function(){
		var down_one=$(".down-one",this)[0];
		down_one.style.display="none";
		login.style.background="";
	})




	var hRight2=$(".sjyyt")[0];
	var yyt=$(".yyt")[0];
	hover(hRight2,function(){
	  var down_two=$('.down-two',this)[0];
	  down_two.style.display='block';
	  yyt.style.background="#fff";
	  },function(){
	     var down_two=$('.down-two',this)[0];
		  down_two.style.display='none';
		  yyt.style.background="";
	  }
	)


	function notice(){
		var not=$('.notice')[0]
		var ul=$(".notice-two");
		var gt=$(".get2")[0];
		var lt=$(".get")[0];
		var n=0;
		var flag=true
			var t=setInterval(move,2000)
			function move(){
				n++
				if(n>=ul.length){
					n=0
				}
				if(!flag){
					return
				}
				flag=false
				for(var i=0;i<ul.length;i++){
					ul[i].style.display='none'
				}
				ul[n].style.display='block'
				flag=true
			}
			lt.onclick=function(){
				move()
			}
			gt.onclick=function(){
				n--
				if(n<0){
					n=ul.length-1
				}
				if(!flag){
					return
				}
				flag=false
				for(var i=0;i<ul.length;i++){
					ul[i].style.display='none'
				}
				ul[n].style.display='block'
				flag=true
			}
			hover(not,function(){
				clearInterval(t)
			},function(){
				t=setInterval(move,2000)
			})
	}
	notice()





	function select(){
		var logo=$('.logo')[0];
		var body=$('body')[0];
		var left=$('.left',logo)[0];
		var select=$('.select',left)[0];
		var first=$('.first',select)[0];
		var address=$('.address',select)[0];
		first.onclick=function(){
			address.style.display="block"
		}
		body.onclick=function(e){
			var e=e||window.event
			var obj=e.target||e.srcElement
			// console.log(obj.className)
			if(obj.className!="first"&&obj.className!="address"&&obj.className!="add-top"&&obj.className!="add-bot"){
				address.style.display="none"
			}
		}
	}
	select()


 })






