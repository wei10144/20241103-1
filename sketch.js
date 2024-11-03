function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("#48cae4");
  noFill() //以下畫圖或畫方形都不要填滿顏色
  stroke("@48cae4") //線條的顏色
  // ======宣告變數
  let r_w =50 + mouseX/200
  let bc_w =50  +  mouseX/200
  let sc_w=25 + mouseX/200
  
 // strokeWeight(3) //線條的粗細
 // ellipse(25+bc_w*0,25,50) //畫橢圓(正圓)
 // rect(rect_width*0,0,rect_width) //畫方形
  //ellipse(rect_width*1,50,sc_w) 

  //ellipse(25+bc_w*1,25,50) //畫橢圓(正圓)
 // rect(rect_width*1,0,rect_width) //畫方形
 // ellipse(rect_width*2,50,sc_w)

 // ellipse(25+bc_w*2,25,50) //畫橢圓(正圓)
 // rect(rect_width*2,0,rect_width) //畫方形
 // ellipse(rect_width*3,50,sc_w)
  //======重複相同指令的for指令======

  for(let j=0;j<25;j=j+1){
     for(let k = 0 ; k<39;k++){
      //x=0
      //x<width
      //x=x+rect_width
   push();
   translate(25+bc_w*k-width/2,50*j-height/2,0);
   ellipse(0,0,bc_w);
   rect(-r_w/2,-r_w/2,r_w,r_w);
   pop();
}
  }
}

