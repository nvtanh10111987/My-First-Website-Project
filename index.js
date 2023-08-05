const visitorName = [];
const visitorMessage = [];

function getMessage (name, message) {
if (name && message !== null){
    visitorName.push(name);
    visitorMessage.push(message);
    console.log("Message saved!");
    return "Massage saved!"
}
else
console.log("Please leave your name and message!")
return "Please leave your name and message!"
}
function printInfo() {
    document.getElementById("info").innerHTML =
      "Visitor's Name: [" + visitorName + "]message: [" + visitorMessage + "]";
  }
