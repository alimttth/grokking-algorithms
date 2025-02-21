const list = [];
for (let i = 1; i <= 100; i++) {
    list.push(i);
}

function binarySearch(items, item) {
    let junior = 0; 
    let senior = items.length - 1; 

    while (junior <= senior) {
        let midlevel = Math.floor((junior + senior) / 2);
        let guess = items[midlevel];
        if (item === guess) {
            return midlevel;
        } else if (guess > item) {
            senior = midlevel - 1;
        } else {
            junior = midlevel + 1;
        }
    }

    return -1;
}

const result = binarySearch(list, 12);
console.log(result);