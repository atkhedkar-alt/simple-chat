// Function to send a new message (local-only version for testing)
async function sendMessage() {
  const message = document.getElementById("messageInput").value;

  if (!message) {
    alert("Please type a message first!");
    return;
  }

  const chatWindow = document.getElementById("chatWindow");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", "mine");

  const text = document.createElement("div");
  text.textContent = message;

  const time = document.createElement("small");
  const date = new Date();
  time.textContent = date.toLocaleString();
  time.classList.add("timestamp");

  msgDiv.appendChild(text);
  msgDiv.appendChild(time);
  chatWindow.appendChild(msgDiv);

  document.getElementById("messageInput").value = "";
}

// Function to load messages (placeholder for GitHub integration)
async function loadMessages() {
  // For now, this just keeps the chat window as-is.
  // Later, you can connect this to GitHub Issues API.
}

// Load messages when the page opens + auto-refresh
window.onload = () => {
  loadMessages();
  // Auto-refresh every 10 seconds
  setInterval(loadMessages, 10000);
};
