import './style.css';

const colors = ['red', 'purple', 'blue', 'black', 'white', 'green'];

colors.forEach((color) => {
  const btn = document.querySelector<HTMLDivElement>(`#${color}`)!;

  btn.addEventListener('click', function (e) {
    e.preventDefault();

    alert(color);
  });
});
