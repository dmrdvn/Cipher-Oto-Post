// Button click function
function openButton() {

  var buttons = document.querySelectorAll('button');

  buttons.forEach(function(btn) {
        if (btn.textContent === 'Cipher') {
            btn.click(); 
        }
  });

}


//Automatic post writing function
function writePost() {

  var textareas = document.querySelectorAll('textarea');
  
  var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. Nelson Mandela",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  ];
    
  textareas.forEach(function(textArea) {
        if (textArea.className === 'w-full min-w-0 resize-none bg-transparent text-xl outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary') {
            
            var randomIndex = Math.floor(Math.random() * quotes.length);    
            var randomQuote = quotes[randomIndex];

            textArea.value = randomQuote;
        }
  }); 
  
}


//Post sharing function
function sharePost() {
    
  var submit = document.querySelectorAll('button');


  submit.forEach(function(share) {
        if (share.className === 'custom-button main-tab accent-tab bg-main-accent px-4 py-1.5 font-bold text-white enabled:hover:bg-main-accent/90 enabled:active:bg-main-accent/75') {
            share.disabled = false;
          
            share.click(); 
        }
  });

}


var duration = 300000; // 300000 ms =  5 minutes

//Oto post function
function autoPost() {
  openButton();
  writePost();
  sharePost();
}


setInterval(autoPost, duration); 



