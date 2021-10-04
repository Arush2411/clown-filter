noseX=0;
noseY=0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/KcQ1pmJ1/clownnose.png');
}


function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("poseNet Is Initialized");
}

function draw()
{
image(video , 0 , 0 , 400 , 400);
image(clown_nose , noseX - 12 , noseY - 12 , 40 , 40);

}

function pic_click()
{
    save('Joker.png');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
     }
}