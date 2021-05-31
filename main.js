left_WristX = 0;
right_WristX = 0;
difference = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(450, 500);

    canvas = createCanvas(550, 550 );
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video , modelLoded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    background('#969A97');
    fill('#90093');
    stroke('#90093');
    text("AKSHAD" , 570 , 156);
    textSize(difference);
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);

        left_WristX = results[0].pose.leftWrist.x;
        right_WristX = results[0].pose.rightWrist.x;

        difference = floor(left_WristX - right_WristX);

        console.log("right Wrist = " + right_WristX + " left wrist " + left_WristX + " difference " + difference);

    }
}