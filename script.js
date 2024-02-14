const counters = document.querySelectorAll ('.counter')
//run the variable for all the classes of .counter. going to give us a node list similar to an array so we then want to loop through that with a forEach. for each takes in a function where we say forEach counter, lets forst take the specific element counter and set the inner text to a string of 0 as done below. it will show zero inside the div 'counter-container. the inner text of <div class="counter" data-target="12000> the below variable puts data here</div>" on your html doc.

counters.forEach(counter => {
    counter.innerText = '0'

    //run a function below called updateCounter.. an arrow function. we want to get teh target by using variable const target which is in the data target attribute key: 12,000, 5,000, 7500. and the attribute we want to get is the data-target as noted below

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            //adding an else here with a target to not exceed the number values set at 1200 twitter/ 5000 youtube/ 7500 facebook
        
            //set timeout and wait one milisecond before we run it that way in increments of 60(twitter) 25(youtube) and 38(facebook)
            //we want it to keep counting past where it is with the above at 60 25 and 38......
        
        //above want to make sure that the c number is less than the target cuz we dont want to go past the target. so if it is we will take the counter and setTheInnerText so we wnat to  take that c and add whatever that increment is as done above. add in a Math.ceil to round that number up

        // console.log(increment)
     //above is where we create the increment to decide how much to increment this by and depending the numebr value we assign, we decide how fast or slow it moves the counter so the numbers on the index.html 12000 for twitter , 5000 for youtube and 7500 for facebook will divide by 200 and generate 60(twitter), 25 (youtube), and 37.5 (facebook)
counter.innterText = target
}
}
    updateCounter()
})