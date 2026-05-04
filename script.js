const apiText = document.getElementById("api-text");
const fetchBtn = document.getElementById("fetch-btn");
const noteInput = document.getElementById("note-input");
const saveBtn = document.getElementById("save-btn");
const statusMsg = document.getElementById("status-msg");

// Load from LocalStorage
const savedNote = localStorage.getItem("userNote");
if (savedNote) noteInput.value = savedNote;

// Fetch from API
async function getDailyTask() {
  apiText.innerText = "Connecting...";
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" +
        Math.floor(Math.random() * 20 + 1),
    );
    const data = await response.json();
    apiText.innerText = "Task: " + data.title;
  } catch (e) {
    apiText.innerText = "Error loading task.";
  }
}

// Save to LocalStorage
function saveNote() {
  localStorage.setItem("userNote", noteInput.value);
  statusMsg.innerText = "Saved!";
  setTimeout(() => {
    statusMsg.innerText = "";
  }, 2000);
}

fetchBtn.addEventListener("click", getDailyTask);
saveBtn.addEventListener("click", saveNote);