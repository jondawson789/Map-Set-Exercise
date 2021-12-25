new Set([1,1,2,2,3,4]) // {1,2,3,4}

[...new Set("referee")].join("") // "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

//-------------------------------------------------------------------
let hasDuplicate = (arr) => new Set(arr).size !== arr.length; 


//---------------------------------------------------------------------
function vowelCount (str) {
    const vowels = "aeiou";
    const vowelMap = new Map();

    for (var i = 0; i < str.length; i++) {
        let lowerCaseLetter = str.charAt(i).toLowerCase(); 
        if(vowels.indexOf(lowerCaseLetter) !== -1){
            if(vowelMap.has(lowerCaseLetter)) {
                vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1)
            }
            else {
                vowelMap.set(lowerCaseLetter, 1); 
            }
        }
      }

      return vowelMap; 
}

