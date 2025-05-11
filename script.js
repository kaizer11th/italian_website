function changeMessage() {
    document.getElementById("hello").innerHTML = "You clicked the button!<br><button onclick='changeBack()'>Go Back</button>";
  }
  
  function changeBack() {
    document.getElementById("hello").innerHTML = "Hello, World!<br><button onclick='changeMessage()'>Click Me</button>";
  }
  