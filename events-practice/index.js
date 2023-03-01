// const buttons = document.querySelectorAll('.btn');
// const spans = document.querySelectorAll('.span');

// const Counter = function() {
//     this.count = 0;
//     this.increase = function() {
//         this.count = this.count + 1;
//     }
// }

// for(let i = 0; i < buttons.length; i++) {
//     const counter = new Counter();
//     const currentButton = buttons[i];
//     const currentSpan = spans[i];
//     currentSpan.innerHTML = counter.count;

    
//     currentButton.addEventListener('click', (event) => {
//         counter.increase();
//         currentSpan.innerHTML = counter.count;
//     }
// )

// }


// const counter = new Counter();
// span.innerHTML = counter.count; // значение высчитываемое в методе объекта будет равно значению  внутренностей спана

const array = [1,2,3,4,[5,6]];
const result = [];

const flattenArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        if (typeof currentValue !== 'number') {
            flattenArray(currentValue)
        } else {
            result.push(currentValue)
        }
    }
}

flattenArray(array);

console.log(result);