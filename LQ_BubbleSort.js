// Bubble Sort  -- > Swap each two number multiple time to sort the high on right
// [7, 3, 7, 4, 9, 1, 3]
// 7374913 --> 3747139 --> 3471379 -- > 3413779 --> 3134779 -- > 1334779


function bubbleSort(array) {
    const length = array.length;
    for (let i=0; i< length; i++) {
        for (let j=0; j< length; j++) {
            let temp = array[j];
            if (array[j] > array[j+1]) {
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

bubbleSort([1, 7, 3, 7, 4, 10, 9, 1, 3])