function diagonalDifference(arr) {
    let [ a_sum, b_sum, a_index, b_index ] = [0, 0, 0, arr.length - 1]

    while (a_index < arr.length && b_index >= 0) {
        a_sum += arr[a_index][a_index]; // Access primary diagonal
        b_sum += arr[a_index][b_index]; // Access secondary diagonal

        console.log(`Current A Sum: ${a_sum}`);
        console.log(`Current B Sum: ${b_sum}`);

        a_index++;
        b_index--;
    }

    return Math.abs(a_sum - b_sum);
}
