var rightWristX = "";
var leftWristX = "";
var difference = "";
function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    var poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
}
function draw() {
    canvas.background("red");
    textSize("15px");
    fill("blue");
    text("Kaylee", 30, 300);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}
function modelLoaded() {
    console.log("Model is loaded");
}
function draw() {
    background(217, 245, 255);
    textSize(difference);
    fill(255, 221, 148);
    text('Kaylee', 30, 200);

}