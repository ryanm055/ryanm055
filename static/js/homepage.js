// Load in aboutMe section.
fetch('./static/html/aboutme.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('aboutMe').innerHTML = data;
    });