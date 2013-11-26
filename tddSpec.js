chai.should(); // invoking this function creates a "should" object on every object
context = describe;

function singularize (word) {
    if (isPluralWord(word)) {
        word = word.slice(0, -1);
    }

    return word;
}

function isPluralWord(word) {
    return word.charAt(word.length -1) == 'S';
}

function parseString(string){
    var result = string.toUpperCase();
    result = singularize(result);
    return [result];
}

describe("String parser", function(){
    it("converts lowercase string to uppercase", function(){
        var result = parseString("desarrollador");
        expect(['DESARROLLADOR']).toEqual(result);
    });

    it("converts lowercase string to uppercase triangulating", function(){
        var result = parseString('informatico');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("slices the last 's' character from a word", function(){
        var result = parseString('INFORMATICOS');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("slices any 'tilde' character", function(){
        var result = parseString('INFORMÁTICO');
        expect(['INFORMATICO']).toEqual(result);
    });

});

