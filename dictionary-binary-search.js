import words from "./words.js";

function binarySearch(needle, haystack){
    let start = 0;             // Green bookmark
    let end = haystack.length; // red bookmark

    while( start < end ){
          let middle = (start + end ) / 2;
          middle = Math.floor(middle);
          let middleword = haystack[middle];

          if (middleword == needle ){
             return true; //found it
          }

          if ( middleword < needle ){
              start = middle + 1;
          } else if (middleword > needle) {
            end = middle;
          }
    }

    return false; // did not find the word
}

export default function(word){
    return binarySearch(word, words);
}