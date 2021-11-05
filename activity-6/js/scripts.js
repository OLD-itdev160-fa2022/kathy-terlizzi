//An array to store messages
var messages = [];

// Message Type lookup object. Similar to enum.
var messageType = {
    out:'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Message constructor function.
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

// Function to create and return an element for the msg passed in
function createMessageElement(message){
    //create the text elem for the msg
    var messageText = document.createTextNode(
        message.user + ':' + message.message
    );

    //create the elem and add the msg text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // add a class using the message type
    messageEl.className = message.type;

    return messageEl;
    
}

// Button click event handler to add a new msg
function addMessageHandler(e){
    var user,type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables
    switch (e.target.id){
        case 'send-button':
            user = 'Kathy';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    //Create a new msg with truthy value
    if(messageInput.value !== ' '){
        //Construct a msg and add it to the array
        var message = new Message(type,user,messageInput.value);
        messages.push(message);

        //Create a new msg element
        var el = createMessageElement(message);

        //Add the msg element to the DOM
        messageContainerEl.appendChild(el);

        //Reset input
        messageInput.value = '';
    }
}

var init = function(){
    //wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
};

init();

