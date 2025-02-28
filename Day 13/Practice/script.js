document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Save data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    // Retrieve data from local storage and display it
    displayUserInfo();
});

function displayUserInfo() {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');

    const outputDiv = document.getElementById('output');
    if (name && age) {
        outputDiv.innerHTML = `<p>Stored Information:</p><p>Name: ${name}</p><p>Age: ${age}</p>`;
    } else {
        outputDiv.innerHTML = '<p>No stored information.</p>';
    }
}

// Display stored information on page load
displayUserInfo();
