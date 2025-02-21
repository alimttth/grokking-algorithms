const list: number[] = [];
for (let i = 1; i <= 100; i++) {
    list.push(i);
}

function binarySearch(items: number[], item: number): number {
    let junior: number = 0;
    let senior: number = items.length - 1;
    while (junior <= senior) {
        let midlevel: number = Math.floor((junior + senior) / 2);
        let guess: number = items[midlevel];
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

const result: number = binarySearch(list, 12);
console.log(result);