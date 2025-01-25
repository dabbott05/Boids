**Boid Simulation**

This project is a simple implementation of the Boids algorithm, simulating a flock of birds (or other objects) using three primary behaviors: alignment, cohesion, and separation. The boids in the simulation move around the canvas, following these behaviors to maintain group dynamics and avoid collisions.


The code is implemented using the p5.js library, which allows easy creation of graphics and animations.


**Features**

Alignment: Boids align their velocity with nearby boids to simulate group movement.

Cohesion: Boids are attracted to the center of the flock, ensuring the flock stays together.

Separation: Boids avoid crowding each other by steering away from nearby boids.

Customizable Behavior: The strength of each behavior (separation, cohesion, alignment) can be adjusted using sliders.

Canvas Animation: The boids move around the canvas, creating a dynamic and visually appealing flocking effect.


**Requirements**

p5.js (The script uses p5.js for rendering and animation)

If you're running the code locally, you'll need to include the p5.js library in your HTML file, or you can run the code on the p5.js web editor.


**Installation**

Clone the repository (if you want to run the code locally):

```git clone https://github.com/your-username/boid-simulation.git```

```cd boid-simulation```

Run the simulation:
You can open the ```index.html``` file in your browser or use the p5.js web editor to paste the code and run it directly there.


**Usage**

The boid simulation is designed to be interactive. You can adjust the behaviors of the flock using sliders on the page.

Adjusting Behavior

Alignment Slider: Controls how much the boids align with nearby boids (default value is 1).

Cohesion Slider: Controls how much the boids try to move towards the center of the flock (default value is 1).

Separation Slider: Controls how much the boids avoid crowding each other (default value is 1).

These sliders are used to scale the respective behaviors, allowing you to experiment with different flocking dynamics.


Behavior Explanation:
Alignment: Boids will try to align their velocity with other nearby boids, ensuring they move in the same direction.

Cohesion: Boids will be drawn towards the average position of nearby boids, helping the flock stay together.

Separation: Boids will try to move away from other boids if they get too close, helping avoid collisions.


**Code Overview**

Boid Class:

```position```: The current position of the boid.

```velocity```: The current velocity (speed and direction) of the boid.

```acceleration```: The current acceleration of the boid, which is used to update its velocity.

```maxForce``` and ```maxSpeed```: Constants that define the maximum force a boid can apply and the maximum speed it can travel.


Methods:

```edges()```: Wraps the boid around the edges of the canvas to simulate continuous movement.

```align()```: Determines the desired velocity for the boid based on the average velocity of nearby boids.

```cohesion()```: Determines the desired velocity to move towards the average position of nearby boids.

```separation()```: Calculates a steering force to avoid collisions with nearby boids.

```flock()```: Combines the three behaviors—alignment, cohesion, and separation—and applies them to the boid.

```update()```: Updates the boid’s position and velocity based on its acceleration.

```show()```: Displays the boid as a triangle, indicating the direction it is moving.


**Example Run**

Upon running the code, a flock of boids will appear on the canvas. The boids will move around according to the simulation rules (alignment, cohesion, and separation).

You can interact with the simulation by adjusting the sliders to see how the flock behavior changes.


**Contributing**

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

How to Contribute:

Fork the repository.

Create a new branch for your feature or bug fix.

Make your changes and commit them.

Push your changes and create a pull request.


**Acknowledgements**

This simulation is inspired by the Boids algorithm, originally developed by Craig Reynolds in 1986. It is a model of collective animal behavior, used for simulating the movement of flocks of birds, schools of fish, and other similar groups.
