var Block=function(width,height,x,y){
	this.span;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;

	this.init=function(){
		this.span=document.createElement("span");
		this.span.style.width=this.width+"px";
		this.span.style.height=this.height+"px";
		
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.span.style.background="pink";
		this.span.style.border="1px solid red";

		content.appendChild(this.span);

	}
}