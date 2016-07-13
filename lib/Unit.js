/* 점점 다가오는 적군을 정의*/
var Unit =function(stage, width,height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.velX=-1; //x축으로 몇 정도로 다가올지..
	this.velY=0; //y축으로 몇 정도로 다가올지..
	this.count=0;
	
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.stage.appendChild(this.img);

		this.move();
	}

	this.move=function(){
		var me=this;	

		//일정 시간 간격에 도달하면 랜덤한 좌표로 바꾼다 
		if(this.count%10==0){
			this.velX=-getRandomByRange(2,20);
			this.velY=getRandomByRange(1,15);

			if(this.velX%2==0){
				this.velX=-this.velX;
				this.velY=-this.velY;
			}
		}
				
		//x,y 축 설정
		this.x+=this.velX;
		this.y+=this.velY;

		//움직임 설정 
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.count++;

		setTimeout(function(){
			me.move();
		}, 100);
	
		//멈추는 조건은 아래에서 주자!!
		
	}

}