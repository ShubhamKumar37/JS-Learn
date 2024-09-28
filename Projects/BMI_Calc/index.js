const form = document.querySelector('.bmi-form');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector("#result");
    console.log(result);

    if (height === '' || height <= 0 || isNaN(height)) {
        result.textContent = "Please enter a valid height"
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.textContent = "Please add a valid weight";
        console.log(result);
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.textContent = bmi;
        console.log(result, bmi);

        resetColors();

        if (bmi < 18.5) {
            document.querySelector("#under-weight").style.color = "red";
        }
        else if (bmi < 25) {
            document.querySelector("#normal-weight").style.color = "red";
        }
        else if(bmi < 29)
        {
            document.querySelector("#over-weight").style.color = "red";
        }
        else
        {
            document.querySelector("#too-much").style.color = "red";
        }
    }
});

function resetColors() {
    document.querySelector("#under-weight").style.color = "white";
    document.querySelector("#normal-weight").style.color = "white";
    document.querySelector("#over-weight").style.color = "white";
    document.querySelector("#too-much").style.color = "white";
}