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

    articles = {
        "EL": "",
        "LA": ""
    };

    var sanitize = function(sentence, set) {
        var result = sentence;
        for(var item in set) {
            result = result.replace(item, set[item]);
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

    var truncateArticles = function(element, index, array){
            for (var item in articles) {
                if (element == item) {
                    array.splice(index, 1);
                }
            }
        }

    var parseString = function(string){
        var result = string.toUpperCase();
        result = result.split(" ");
        result.forEach(truncateArticles);

        for (var i = 0; i < result.length; i++) {
            result[i] = sanitize(result[i], cases);
            result[i] = singularize(result[i]);
        };

        return result;
    }

    return {
        parseString: parseString
    };

}();


describe("String parser", function(){

    function parse(input) {
        var testParser = parser;
        return parser.parseString(input)
    }

    it("converts lowercase string to uppercase", function(){
        var result = parse("desarrollador");
        expect(['DESARROLLADOR']).toEqual(result);
    });

    it("converts lowercase string to uppercase triangulating", function(){
        var result = parse('informatico');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("slices the last 's' character from a word", function(){
        var result = parse('INFORMATICOS');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("replaces any 'tilde' character", function(){
        var result = parse('INFORMÁTICO');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("replaces any 'tilde' character triangulating" ,function(){
        var result = parse('CÓDIGO');
        expect(['CODIGO']).toEqual(result);
    });

    it("replaces any 'tilde' character triangulating" ,function(){
        var result = parse('BARDAJÍ');
        expect(['BARDAJI']).toEqual(result);
    });

    it("removes articles", function(){
        var result = parse('EL INFORMATICO');
        expect(['INFORMATICO']).toEqual(result);
    });

    it("removes articles triangulating", function(){
        var result = parse('LA INFORMATICA');
        expect(['INFORMATICA']).toEqual(result);
    });

    describe("when receiving more than one word", function(){
        it("puts all words as elements in an array", function(){
            var result = parse('INFORMATICO PROGRAMADOR');
            expect(['INFORMATICO', 'PROGRAMADOR']).toEqual(result);
        });

        it("puts all words as elements of an array sanitized", function(){
            var result = parse('INFORMATICOS PROGRAMADOR');
            expect(['INFORMATICO', 'PROGRAMADOR']).toEqual(result);
        });
    });

});

