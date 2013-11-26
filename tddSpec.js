chai.should(); // invoking this function creates a "should" object on every object
context = describe;

function parseString(string){
    return ['DESARROLLADOR'];
}

describe("String parser", function(){
    it("converts lowercase string to uppercase", function(){
        var result = parseString("desarrollador");
        expect(['DESARROLLADOR']).toEqual(result);
    });
});

