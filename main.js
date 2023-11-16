
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ybcZiqGkX/model.json',modelloaded)
}

function draw(){
    image( video,0,0,300,300)
    
    }
    
function gotresults(error,results) {
    if(error){
        console.log(error)
    }
        console.log(results)
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}

function modelloaded(){
    console.log("Model has been loaded")
    classifier.classify(video,gotresults)
}


