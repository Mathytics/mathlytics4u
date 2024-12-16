// Mock data for topics
const topics = {
    "Form 1": [
        { name: "Topic 1", urlNotes: "#", urlExercises: "#", urlQuizes: "#", urlPastYear: "#" },
        { name: "Topic 2", urlNotes: "#", urlExercises: "#", urlQuizes: "#", urlPastYear: "#" }
    ],
    "Form 2": [
        { name: "Topic A", urlNotes: "#", urlExercises: "#", urlQuizes: "#", urlPastYear: "#" },
        { name: "Topic B", urlNotes: "#", urlExercises: "#", urlQuizes: "#", urlPastYear: "#" }
    ],
    "Form 3": [
        { name: "Topic X", urlNotes: "#", urlExercises: "#", urlQuizes: "#", urlPastYear: "#" }
    ]
};

// Load queries from localStorage when the page loads
window.onload = function () {
    loadQueries();
};

// Update topics based on selected form
function updateTopics() {
    const form = document.getElementById("form").value;
    const topicSelect = document.getElementById("topic");

    topicSelect.innerHTML = "<option value=''>-- Select Topic --</option>";

    if (form && topics[form]) {
        topics[form].forEach(({ name }) => {
            const option = new Option(name, name);
            topicSelect.add(option);
        });
    } else {
        alert("No topics available for the selected form.");
    }
}

// Show resource links
function showLinks() {
    const form = document.getElementById("form").value;
    const topicName = document.getElementById("topic").value;
    const linksDiv = document.getElementById("links");

    linksDiv.innerHTML = ""; // Clear previous links

    if (!form || !topicName) {
        linksDiv.textContent = "Please select both Form and Topic.";
        return;
    }

    const selectedTopic = topics[form].find(topic => topic.name === topicName);
    if (selectedTopic) {
        const createLink = (text, url) => {
            const link = document.createElement("a");
            link.textContent = text;
            link.href = url;
            link.target = "_blank";
            return link;
        };

        linksDiv.appendChild(createLink("View Notes", selectedTopic.urlNotes));
        linksDiv.appendChild(createLink("View Exercises", selectedTopic.urlExercises));
        linksDiv.appendChild(createLink("View Quizzes", selectedTopic.urlQuizes));
        linksDiv.appendChild(createLink("View Past Year Papers", selectedTopic.urlPastYear));
    }
}

// Submit a query to the forum
function submitQuery() {
    const queryInput = document.getElementById("queryInput").value.trim();
    const messageBox = document.getElementById("messageBox");

    if (queryInput) {
        // Add new query to the message box
        const newMessage = document.createElement("div");
        newMessage.textContent = queryInput;
        messageBox.appendChild(newMessage);

        // Save the query to localStorage
        saveQuery(queryInput);

        // Clear input field
        document.getElementById("queryInput").value = "";
    } else {
        alert("Please enter a query before submitting.");
    }
}

// Save query to localStorage
function saveQuery(query) {
    let queries = JSON.parse(localStorage.getItem("queries")) || [];
    queries.push(query);
    localStorage.setItem("queries", JSON.stringify(queries));
}

// Load queries from localStorage
function loadQueries() {
    const queries = JSON.parse(localStorage.getItem("queries")) || [];
    const messageBox = document.getElementById("messageBox");

    queries.forEach(query => {
        const message = document.createElement("div");
        message.textContent = query;
        messageBox.appendChild(message);
    });
}
