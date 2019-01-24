

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let question = "?"
let exclamation = "!"




function addExcitement (theWordArray,symbol,numberSymbol) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        
         if(i%3===0 && i!=0){
            buildMeUp = buildMeUp+symbol.repeat(numberSymbol);
        }
        
        buildMeUp = buildMeUp + " " + theWordArray[i];

        if(i+1===theWordArray.length){
            buildMeUp = buildMeUp+symbol.repeat(numberSymbol);
        }

       
        
 
        


        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

addExcitement(sentence, question,1);
addExcitement(sentence, exclamation,5);
addExcitement(sentence, exclamation,2);