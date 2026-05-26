async function sendMessage(){
  const text = document.getElementById("chatInput").value.trim();
  if(!text) return;

  const token = ""; // paste your token here
  const repo = "atkhedkar-alt/simple-chat"; // replace with your repo name
  const path = "messages.json";

  // 1. Get current file
  let res = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    headers: { Authorization: `token ${token}` }
  });
  let file = await res.json();
  let content = JSON.parse(atob(file.content));

  // 2. Add new message
  content.push({ sender: "Arvind", text });

  // 3. Commit updated file
  await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    method: "PUT",
    headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "add new chat message",
      content: btoa(JSON.stringify(content, null, 2)),
      sha: file.sha
    })
  });

  document.getElementById("chatInput").value = "";
}
