document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('xrayImage');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('/analyze-xray', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Assuming your backend returns the result in a field called `result`
        document.getElementById('result').textContent = data.result || 'Error: No result received';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error: Unable to process image';
    });
});
