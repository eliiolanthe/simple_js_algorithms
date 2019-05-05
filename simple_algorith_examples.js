/**
 * FIZZBUZZ
 * log all nums up to and including num
 * if divisible by 3 -> fizz
 * if divisible by 5 -> buzz
 * divisible by both -> fizzBuzz
 */
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    // let fizz = i%3 === 0 ? 'fizz' : '';
    // let buzz = i%5 === 0 ? 'buzz' : '';
    let toLog;

    // if (fizz || buzz) {
    //   toLog = fizz && buzz ? fizz + buzz : fizz ? fizz : buzz;
    // } else {
    //   toLog = i;
    // }

    if (i % 15 === 0) {
      toLog = 'fizzbuzz';
    } else if (i % 3 === 0) {
      toLog = 'fizz';
    } else if (i % 5 === 0) {
      toLog = 'buzz';
    } else toLog = i;

    console.log(toLog);
  }
}

// fizzBuzz(50);
// ------------------------------------------------------

/**
 * HARMLESS RANSOME NOTE
 * determine if we have enough words in the given text to create the note. Assume no punctuation
 */

function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {}; // hashtable
  let noteIsPossible = true;

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else noteIsPossible = false;
  });
  return noteIsPossible;
}

// harmlessRansomNote('is all the the the', 'this is all the magazine text in the magazine');
// ------------------------------------------------------

/**
 * PALINDROME
 */
function isPalindrome(string) {
  let charsArr = string.toLowerCase().split('');
  // can also clean with -> string.replace(/[^a-z]/gi, '')
  let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let lettersArr = [];

  charsArr.forEach(char => {
    if (validChars.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  if (lettersArr.join() === lettersArr.reverse().join()) {
    return true;
  } else return false;
}

// isPalindrome("Madam I'm Adam");
// ------------------------------------------------------

/**
 * CEASAR CIPHER
 * shift each letter in string by number of places (num param)
 * handle positive & negative nums
 */
function ceasarCipher(str, num) {
  let lowerLetterStr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  num = num % 26; // for large nums

  for (let i = 0; i < lowerLetterStr.length; i++) {
    let current = lowerLetterStr[i];

    if (current === ' ') {
      newString += current;
      continue;
    }

    let currentIndex = alphabet.indexOf(current);
    let newIndex = currentIndex + num;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }

    if (str[i] === str[i].toUpperCase()) {
      // preserve the case
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }

  console.log(newString);
}

// ceasarCipher('hEllo', -202);
// ------------------------------------------------------

/**
 * REVERSE WORDS
 */
