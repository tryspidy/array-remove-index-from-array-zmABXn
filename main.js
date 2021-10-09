const array = [2, 5, 9];

//Get index of the number 5
const index = array.indexOf(5);
//Only splice if the index exists
if (index > -1) {
  //Splice the array
  array.splice(index, 1);
}

//array = [2, 9]
console.log(array); 