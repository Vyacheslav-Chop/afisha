window.onload = function () {
  const downloadBtn = document.getElementById('download-btn');

  downloadBtn.addEventListener('click', function () {
    const poster = document.querySelector('.poster-container');

    if (poster) {

      html2canvas(poster, {
        logging: true, 
        useCORS: true, 
        letterRendering: true, 
        scale: 2,
      })
        .then(function (canvas) {
 
          const link = document.createElement('a');
          link.href = canvas.toDataURL();
          link.download = 'afisha.png';
          link.click();
        })
        .catch(function (error) {
          console.error('Помилка при створенні зображення:', error);
        });
    } else {
      console.error('Елемент з класом .poster-container не знайдено.');
    }
  });
};
