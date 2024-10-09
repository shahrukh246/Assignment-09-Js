let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

function countTypes(array) {
    let counts = {
        numbers: 0,
        strings: 0,
        booleans: 0
    };

    function helper(arr) {
        for (let element of arr) {
            if (Array.isArray(element)) {
               
                helper(element);
            } else if (typeof element === 'number') {
                counts.numbers++;
            } else if (typeof element === 'string') {
                counts.strings++;
            } else if (typeof element === 'boolean') {
                counts.booleans++;
            }
        }
    }

    helper(array);
    return counts;
}

let result = countTypes(arr);
console.log(`Numbers: ${result.numbers}`);
console.log(`Strings: ${result.strings}`);
console.log(`Booleans: ${result.booleans}`);
