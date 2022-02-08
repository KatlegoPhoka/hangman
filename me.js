//this function returns a random word from the list
function getting_random_word()
{
  const words=["hello","world","five","seven","big","play","well","nice","snake"];
  var len_words=words.length;
  var random_word;

  const random_word_index=Math.floor(Math.random() * (len_words - 0 ));
  random_word=words[random_word_index];
  return random_word
}


//this function gets a random letter from the word

function getting_random_letter()
{  var word;
   word=getting_random_word();
   var length_of_word=word.length;
   const random_letter_index=Math.floor(Math.random() * (length_of_word-0));
   var random_letter=word[random_letter_index];
   console.log("guess the word: "+ word.slice(0,random_letter_index) + "_" + word.slice(random_letter_index+1,(word).length));
   return word

}

word=(getting_random_letter());
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`give answer?`, name => {;
  
  console.log(`the word was ${word}!`)
  readline.close()
})

