class Insertion {
    sort(data) {
        for (var i = 1; i< data.length; ++i) {
            var current = data[i];
            var j = i-1;

            while (j >= 0 && data[j].pages < current.pages) {
                data[j + 1] = data[j];
                j = j - 1; 
            }

            data[j+1] = current;
        }
        return data;
    }
}

module.exports = Insertion;