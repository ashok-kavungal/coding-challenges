const isAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {return false;}

    const letrFreqCounter = {};

    for (let i = 0; i < word1.length; i++) {
        let curLetter = word1[i];
        letrFreqCounter[curLetter] ? letrFreqCounter[curLetter] += 1 : letrFreqCounter[curLetter] = 1;
        console.log(letrFreqCounter);
    }
    
    for (let i = 0; i < word2.length; i++) {
        let curLetter = word2[i];
        if(!letrFreqCounter[curLetter]){
            return false;
        }else{
            letrFreqCounter[curLetter] -= 1;
        }
    }
    return true;
}

console.log(isAnagram('anagram','onogram'));
console.log(isAnagram('abccba','ccbbam'));
console.log(isAnagram('abc','abcabc'));