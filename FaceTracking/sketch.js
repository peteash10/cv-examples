// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker
var w = 1000,
    h = 620;

function setup() {
    capture = createCapture(VIDEO);
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init(pModel);
    tracker.start(capture.elt);
}

function draw() {
    image(capture, 0, 0, w, h);
    fill(0, 0, 0, 0.95);
    rect(0, 0, 1000, 620);
    var positions = tracker.getCurrentPosition();

    noFill();
    stroke(255);
//    beginShape();
//    for (var i = 0; i < positions.length; i++) {
//        vertex(positions[i][0], positions[i][1]);
//    }
//    endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
   //     fill(map(i, 0, positions.length, 0, 360), 50, 100);
        fill(50, 50, 100);
        ellipse(positions[i][0], positions[i][1], 2, 2);
      //  text(i, positions[i][0], positions[i][1]);
    }

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling" 
    //    rect(20, 20, smile * 3, 20);
        
//        noStroke();
//        fill(0, 255, 255);
//        ellipse(positions[62][0], positions[62][1], 50, 50);
    }
}
