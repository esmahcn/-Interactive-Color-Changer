// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the color box element by its ID
    const colorBox = document.getElementById("color-box");
    // Select the button element by its ID
    const changeColorBtn = document.getElementById("change-color-btn");

    // Function to generate a random hex color code
    function getRandomColor() {
        const letters = "0123456789ABCDEF"; // Hex digits
        let color = "#"; // Start with the hash symbol for hex colors
        // Loop 6 times to create a 6-digit hex code
        for (let i = 0; i < 6; i++) {
            // Append a random character from letters
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color; // Return the generated hex color string
    }

    // Add a click event listener to the button
    changeColorBtn.addEventListener("click", () => {
        // Generate a new random color
        const newColor = getRandomColor();
        // Change the background color of the box to the new color
        colorBox.style.backgroundColor = newColor;
    });
});