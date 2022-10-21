import words from "./words.js";

function getPositionInAlphabet(word){
    //This is something you have not seen before. Don't worry.
    return word.charCodeAt(0) - "a".charCodeAt(0);
}

function createIndexForDictionary(d){
    let index = [0];
    let position = 0;
    for( let i = 0; i <= 26; i++){
        while ( position < d.length && getPositionInAlphabet(d[position]) < i )
            position++;
        index[i] = position;
    }
    return index;
}

function indexSearch(needle, haystack, index){
    let start = 0;             
    let end = haystack.length;

    while( start < end ){
          let middle = (start + end ) / 2;
          middle = Math.floor(middle);
          let middleword = haystack[middle];

          if (middleword == needle ){
             return true; 
          }

          if ( middleword < needle ){
              start = middle + 1;
          } else if (middleword > needle) {
            end = middle;
          }
    }

    return false; 
}
    

let index = createIndexForDictionary(words);

export default function(word){
    return indexSearch(word, words, index);
}