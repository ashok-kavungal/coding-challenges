function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a','e','i','o','u'];
    let len = str.length;

    while (len--) {
        if(vowels.includes(str.charAt(len))){
            vowelsCount += 1;
        }
    }
        
    return vowelsCount;
  }

  let word = 'aeiou'

console.log('The word '+ word+ ' has' + getCount(word)+' vowels');  