
document.addEventListener('DOMContentLoaded', function() {
  function calculateTimeUntilBirthday() {
  
    let birthdayInput = prompt("Doğum tarixini (YYYY-MM-DD formatında) daxil edin:");
    let birthday = new Date(birthdayInput);
    let currentDate = new Date();

    if (birthday.getMonth() < currentDate.getMonth() || 
        (birthday.getMonth() === currentDate.getMonth() && birthday.getDate() < currentDate.getDate())) {
      birthday.setFullYear(currentDate.getFullYear() + 1);
    }

    updateTimer(birthday);
    
    setInterval(function() {
      updateTimer(birthday);
    }, 1000); 
  }

  function updateTimer(birthday) {
    let currentDate = new Date();
    let difference = birthday.getTime() - currentDate.getTime();
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    
    let remainingHours = hours % 24;
    let remainingMinutes = minutes % 60;
    let remainingSeconds = seconds % 60;

    document.getElementById('days').textContent = `${days}`;
    document.getElementById('hours').textContent = `${remainingHours}`;
    document.getElementById('minutes').textContent = `${remainingMinutes}`;
    document.getElementById('seconds').textContent = `${remainingSeconds}`;
  }

  calculateTimeUntilBirthday();
});