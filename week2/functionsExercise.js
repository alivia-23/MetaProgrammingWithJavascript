function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == match) {
            console.log('Found the', match, 'at ', i);
        } else {
            console.log('No' , match, 'found at ', i);
        }
    }
}

console.log(letterFinder('test', 't'));
