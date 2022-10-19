function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	frameRate(10)
}

function draw() {
	background(0)
	noFill()
	colorMode(HSB);
	var span=map(mouseX,0,width,0,100)	//用map指令讓圖形隨滑鼠移動座標
	for(var x=0;x<width;x=x+250){
		for(var y=0;y<height;y=y+250){
    //迴圈為x(或y)軸從0開始(即起點),當條件成立(即終點前)就需要一直做迴圈執行

			strokeWeight(3)
			var h =map(x,0,width,0,360)
			stroke((h+y+frameCount*3)%365,mouseY/5,mouseX/5)
			triangle(x+95-span,y+25-span,x+150,y+125+span,x+205+span,y+25-span);//倒三角形
			triangle(x+95-span,y+225+span,x+150,y+125-span,x+205+span,y+225+span);//正三角形
			ellipse(x+150,y+125,100+span)//圓形
			line(x+25,y+0,x+25,y+250)//直線
			line(x+25,y+125,x+275,y+125)//橫線
			triangle(x+25+span/2,y+125,x+70+span/2,y+150+span/2,x+70+span/2,y+100-span/2)//左三角
			triangle(x+275-span/2,y+125,x+230-span/2,y+150+span/2,x+230-span/2,y+100-span/2)//右三角
		}
	}
}