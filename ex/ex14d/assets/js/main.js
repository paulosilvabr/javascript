function relogio() {
  function criarHoraSegundo(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaTimer() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criarHoraSegundo(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaTimer();
    }
    
    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
    }
  });
}
relogio();
