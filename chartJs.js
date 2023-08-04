function chartJs(){
    const ctx = document.getElementById('myChart');
    
    let data = {
        labels: dates,
        datasets: [{
          label: 'Bitcoin',
          data: course,
          borderWidth: 1
        }]
      }

      let options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }

    new Chart(ctx, {
      type: 'line',
      data,
      options
    });
  
}