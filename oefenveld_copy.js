function setup(){
    var  MyCanvas= createCanvas(500,500);
    background('green');
    MyCanvas.parent('processing');
    noLoop()

}
function draw(){
   //
    noStroke();
    fill('red');
    rect (200,250,100,75);

    //
    stroke('red');
    strokeWeight(5);
    fill('white');
    ellipse(75,100,300);

    translate(50,-50);
    
    //
    stroke('purple');
    strokeWeight(10);
    fill('0,0,255,0.3');
    triangle(500,0,500,500,0,250);

    //
    quad(327,165,237,423,378,245,111,268);

    
}