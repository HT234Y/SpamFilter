

/* var filter = (arr, condition) => {
	var result = [];
	for (let i = 0; i < arr.length; i++) {	
		if (condition(arr[i])) {
			result.push(arr[i])
	    };
    }
    return result;
}
var assertEquals = (expected, actual) => {
    if (expected != actual)
        throw `Expected ${expected}, but got ${actual}`;
};
var assertArraysEquals = (ar1, ar2) => {
    assertEquals(ar1.length, ar2.length);
	for (i = 0; i < ar1.length; i++) { 
		assertEquals(ar1[i], ar2[i]);
    }
}
var a = filter([1,2,3,4,5,6,7,8,9,0], (e) => e > 4)
console.log(a);

assertArraysEquals(a, [5,6,7,8,9]);
*/

var map = (arr, transformation) => {
	var result= [];
	for (let i = 0; i < arr.length; i++) {
        result.push(transformation(arr[i]));
	}
    return result;
};

console.log(map([1,2,3], (e)=>''+e+1));
// reduce
let reduce = (arr, reducer, initialValue) => {
	
	let result = initialValue;

	for (let i = 0; i < arr.length; i++) {
	
		result = reducer(arr[i], result);

	}

	return result;

}
var map1 = (arr, transformation) => {
    //reduce

    return reduce(arr, (el, acc) => {
        acc.push(transformation(el)); 
        return acc;
    }, []);
}
console.log(map1([1,2,3], (e)=>e+1));
console.log(reduce([1,2,3,4], (el, acc) => '>'+el + acc, 0));
