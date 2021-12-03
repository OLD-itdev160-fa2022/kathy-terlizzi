var inputName;

// Object defining state of card with initial values and update method function.
var card = {
    cardName:"Your Name Goes Here",
    cardGreeting: "Greeting Goes Here",
    background: "red",
    greetingIndex: 100,
    backgroundIndex: 100,
    oldBGElemIdValue:99,
    oldElemIdValue: 99,
    TextColorP:"false",
    image:"N",
    update: function(){
        var cardNameEl = document.getElementById('userName');
        cardNameEl.textContent = card.cardName;
        var cardGreetingEl = document.getElementById('greeting');
        cardGreetingEl.textContent = card.cardGreeting;
        var cardImageEl = document.getElementById('card-image');
        if(card.image == "Y"){
            cardImageEl.style.backgroundImage= card.background;
            
        }
        else{
            cardImageEl.style.backgroundImage = " ";
            cardImageEl.style.background = card.background;
        }
        if(card.TextColorP=="true"){
                
                cardGreetingEl.style.color="DarkViolet";
                cardGreetingEl.style.textShadow="2px 1px blue";
                cardNameEl.style.textShadow="1px 2px blue";
                
        }
        else{
                cardGreetingEl.style.color= "rgb(9, 165, 113)";
                cardGreetingEl.style.textShadow="1px 3px rgb(173, 16, 5)"; 
                cardNameEl.style.textShadow= "2px 2px chartreuse";
        }
        document.getElementById('input-name').value="";
    }
};

// Array holding background image objects with background id's and image links.
var backgrounds= [{id:"bg1",bvalue:"url('./images/RedOrnament.jpg')" },
                  {id:"bg2",bvalue:"url('./images/GreenHolly.jpg')"},
                  {id:"bg3",bvalue:"url('./images/AltWhiteCollage.jpg')"},
                  {id:"bg4", bvalue:"red"},
                  {id:"bg5", bvalue:"green"}];

// Array holding greeting image objects with greeting id's and greeting text.
var cardGreetings = [{id:"grtg1", text:"Merry Christmas!"},
                    {id:"grtg2", text:"Happy Holidays!"},
                    {id:"grtg3", text:"Have a Great New Year!"}];

// Variables holding the current date and the current year.
var todaysDate = new Date();
var year = todaysDate.getFullYear();

// Function to update the card background image.
function updateBackground(bIsImage,bBackgroundID,bBackgroundEl,index){
     
            //Get the card background from the array of possible backgrounds.
            card.background = backgrounds[index].bvalue;

            //Check if the current background is an image and set flag accordingly.
            if(bIsImage=="true"){
                card.image = "Y";
            }
            else{
                card.image="N";
            }
            
            // Update the font weight for the selected background.
            bBackgroundEl.style.fontWeight="bold";

            // Check if the background has been changed from the default value.
            if (card.backgroundIndex !== 100){
                card.oldBGElemIdValue = backgrounds[card.backgroundIndex].id;
                var oldBGElem = document.getElementById(card.oldBGElemIdValue);

                //Unbold any previous selection.
                oldBGElem.style.fontWeight = "normal";
            }
              
}

// Function to get the inputted name and set it in the card.
function getUserName(){
    var inputEl = document.getElementById('input-name');
    if (inputEl != null){
        card.cardName = inputEl.value;
    }
    else{
        card.cardName = "Your Name Goes Here";
    }
   
}

// Function to get the selected greeting in the list and set it on the card display.
//  Also set the selected greeting font to bold and unbold any previous selection.
function getGreeting(event){
    var greetingEl = event.target;
    var greetingID = greetingEl.id;

    for (i=0;i<3;i++){
        if (greetingID == cardGreetings[i].id){
            card.cardGreeting = cardGreetings[i].text;
            greetingEl.style.fontWeight = "bold";

            // Check if the initial/default value has been changed.
            if (card.greetingIndex !== 100){
                card.oldElemIdValue = cardGreetings[card.greetingIndex].id;
                var oldElem = document.getElementById(card.oldElemIdValue);
                oldElem.style.fontWeight = "normal";
            }

            card.greetingIndex = i;
            return;
        }
    }
}

// Function to get the background selected rom the list; call fn to set it in the card display.
// Set flag for purple text color. 
function getBackground(event){
    var backgroundEl = event.target;
    var backgroundID = backgroundEl.id;
    var isImage;
   // The last two of the backgrounds in the ul have no image and are just colors.
   if((backgroundID=="bg4")||(backgroundID=="bg5")){
    
   //set a flag for a purple text color (for the white background card).
   card.TextColorP="false";
    
    for (i=3;i<5;i++){
        isImage = "false";
        if (backgroundID == backgrounds[i].id){
            updateBackground(isImage,backgroundID,backgroundEl,i);

            //update the background index to the current value (not default value).
            card.backgroundIndex = i;
            return;
        }
      }
    }
  
  else{

      // The first three of the backgrounds in the ul are images.
      for (i=0;i<3;i++){
        card.TextColorP="false";
        isImage = "true";
        if (backgroundID == backgrounds[i].id){
            updateBackground(isImage,backgroundID,backgroundEl,i);
        
        

            // Set flag to change text to Purple for the White card.
            if(i === 2) {
                card.TextColorP="true";
            }
            if((i==0) ||(i==1)){
                card.TextColorP="false";
            }
            //update background index to current value (not default value).
            card.backgroundIndex = i;
            return;      
        }  
    }
  }
}

// Function to process Clear button and reset the card display.
function clearCard(){
    card.cardName = "Your Name Goes Here" ;
    card.cardGreeting = "Greeting Goes Here";
    card.background = "red"; 
    card.image = "N";
    card.TextColorP="false";

    // Deselect (unbold) any selected list items.
   if(card.backgroundIndex!==100){
    bgElemIDValue = backgrounds[card.backgroundIndex].id;
    bgElem = document.getElementById(bgElemIDValue);
    bgElem.style.fontWeight = "normal";
    card.backgroundIndex = 100;
   }
   if(card.greetingIndex!==100){
    gtgElemIDValue = cardGreetings[card.greetingIndex].id;
    gtgElem = document.getElementById(gtgElemIDValue);
    gtgElem.style.fontWeight = "normal"
    card.greetingIndex = 100;
   }
    
   // Call function to update the card display.
    card.update();

}

// Function to display the current Year in the Header of the Browser,
function addYear(){
    var headerEl = document.getElementById('title-header');  
    var titleYearEl = document.createElement('h1');
    var textYearEl = document.createTextNode("Create a Card " + year);

    titleYearEl.setAttribute('id',"title");
    titleYearEl.appendChild(textYearEl);
    headerEl.appendChild(titleYearEl);
}

// Function to set up event handlers and display the header with 
// current year in the Browser display.
function init(){
    var nameEl=document.getElementById('input-name');
    nameEl.addEventListener('blur',getUserName,false);
    var viewEl = document.getElementById('view-button');
    viewEl.addEventListener('click',card.update,false);
    var greetingListEl = document.getElementById('greeting-list');
    greetingListEl.addEventListener('click',function(e){getGreeting(e);},false); 
    var backgroundListEl = document.getElementById('backg');
    backgroundListEl.addEventListener('click',function(e){getBackground(e);},false); 
    var clearEl = document.getElementById('clear-button');
    clearEl.addEventListener('click',clearCard,false); 
    addYear();
}

// Call function to initialize browser page.
init();

