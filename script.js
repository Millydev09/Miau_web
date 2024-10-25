var radios = document.querySelectorAll('input[name="btn-radio"]');

radios[0].checked = true;

setInterval(proximaImg, 3000); // Mudar imagem a cada 3 segundos

function proximaImg() {
  let checkedRadio = Array.from(radios).find(radio => radio.checked);
  let index = Array.from(radios).indexOf(checkedRadio);
  let nextRadio = radios[(index + 1) % radios.length];

  checkedRadio.checked = false;
  nextRadio.checked = true;
}

// Adicione evento de click nos botões manuais
var manualBtns = document.querySelectorAll('.manual-btn');
manualBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    radios[index].checked = true;
  });
});