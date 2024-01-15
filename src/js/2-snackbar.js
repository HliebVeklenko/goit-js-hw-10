import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// `❌ Rejected promise in ${delay}ms`;
// `✅ Fulfilled promise in ${delay}ms`;

const form = document.querySelector('.form');
const button = document.querySelector('.snackbar-button');

function createPromise(event) {
    event.preventDefault();
    const delayInput = document.getElementsByName('delay')[0];
    const promiseTypes = document.querySelectorAll('input[name="state"]');
    const delay = parseInt(delayInput.value);
    let selectedValue;
    Array.from(promiseTypes).forEach(option => {
        if (option.checked) {
            selectedValue = option.value;
        }
    });

    const promise = new Promise((resolve, reject) => {
        if (isNaN(delay) || delay <= 0) {
            reject('Invalid delay value');
        } else {
            setTimeout(() => {
            resolve(delay);
        }, delay);}
        }
    )
    promise
        .then((result) => {
            if (selectedValue === 'fulfilled') {
                iziToast.show({
                    title: `✅ Fulfilled promise in ${result}ms`,
                    position: "topRight",
                })
            } else {
                iziToast.show({
                    title: `❌ Rejected promise in ${delay}ms`,
                    position: "topRight",
                })
            }
            
        })
}
form.addEventListener('submit', createPromise);
