function updateDateTime() {  
    const now = new Date();  
    const options = {  
        year: 'numeric',  
        month: 'long',  
        day: 'numeric',  
        hour: '2-digit',  
        minute: '2-digit',  
        second: '2-digit',  
        hour12: true  
    };  
    const formattedDateTime = now.toLocaleString('en-US', options);  
    document.getElementById('datetime').innerText = formattedDateTime;  
}  

// Update the date and time immediately and then every second  
updateDateTime();  
setInterval(updateDateTime, 1000);