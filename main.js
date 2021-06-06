noseX = 0;
noseY = 0;
difference = 0;
lWX = 0;
rWX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100, 150)

    canvas = createCanvas(550,550);
    canvas.position(900,150);
    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = " + noseX + "noseY" + noseY);

        lWX = results[0].pose.leftWrist.x;
        rWX = results[0].pose.rightWrist.x;
        difference = floor( lWX - rWX);
        console.log("leftWristX = " + lWX + "rightWristX = " + rWX + "difference = " + difference);
    }
}

function modeloaded(){
    console.log('PoseNet Model Is Initialized!')
}

function draw(){
    background('#9B2335');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square Will Be = " + difference + "px";

    fill('green');
    stroke('green');
    square(noseX, noseY, difference);
}



