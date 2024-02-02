const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const stage = document.querySelector('#stage')
    if (height <= 0 || isNaN(height) || height === '') {
        results.innerHTML = `Please enter valid height`
    } else if (weight <= 0 || isNaN(weight) || weight === '') {
        results.innerHTML = `Please enter valid weight`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `BMI : ${bmi}`
    if (bmi < 18.6) {
        stage.innerHTML = `You have to improve your weight`
    }else if (bmi === 18.6 && bmi < 24.9) {
        stage.innerHTML = `Your weight was good please maintain`
    }else if (bmi > 24.9) {
        stage.innerHTML = `Your weight was heavy, Try to reduce`
    }   
}
})



// const form = document.querySelector('form')

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = (document.querySelector('#results'))

//     if(height=== '' || height <= 0 || isNaN(height)){
//         results.innerHTML = `Please enter a valid height, not should be ${height}`
//     }
//     else if(weight=== '' || weight <= 0 || isNaN(weight)){
//         results.innerHTML = `Please enter a valid weight not should be ${weight}`
//     }
//     else{
//         const bmi = (weight / ((height*height)/10000)).toFixed(2) 
//         results.innerHTML =  `Your BMI ${bmi}`
//         if(bmi < 18.6){
//             results.innerHTML =  `Your BMI = ${bmi} you are under Weight`    
//         }
//         else if(bmi > 24.9){
//             results.innerHTML =  `Your BMI = ${bmi} you are Over Weight`    
//         }
//         else{
//             results.innerHTML =  `Your BMI = ${bmi} Great you are on fit`    
         
//         }

//     }
// })