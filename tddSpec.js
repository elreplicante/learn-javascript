chai.should(); // invoking this function creates a "should" object on every object
context = describe;

var parser = function() {

     cases = {
            "Á": "A",
            "É": "E",
            "Í": "I",
            "Ó": "O",
            "Ú": "U"
        };

    var replaceTildes = function (word){
        var result = word;
        for (var letter in cases){
            result = result.replace(letter, cases[letter]);
        }

        return result;
    }

    var singularize = function(word) {
        if (isPluralWord(word)) {
            word = word.slice(0, -1);
        }

        return word;
    }

    var isPluralWord = function(word) {
        return word.charAt(word.length -1) == 'S';
    }

    var parseString = function(string){
        var result = string.toUpperCase();
        result = replaceTildes(result);
        result = result.replace("EL ", "");
        result = singularize(result);
        
        return [result];
    }


    return {
        parseString: parseString
    };

}();


describe("String parser", function(){

    beforeEach(function(){
    var testParser = parser;

    });

    it("converts lowercase string to uppercase", function(){
        var result = parser.parseString("desarrollador");
        expect(['DESARROLLADOR']).toEqual(result);
    });

    it("converts lowercase string to uppercase triangulating", function(){
        var result = parser.parseString('informatico');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("slices the last 's' character from a word", function(){
        var result = parser.parseString('INFORMATICOS');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("replaces any 'tilde' character", function(){
        var result = parser.parseString('INFORMÁTICO');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("replaces any 'tilde' character triangulating" ,function(){
        var result = parser.parseString('CÓDIGO');
        expect(['CODIGO']).toEqual(result);
    });

    it("replaces any 'tilde' character triangulating" ,function(){
        var result = parser.parseString('BARDAJÍ');
        expect(['BARDAJI']).toEqual(result);
    });

    it("removes articles", function(){
        var result = parser.parseString('EL INFORMATICO');
        expect(['INFORMATICO']).toEqual(result);
    });

});

