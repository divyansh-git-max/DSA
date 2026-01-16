package searching_and_sorting;

import java.util.Arrays;

public class bubble_sort {
    int arr[] = {5, 0, 1, 2, 7, 9, 3, 4};
    
    public static int[] bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean isSorted = true;
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSorted = false;
                }
            }
            if (isSorted) {
                break;
            }
        }
        return arr;
    }
    
    public static void main(String[] args) {
        bubble_sort bs = new bubble_sort();
        int[] result = bubbleSort(bs.arr);
        System.out.println(Arrays.toString(result));
    }
}
