var parser = function() {

    cases = { "Á": "A", "É": "E", "Í": "I", "Ó": "O", "Ú": "U" };
    articles = { "EL": "", "LA": "", "LO": "" };

    var sanitize = function(sentence) {
        var result = sentence;
        for(var item in cases) {
            result = result.replace(item, cases[item]);
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
            result[i] = sanitize(result[i]);
            result[i] = singularize(result[i]);
        };

        return result;
    }

    return { parseString: parseString };

}();
