const topics = {

    form4: [
        { 
            name: "Chapter 3: Logical Reasoning", 
            urlNotes: "https://drive.google.com/file/d/1NqdfACzqxtk0JufWLmfHZ50DWAYS6bTN/view", 
            urlExercises: "https://example.com/form4/sets-exercises", 
            urlQuizes: "https://example.com/form4/quizzes", 
            urlPastYear: "https://example.com/form4/past-year",
            subtopics: [
                { 
                    name: "3.1: Statements", 
                    urlNotes: "https://drive.google.com/file/d/1XN9v0JmYM5CTCup2ZH_MknkLENjeWrZh/view?usp=drive_link", 
                    urlExercises: "https://drive.google.com/file/d/1fH6DfVaYVW81luXEhGXeLAewIfz5ZVXY/view?usp=drive_link", 
                    urlQuizes: "https://quizizz.com/join?gc=26597520", 
                    urlPastYear: "https://drive.google.com/drive/folders/1U7QRjrQ3h-NyCJkrzAsbDJvg15AQWgem?usp=drive_link",
                    urlRPH: "https://docs.google.com/document/d/13GOjOCprZSO9REfblE2EweZbQp1CDb-B/edit?usp=drive_link&ouid=100255213395062774814&rtpof=true&sd=true",
                    urlInteractive:"https://wordwall.net/resource/37067040/ting-4-bab-3-tp2"
                },
                { 
                    name: "3.2: Arguments", 
                    urlNotes: "https://drive.google.com/file/d/1TZwf4Cg0AYcJ6ZuT6GBE9QtKrkaOInb1/view?usp=drive_link", 
                    urlExercises: "https://drive.google.com/file/d/1igMXsahIq7amwOmNo8APHtu9lpZaYXzi/view?usp=drive_link", 
                    urlQuizes: "https://quizizz.com/join?gc=05945488", 
                    urlPastYear: "https://drive.google.com/drive/folders/1U7QRjrQ3h-NyCJkrzAsbDJvg15AQWgem?usp=drive_link",
                    urlRPH: "https://docs.google.com/document/d/13GOjOCprZSO9REfblE2EweZbQp1CDb-B/edit?usp=drive_link&ouid=100255213395062774814&rtpof=true&sd=true",
                    urlInteractive:"https://wordwall.net/resource/37067040/ting-4-bab-3-tp2"
                }
            ]
        },
        { 
            name: "Chapter 4: Operation on Sets", 
            urlNotes: "https://drive.google.com/file/d/1NqdfACzqxtk0JufWLmfHZ50DWAYS6bTN/view", 
            urlExercises: "https://example.com/form4/sets-exercises", 
            urlQuizes: "https://example.com/form4/quizzes", 
            urlPastYear: "https://example.com/form4/past-year",
            subtopics: [
                { 
                    name: "4.1: Intersection on Sets", 
                    urlNotes: "https://drive.google.com/file/d/1jR9jcmvvDsH7aYJuwt9VN1OqV_bZB5PW/view?usp=drive_link", 
                    urlExercises: "https://drive.google.com/file/d/16LdEEX3EjjNPbjR9JqlOqgEvCer0xXj1/view?usp=drive_link", 
                    urlQuizes: "https://quizizz.com/join/quiz/67606abff3407fd2a85125ff/start?studentShare=true", 
                    urlPastYear: "https://drive.google.com/drive/folders/1R5WCZN02Nqs_k9JlJGItU9njGyu0igBa?usp=drive_link",
                    urlRPH: "https://docs.google.com/document/d/1DCDMuq2uWgaeTGhJlePzk7LVULkBO92d/edit?usp=drive_link&ouid=100255213395062774814&rtpof=true&sd=true",
                    urlInteractive:"https://wordwall.net/resource/37070451"
                },
                { 
                    name: "4.2: Union of Sets", 
                    urlNotes: "https://drive.google.com/file/d/1xgzFA_qApr47FwkcBaAamjGckI5m7MRA/view?usp=drive_link", 
                    urlExercises: "https://drive.google.com/file/d/1QOfFQ7xaGZKzaAjT3UCj9JThB-6FjMmS/view?usp=drive_link", 
                    urlQuizes: "https://quizizz.com/join/quiz/67608d17adc567e4a6ad9d51/start?studentShare=true", 
                    urlPastYear: "https://drive.google.com/drive/folders/1R5WCZN02Nqs_k9JlJGItU9njGyu0igBa?usp=drive_link",
                    urlRPH: "https://docs.google.com/document/d/1DCDMuq2uWgaeTGhJlePzk7LVULkBO92d/edit?usp=drive_link&ouid=100255213395062774814&rtpof=true&sd=true",
                    urlInteractive:"https://wordwall.net/resource/37070451"
                },
                 { 
                    name: "4.3: Combined Operations on Sets", 
                    urlNotes: "https://drive.google.com/file/d/10xzPhm3wMOO49_geFyHgG4mn1xzmu4mJ/view?usp=drive_link", 
                    urlExercises: "https://drive.google.com/file/d/1nLf8NDyRbVXf7CFjoUua0IvgAb4Hs5Ce/view?usp=drive_link", 
                    urlQuizes: "https://quizizz.com/join/quiz/677b585e4e05e009e275d01b/start?studentShare=true", 
                    urlPastYear: "https://drive.google.com/drive/folders/1R5WCZN02Nqs_k9JlJGItU9njGyu0igBa?usp=drive_link",
                    urlRPH: "https://docs.google.com/document/d/1DCDMuq2uWgaeTGhJlePzk7LVULkBO92d/edit?usp=drive_link&ouid=100255213395062774814&rtpof=true&sd=true",
                    urlInteractive:"https://wordwall.net/resource/37070451"
                }
            ]
        }
    ]
};

function updateTopics() {
    const form = document.getElementById("form").value;
    const topicSelect = document.getElementById("topic");
    topicSelect.innerHTML = "<option value=''>-- Select Topic --</option>";
    document.getElementById("subtopic").innerHTML = "<option value=''>-- Select Subtopic --</option>";

    if (form && topics[form]) {
        topics[form].forEach(topic => {
            const option = document.createElement("option");
            option.value = topic.name;
            option.textContent = topic.name;
            topicSelect.appendChild(option);
        });
    }
}

function updateSubtopics() {
    const form = document.getElementById("form").value;
    const topicName = document.getElementById("topic").value;
    const subtopicSelect = document.getElementById("subtopic");
    subtopicSelect.innerHTML = "<option value=''>-- Select Subtopic --</option>";

    if (form && topicName) {
        const selectedTopic = topics[form].find(topic => topic.name === topicName);
        if (selectedTopic && selectedTopic.subtopics) {
            selectedTopic.subtopics.forEach(subtopic => {
                const option = document.createElement("option");
                option.value = subtopic.name;
                option.textContent = subtopic.name;
                subtopicSelect.appendChild(option);
            });
        }
    }
}

function showLinks() {
    const form = document.getElementById("form").value;
    const topicName = document.getElementById("topic").value;
    const subtopicName = document.getElementById("subtopic").value;
    const linksDiv = document.getElementById("links");

    linksDiv.innerHTML = ""; // Clear previous links

    if (form && (topicName || subtopicName)) {
        let selectedTopic = topics[form].find(topic => topic.name === topicName);
        if (subtopicName) {
            selectedTopic = selectedTopic?.subtopics?.find(subtopic => subtopic.name === subtopicName);
        }

        if (selectedTopic) {
            linksDiv.innerHTML = `
                <a href="${selectedTopic.urlNotes}" target="_blank">View Notes</a>
                <a href="${selectedTopic.urlExercises}" target="_blank">View Exercises</a>
                <a href="${selectedTopic.urlQuizes}" target="_blank">View Quizzes</a>
                <a href="${selectedTopic.urlPastYear}" target="_blank">View Past Year</a>
                <a href="${selectedTopic.urlRPH}" target="_blank">E-RPH</a>
                <a href="${selectedTopic.urlInteractive}" target="_blank">Interactive Lesson</a>
            `;
        }
    } else {
        linksDiv.textContent = "Please select both Form and Topic.";
    }
}



// LocalStorage for forum messages
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = "";
    messages.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg;
        messageBox.appendChild(p);
    });
}

function submitQuery() {
    const queryInput = document.getElementById("queryInput").value;
    if (queryInput.trim() !== "") {
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(queryInput);
        localStorage.setItem("messages", JSON.stringify(messages));
        loadMessages();
        document.getElementById("queryInput").value = "";
    } else {
        alert("Please enter a query before submitting.");
    }
}

window.onload = loadMessages;

