function countingSort(arr) {

    const frequency = new Array(100).fill(0);

    for (let num of arr) {
        frequency[num]++;
    }

    return frequency;
}
