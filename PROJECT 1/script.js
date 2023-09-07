function updateRealTimeData() {
    const realTimeDataElement = document.getElementById('real-time-data');

    setInterval(() => {
        const randomData = Math.floor(Math.random() * 100);
        realTimeDataElement.textContent = `Real-Time Data: ${randomData}`;
    }, 2000); // Update every 2 seconds

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDay = daysOfWeek[today.getDay()];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = currentDay;

    // Get the current UTC time
    const utcTimeString = today.toUTCString();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = `Current UTC Time: ${utcTimeString}`;

 
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Ayemimowa Timilehin";
}

updateRealTimeData();