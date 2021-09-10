class Quick {
    simpleSort(data) {
       // if only one element exists
       if(data.length < 2) {
          return data;
       }
         // first data point is the pivot
       const pivot = data[0];
       // initialize low and high values
       const low = [];
       const high = [];
       // compare against pivot and add to
       // low or high values
       for(var i = 1; i < data.length; i++) {
          // interchange condition to reverse sorting
          if(data[i].pages > pivot.pages) {
             low.push(data[i]);
          } else {
             high.push(data[i]);
          }
}
       // recursively sort and concat the
       // low values, pivot and high values
       return this.simpleSort(low)
          .concat(pivot, this.simpleSort(high));
} }
 module.exports = Quick;