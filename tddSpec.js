chai.should(); // invoking this function creates a "should" object on every object
context = describe;

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

