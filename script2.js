// Selecting the form element
const form = document.querySelector('form');

// Adding a submit event listener to the form
form.addEventListener('submit', function(e){
    // Preventing the default form submission behavior
    e.preventDefault();

    // Extracting the height and weight values from input fields
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // Selecting the elements to display results and BMI stage
    const results = document.querySelector('#results');
    const stage = document.querySelector('#stage');

    // Checking if height is invalid
    if (height <= 0 || isNaN(height) || height === '') {
        results.innerHTML = `Please enter valid height`;
    } 
    // Checking if weight is invalid
    else if (weight <= 0 || isNaN(weight) || weight === '') {
        results.innerHTML = `Please enter valid weight`;
    } 
    // Calculating BMI and displaying results based on BMI
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `BMI: ${bmi}`;

        // Checking BMI range and displaying appropriate stage
        if (bmi < 18.6) {
            stage.innerHTML = `You have to improve your weight`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            stage.innerHTML = `Your weight is good, please maintain`;
        } else if (bmi > 24.9) {
            stage.innerHTML = `Your weight is heavy, try to reduce`;
        }
    }
});
