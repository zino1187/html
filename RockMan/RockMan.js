var RockMan=function(width,height,x,y){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=0;
	this.velY=0;
	this.gravity=0.1;	
	this.jumping=false;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";
		
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.span.style.background="blue";

		content.appendChild(this.span);

		this.move();
	}

	this.move=function(){
		var me=this;

		//중력적용 값 만들기
		this.velY+=this.gravity;

		if(this.velY>0){
			this.jumping=false;
		}			

		for(var i=0;i<blockArray.length;i++){
			//벽에 닿으면 증가값 0으로 초기화
			if(hitTest(this.span, blockArray[i].span) && this.jumping==false){
				this.velY=0;
			}
		}
		
		//y축에 반영하기
		this.y+=this.velY;
		this.x+=this.velX;

		this.span.style.top=this.y+"px";	
		this.span.style.left=this.x+"px";

		setTimeout(function(){
			me.move();
		},5);
	}

}