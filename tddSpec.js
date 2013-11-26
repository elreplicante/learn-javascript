chai.should(); // invoking this function creates a "should" object on every object
context = describe;

function parseString(string){
    var result = string.toUpperCase();
    return [result];
}

describe("String parser", function(){
    it("converts lowercase string to uppercase", function(){
        var result = parseString("desarrollador");
        expect(['DESARROLLADOR']).toEqual(result);
    });

    it("converts lowercase string to uppercase triangulating", function(){
        var result = parseString('informatico')
        expect(['INFORMATICO']).toEqual(result)
    });

});

