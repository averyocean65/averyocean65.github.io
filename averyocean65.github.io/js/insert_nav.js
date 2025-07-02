addEventListener('DOMContentLoaded', (event) => {
    // Read the nav.html file
    fetch('nav.html')
        .then(response => { 
            return response.text() 
        })
        .then(data => {
            // Insert the nav.html file into the first element with the class "nav-container"
            document.querySelector('.nav-container').innerHTML = data;
        });
});