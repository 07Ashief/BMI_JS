// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });



const form = document.querySelector('form')
// console.log(form)
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    // console.log(height)
    const weight = parseInt(document.querySelector('#weight').value)
    // console.log(weight)
    const result = document.querySelector('#results')

    if(height === ' ' || height < 0 || isNaN(height)){
        result.innerHTML = `please enter the valid height ${height}`
    }
    else if(weight === ' ' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter the valid weight ${weight}`
    }
    else{
        const bmi= (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = ` ${bmi}`
        const stages = document.querySelector('#stage')

       if (bmi < 18.6) {
            stages.innerHTML = `You are Under weight please refer the below chart`
       } else if (bmi >= 18.6 && bmi <= 24.9) {
        stages.innerHTML = `You are normal weight`
       }
       else if(bmi > 24.9) {
        stages.innerHTML = `You are over weight please refer the below chart`
        }
    
    }

    
})