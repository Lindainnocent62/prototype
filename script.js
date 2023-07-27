function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
  
    if (message !== "") {
      const chatDisplay = document.getElementById("chat-display");
      const newMessage = document.createElement("div");
      newMessage.innerText = "You: " + message;
      chatDisplay.appendChild(newMessage);
  
      userInput.value = "";
      userInput.focus();
    }
  }