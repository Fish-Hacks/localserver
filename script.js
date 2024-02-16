document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code here

  const message = [
    "Please restart your router and microwave",
    "Please restart your laptop",
    "Please mute your laptop",
    "Please stop messaging me",
    "Get out of my head, Get out of my head, Get out of my head, Get out of my head, Get out of my head, Get out of my head,",
    "HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP",
  ];

  const randMsg = message[Math.floor(Math.random() * message.length)];
  console.log(randMsg);

  // Get element by id
  const el = document.getElementById("msg");
  el.innerHTML = randMsg;
});