function nativePatternSearch(text, pattern) {
    let occurences = [];
    for (let i = 0; i <= text.length - pattern.length; i++) {
        if (text.substring(i, i + pattern.length) === pattern) {
            occurences.push(i);
        }
    }
    return occurences
}

let textExample = "ababcababcabc";
let patternExample = "abc"
console.log(nativePatternSearch(textExample, patternExample));