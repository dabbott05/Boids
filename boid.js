class Boid{
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4))
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 4;
    }

    edges() {
        if (this.position.x > width) {
            this.position.x = 0;
        }
        else if (this.position.x < 0) {
            this.position.x = width;
        }
        if (this.position.y > height) {
            this.position.y = 0;
        }
        else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
    // finds the desired velocity by averaging the velocity 
    // of other boids and subtracting it by the current velocity
    align(boids) {
        let boidPerception = 50;
        let steering = createVector(); // AKA desired velocity
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
                );
            if (other != this && d < boidPerception) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            }
        return steering;
    }
    // keeps the flock together by calculating the average 
    // position of the other boids and going towards it.
    cohesion(boids) {
        let boidPerception = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
                );
            if (other != this && d < boidPerception) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total); // avg position
            steering.sub(this.position); // creates a vector that points to the average position of the other boids
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity); // how much the boid needs to change to point towards the center
            steering.limit(this.maxForce);
            }
        return steering;
    }
// collision avoidance from nearby neighbors by calculating 
// the average inverse direction of other boids
    separation(boids) {
        let boidPerception = 50;
        let steering = createVector(); // desired velocity
        let total = 0;
        for (let other of boids) { // loops through all of the boids
            let d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
                );
            if (other != this && d < boidPerception) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            }
        return steering;
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);
        separation.mult(separationSlider.value());
        cohesion.mult(cohesionSlider.value());
        alignment.mult(alignSlider.value());
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show() {
        // Draw a triangle pointing in the direction of velocity
        let theta = this.velocity.heading() + radians(90);
        fill(255, 204, 0);
        stroke(200);
        strokeWeight(.3);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -10);
        vertex(-5, 10);
        vertex(5, 10);
        endShape(CLOSE);
        pop();
    }
}