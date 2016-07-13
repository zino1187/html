var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;//x축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.velY=2;//y축의 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.gravity=0.1; // 중력을 표현하는 변수!!
	this.falling=true;
	this.jumping=false;

	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.div.style.overflow="hidden";	
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		
		//숨겨진 이미지의 좌표 처리..
		this.img.style.position="relative";
		//this.img.style.top=-65+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//이미지를 div에 탑재
		this.div.appendChild(this.img);

		//div를 stage 에 탑재 
		this.stage.appendChild(this.div);

		this.move();
	}

	this.move=function(){
		var me=this;
		
		//중력 데이터를 velY 에 누적해보자!!
		this.velY+=this.gravity;
		
		//중력에 의해 다시 물체가 떨어지기 시작하는 시점에는 다시 falling을 true로 전환한다
		if(this.velY>0){
			this.jumping=false;
			this.falling=true;
		}			
		
		for(var i=0;i<blockArray.length;i++){
			if(hitTest(this.div, blockArray[i].img) && this.falling){
				this.velY=0;
				this.falling=false;
			}
		}

		this.y+=this.velY;
		this.x+=this.velX;

		this.div.style.top=this.y+"px";
		this.div.style.left=this.x+"px";

		setTimeout(function(){
			me.move();
		}, 5);		
	}
	

}