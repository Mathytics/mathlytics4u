const topics = {
    form2: [
        { name: "Three Dimensional Shapes", urlNotes: "https://example.com/form2/3d-notes", urlExercises: "https://example.com/form2/3d-exercises", urlQuizzes: "https://example.com/form2/3d-quizzes", urlPastYear: "https://example.com/form2/3d-pastyear" },
        { name: "Cartesian Plane", urlNotes: "https://example.com/form2/cartesian-notes", urlExercises: "https://example.com/form2/cartesian-exercises", urlQuizzes: "https://example.com/form2/cartesian-quizzes", urlPastYear: "https://example.com/form2/cartesian-pastyear" }
    ],
    form4: [
        { name: "Operation on Sets", urlNotes: "https://example.com/form4/sets-notes", urlExercises: "https://example.com/form4/sets-exercises", urlQuizzes: "https://example.com/form4/sets-quizzes", urlPastYear: "https://example.com/form4/sets-pastyear" },
        { name: "Logical Reasoning", urlNotes: "https://example.com/form4/logical-notes", urlExercises: "https://example.com/form4/logical-exercises", urlQuizzes: "https://example.com/form4/logical-quizzes", urlPastYear: "https://example.com/form4/logical-pastyear" }
    ]
};

// Load selected form and topic from localStorage
window.onload = () => {
    const savedForm = localStorage.getItem('selectedForm');
    const savedTopic = localStorage.getItem('selectedTopic');
    
    if (savedForm) document.getElementById('form').value = savedForm;
    if (savedTopic) document.getElementById('topic').value = savedTopic;

    updateTopics(); // Update topics based on saved form
    showLinks();    // Show links if both form and topic are saved
};

function updateTopics() {
    const form = document.getElementById("form").value;
    const topicSelect = document.getElementById("topic");
    topicSelect.innerHTML = "<option value=''>-- Select Topic --</option>";

    if (form && topics[form]) {
        topics[form].forEach(topic => {
            const option = document.createElement("option");
            option.value = topic.name;
            option.textContent = topic.name;
            topicSelect.appendChild(option);
        });
    }
    saveSelection(); // Save the selected form and topic
}

function saveSelection() {
    const form = document.getElementById("form").value;
    const topic = document.getElementById("topic").value;
    
    if (form && topic) {
        localStorage.setItem('selectedForm', form);
        localStorage.setItem('selectedTopic', topic);
    }
}

function showLinks() {
    const form = document.getElementById("form").value;
    const topicName = document.getElementById("topic").value;
    const linksDiv = document.getElementById("links");

    linksDiv.innerHTML = ""; // Clear previous links

    if (form && topicName) {
        const selectedTopic = topics[form].find(topic => topic.name === topicName);
        if (selectedTopic) {
            const notesLink = document.createElement("a");
            notesLink.href = selectedTopic.urlNotes;
            notesLink.target = "_blank";
            notesLink.textContent = "View Notes";

            const exercisesLink = document.createElement("a");
            exercisesLink.href = selectedTopic.urlExercises;
            exercisesLink.target = "_blank";
            exercisesLink.textContent = "View Exercises";              
            
            const quizzesLink = document.createElement("a");
            quizzesLink.href = selectedTopic.urlQuizzes;
            quizzesLink.target = "_blank";
            quizzesLink.textContent = "View Quizzes";

            const pastYearLink = document.createElement("a");
            pastYearLink.href = selectedTopic.urlPastYear;
            pastYearLink.target = "_blank";
            pastYearLink.textContent = "Past Year Questions";

            linksDiv.appendChild(notesLink);
            linksDiv.appendChild(exercisesLink);
            linksDiv.appendChild(quizzesLink);
            linksDiv.appendChild(pastYearLink);
        }
    }
}

function submitQuery() {
    const queryInput = document.getElementById('queryInput');
    const messageBox = document.getElementById('messageBox');

    if (queryInput.value.trim() === "") {
        alert("Please enter a query.");
        return;
    }

    const message = document.createElement('p');
    message.textContent = queryInput.value.trim();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteQuery(message);

    message.appendChild(deleteButton);
    messageBox.appendChild(message);

    queryInput.value = ""; // Clear the input after submission
}

function deleteQuery(messageElement) {
    const messageBox = document.getElementById('messageBox');
    messageBox.removeChild(messageElement); // Remove the query
}
