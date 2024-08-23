// Example function to fetch and display data
function fetchThreats() {
    fetch('/api/threats')  // Endpoint should be implemented to interface with C++ backend
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('threatsTable').getElementsByTagName('tbody')[0];
            data.forEach(threat => {
                const row = table.insertRow();
                row.insertCell(0).textContent = threat.id;
                row.insertCell(1).textContent = threat.type;
                row.insertCell(2).textContent = threat.description;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener('DOMContentLoaded', fetchThreats);
