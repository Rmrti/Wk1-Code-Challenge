// Function to detect speed and calculate demerit points
function speedDetector() {
    // Ask the user to enter the car's speed
    const speed = parseInt(prompt("Enter car speed (km/h):"));

    // If the speed is less than 70, it's okay
    if (speed < 70) {
        console.log("Ok");
    } 
    // If the speed is greater than or equal to 70, calculate demerit points
    else {
        const demeritPoints = Math.floor((speed - 70) / 5); // One demerit point for every 5 km/h above 70
        // If the demerit points are more than 12, suspend the license
        if (demeritPoints > 12) {
            console.log("License suspended");
        } 
        // Otherwise, display the number of demerit points
        else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Call the function
speedDetector();
