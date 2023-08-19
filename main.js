function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hbcSVFT-S/', modelReady);
   
}

function modelReady(){
classifier.classify(gotResults);
}