// Selection Sort  -- > Look at the smallest item in the list and bring it to the top position.
// [7, 3, 7, 4, 9, 1, 3]
// 7374913 --> 1737493 --> 1373749 -->1337749 --> 1334779


function selectionSort(array) {
    const length = array.length;
    for (let i=0; i< length; i++) {
        var minIndex = i;
        let temp = array[i]
        for (let j=i+1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

selectionSort([1, 7, 3, 7, 4, 10, 9, 1, 3])