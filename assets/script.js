let headsCount = 0;
let tailsCount = 0;

// event listener for flip button 
document.querySelector("#flip").addEventListener('click', function(e){
    // console.log('hello, flip button was clicked!');

    // generate random outcome from two possible options/number
    let isHeads = Math.random() < 0.5  // if true then it's heads else its tails 

    if (isHeads) {
        // it's heads
        console.log("heads");
        // image src changes 
        document.querySelector("img").src = './assets/images/penny-heads.jpg';
        // update results header tag
        document.querySelector("#message-header").textContent = 'You Flipped Heads!';

        headsCount++;

    } else {
        // it's tails 
        console.log("tails");
        // image src changes to tails
        document.querySelector("img").src = './assets/images/penny-tails.jpg';
        document.querySelector("#message-header").textContent = 'You Flipped Tails!';

        tailsCount++;
    }
    


    
    let total = headsCount + tailsCount;

    let percentageHeads = Math.round(headsCount/total * 100);
    let percentageTails = Math.round(tailsCount/total * 100);


    document.querySelector(".heads-counter").textContent = headsCount;
    document.querySelector(".tails-counter").textContent = tailsCount;
    document.querySelector(".heads-percentage").textContent = percentageHeads + '%';
    document.querySelector(".tails-percentage").textContent = percentageTails + '%';

    

    // store results in localStorage



})


// event listener for clear button
document.querySelector("#clear").addEventListener('click', function(){
    // console.log("hello, clear button was clicked!!!");
})
