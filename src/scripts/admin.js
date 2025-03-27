document.addEventListener('DOMContentLoaded', () => {
    fetch('/.netlify/functions/airtable')
      .then(res => res.json())
      .then(data => {
        new gridjs.Grid({
          columns: ['Nome', 'Squadra', 'Gare Vinte'],
          data: data.map(item => [item.nome, item.squadra, item.palmares.length]),
          pagination: true
        }).render(document.getElementById('tabella-ciclisti'));
      });
  });