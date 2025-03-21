document.getElementById('download-btn').addEventListener('click', function () {
  const poster = document.querySelector('.poster-container');
  html2canvas(poster).then(function (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'afisha.png';
    link.click();
  });
});
