(function() {
    const minViewers = 950;
    const maxViewers = 1050;
  
    // Função para gerar um número aleatório em um intervalo
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Função para gerar a contagem de viewers
    const getRandomViewerCount = (currentCount) => {
      const variation = getRandomNumber(-10, 10);
      let newCount = currentCount + variation;
      return Math.max(minViewers, Math.min(newCount, maxViewers));
    };
  
    // Função para atualizar a notificação no DOM (apenas uma vez)
    const createNotification = (initialCount) => {
      const notification = document.getElementById("notification");
      notification.innerHTML = `
        <img src="https://w7.pngwing.com/pngs/608/935/png-transparent-push-button-computer-icons-youtube-play-button-play-angle-text-trademark-thumbnail.png" alt="Play Button Icon">
        <div>
          <strong><span id="viewer-count">${initialCount}</span> people are watching this video <span class="live-now">Watch now</span></strong>
        </div>
      `;
      // Adiciona a classe para exibir com transição suave
      setTimeout(() => notification.classList.add('show'), 0); 
    };
  
    // Função para atualizar o contador
    const updateViewerCount = () => {
      const viewerCountElement = document.getElementById("viewer-count");
      if (viewerCountElement) { // Verifica se o elemento existe
        const newCount = getRandomViewerCount(parseInt(viewerCountElement.textContent, 10));
        viewerCountElement.textContent = newCount;
        setTimeout(updateViewerCount, getRandomNumber(3000, 5000));
      }
    };
  
    // Inicia o processo
    createNotification(982); // Cria a notificação com o valor inicial
    updateViewerCount();    // Inicia a atualização do contador
  
  })();
  
