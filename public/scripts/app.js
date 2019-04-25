console.log("CHECK")

// Remove Alerts
if (document.querySelector('.alert')) {
    let delay = 0;
  
    setTimeout(() => {
      const alerts = document.querySelectorAll('.alert');
      alerts.forEach(alert => {
        delay += 500;
        setTimeout(() => {
          alert.remove();
        }, delay);
      })
    }, 3000);
  }