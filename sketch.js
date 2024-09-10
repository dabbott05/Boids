const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup(){
    createCanvas(1200,700);
    alignSlider = createSlider(0, 5, 1, 0.1)
    cohesionSlider = createSlider(0, 5, 1, 0.1)
    separationSlider = createSlider(0, 5, 1.3, 0.1)
    for (let i= 0; i < 75; i++){
        flock.push(new Boid());
    }
}
function draw(){
    background(51);

    for (let boid of flock) {
        boid.edges()
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}