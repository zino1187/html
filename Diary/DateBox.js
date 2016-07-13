var DateBox=function(date,note,color){
	this.wrapper;
	this.header;
	this.content;
	this.width=100;
	this.height=100;
	this.color=color;
	this.date=date;
	this.note=note;
	
	this.init=function(){
		this.wrapper=document.createElement("div");
		this.header=document.createElement("div");
		this.content=document.createElement("div");

		this.wrapper.style.width=this.width+"px";
		this.wrapper.style.height=this.height+"px";
		
		this.header.style.width="100%";
		this.header.style.height=30+"px";

		this.content.style.width="100%";
		this.content.style.height=70+"px";
	
		this.wrapper.style.background=this.color;
		this.wrapper.style.border="1px solid blue";

		//this.header.style.background="pink";
		//this.content.style.background="cyan";
		
		this.header.style.fontSize=20+"pt";
		this.header.style.textAlign="right";

		this.content.style.fontSize=9+"pt";

		this.header.innerHTML=this.date;
		this.content.innerHTML=this.note;

		this.wrapper.appendChild(this.header);
		this.wrapper.appendChild(this.content);
		
		this.content.addEventListener("click", function(){
			var area=document.createElement("textarea");
			area.type="text";
			area.style.background="yellow";
			area.style.width=100+"px";
			area.style.height=100+"px";
			area.style.position="absolute";
			area.style.left=300+"px";
			area.style.top=300+"px";

			content.appendChild(area);
		});

		return this.wrapper;
	}

}