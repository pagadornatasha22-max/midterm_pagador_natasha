// A. Variables and Output
const name = "Natasha Pagador";
const course = "Web Development";

document.addEventListener('DOMContentLoaded', function() {
    // Display name and course in the article
    const displayDiv = document.createElement('div');
    displayDiv.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Course:</strong> ${course}</p>`;
    document.querySelector('article').appendChild(displayDiv);

    // B. Button Function
    document.getElementById('alertButton').addEventListener('click', function() {
        alert('Button clicked!');
    });

    // C. User Input
    document.getElementById('submitInput').addEventListener('click', function() {
        const input = document.getElementById('userInput').value;
        document.getElementById('output').innerText = `You entered: ${input}`;
    });

    // D. Event Handling – Change content dynamically
    document.getElementById('dynamicText').addEventListener('click', function() {
        this.innerText = 'Content changed dynamically!';
    });
});