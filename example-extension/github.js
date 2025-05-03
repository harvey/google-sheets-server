// Load external HTML and inject it into the page
fetch('github.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('githubButtons').innerHTML = html;
  })
  .catch(error => {
    console.error('Error loading external HTML:', error);
  });
