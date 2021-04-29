function preload(){



}

function setup(){

canvas = createCanvas( 425 , 425 );
canvas.center();
video = createCapture(VIDEO);
video.size(425 , 425);
video.hide();

posenet = ml5.posenet(video, modelloaded)
posenet.on('pose' , gotposes)

}

function draw(){

    image(video , 0 , 0  , 425 , 425)

}

function snapshot(){

save("Clown_filter.png");

}

function modelloaded(){

console.log("Model is Loaded")


}

function gotposes(results){

if(results.length > 0){

console.log(results)

console.log("nose x = " + results[0].posenet.nose.x)


console.log("nose y = " + results[0].posenet.nose.x)


}


}