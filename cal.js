let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    let val = btn.innerText;
    if (val === '=') {
      current = eval(current);
    } else {
      current += val;
    }
    display.value = current;
  });
});
