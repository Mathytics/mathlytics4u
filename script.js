const topics = {

    form4: [
        { name: "Operation on Sets",
         urlNotes: "https://drive.google.com/drive/folders/1gpa_kMEG7ZWn9f1uxSJjWlMQPvmv20pd?usp=sharing",
         urlExercises: "https://drive.google.com/drive/folders/1eqdBKVvIYEhEe6Poathl8HHiK5w9pMKC?usp=drive_link",
         urlQuizes: "https://quizizz.com/join/quiz/5e80644a59fd7a001b1c333c/start?studentShare=true",
         urlInteractivelesson: "https://wordwall.net/resource/37067040/ting-4-bab-3-tp2",
         urlPastYear: "https://drive.google.com/drive/folders/1R5WCZN02Nqs_k9JlJGItU9njGyu0igBa?usp=drive_link",
         urlRPH: "https://docs.google.com/document/d/1swiuEbOMMeJkjHrsQvIOIqOdk0KqIOlE/edit"
        },
        { name: "Logical Reasoning",
         urlNotes: "https://drive.google.com/drive/folders/1PIi_0UjAUuVCVRzPHdaI4JiTIhcHvSIq?usp=drive_link",
         urlExercises: "https://drive.google.com/file/d/1xO333B7WJRyVZD5o9HhI46HB4NcWp0kd/view",
         urlQuizes: "https://docs.google.com/document/d/1jOKhemsY8XuBgpn0F0D5NLACPDjzWCB_9RyOD4-fsZs/edit?usp=sharing",
         urlInteractivelesson: "https://venn-vision.vercel.app/",
         urlPastYear: "https://drive.google.com/drive/folders/1U7QRjrQ3h-NyCJkrzAsbDJvg15AQWgem?usp=drive_link",
         urlRPH: "https://docs.google.com/document/d/1UsTJLioamutS5CjSNRoIyPyaby93tKyo/edit"
        }
    ]
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
}

function showLinks() {
    const form = document.getElementById("form").value;
    const topicName = document.getElementById("topic").value;
    const linksDiv = document.getElementById("links");

    linksDiv.innerHTML = ""; // Clear previous links

    if (form && topicName) {
        const selectedTopic = topics[form].find(topic => topic.name === topicName);
        if (selectedTopic) {
            linksDiv.innerHTML = `
                <a href="${selectedTopic.urlNotes}" target="_blank">View Notes</a>
                <a href="${selectedTopic.urlExercises}" target="_blank">View Exercises</a>
                <a href="${selectedTopic.urlQuizes}" target="_blank">View Quizzes</a>
                <a href="${selectedTopic.urlPastYear}" target="_blank">View Past Year</a>
                <a href="${selectedTopic.urlInteractivelesson}" target="_blank">View Interactive Lesson</a>
                <a href="${selectedTopic.urlRPH}" target="_blank">View RPH</a>
            `;
        }
    } else {
        linksDiv.textContent = "Please select both Form and Topic.";
    }
}

// LocalStorage for forum messages
function getStorageKey() {
    // Prefix localStorage key with the website origin or unique identifier
    return `messages_${window.location.hostname}`;
}

function loadMessages() {
    const storageKey = getStorageKey();
    const messages = JSON.parse(localStorage.getItem(storageKey)) || [];
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = "";
    messages.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg;
        messageBox.appendChild(p);
    });
}

function submitQuery() {
    const storageKey = getStorageKey();
    const queryInput = document.getElementById("queryInput").value;
    if (queryInput.trim() !== "") {
        const messages = JSON.parse(localStorage.getItem(storageKey)) || [];
        messages.push(queryInput);
        localStorage.setItem(storageKey, JSON.stringify(messages));
        loadMessages();
        document.getElementById("queryInput").value = "";
    } else {
        alert("Please enter a query before submitting.");
    }
}

window.onload = loadMessages;
