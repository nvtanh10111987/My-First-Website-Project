let visitorName = [];
let visitorMessage = new Array();

function getMessage (name, message) {
for(name in visitorName){
    visitorName.push(name)
}
for(message in visitorMessage){
    visitorMessage.push(message)
}
console.log("Message saved!")
return "Message saved!"
}
function printInfo() {
    document.getElementById("info").innerHTML = visitorName[name] + "left a message:<br> " + visitorMessage[message]+".";
  }
