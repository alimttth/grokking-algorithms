const list_number: number[] = [1, 10, 12, 16, 4, 6];

function findSmallest(arr: number[]): number {
    let smallIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[smallIndex]) {
            smallIndex = i;
        }
    }
    return smallIndex;
}

function selectionSort(arr: number[]): number[] {
    const newArr: number[] = [];
    const copyArr = [...arr];

    while (copyArr.length > 0) {
        const smallestIndex = findSmallest(copyArr);
        newArr.push(copyArr[smallestIndex]);
        copyArr.splice(smallestIndex, 1);
    }

    return newArr;
}

console.log(selectionSort(list_number)); 
