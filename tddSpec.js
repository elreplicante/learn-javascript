chai.should(); // invoking this function creates a "should" object on every object
context = describe;

describe("String parser", function(){
    it("converts lowercase string to uppercase", function(){
        var result = parseString("desarrollador");
        expect(['DESARROLADOR']).toEqual(result);
    });
});

