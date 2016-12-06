$(function(){
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
})
