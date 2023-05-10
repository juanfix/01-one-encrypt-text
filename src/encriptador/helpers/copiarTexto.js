export const onCopiarTexto = (e, valor) => {
  document.querySelector('.texto').focus();

  document.querySelector('.texto-copiado').style.visibility = 'visible';
  setTimeout(function () {
    document.querySelector('.texto-copiado').style.visibility = 'hidden';
  }, 2000);

  navigator.clipboard
    .writeText(valor)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch((err) => {
      console.error('Error al copiar al portapapeles:', err);
    });
};
