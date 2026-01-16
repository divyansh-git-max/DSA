
arr = [5, 0, 1, 2, 7, 9, 3, 4];



def bubbleSort(arr):
    n = len(arr);
    for i in range(n-1):
        isSorted = True;
        for j in range(n-1-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j];
                isSorted = False;
        if isSorted:
            break;
    return arr



print(bubbleSort(arr));