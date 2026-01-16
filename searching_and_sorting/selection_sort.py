arr: list[int] = [7, 1, 5, 4, 3, 2];

def selectionSort(arr):
    n: int = len(arr)
    for i in range(n-1):
        minIndex = i
        for j in range(i+1,n):
            if arr[j] < arr[minIndex]:
                minIndex = j
        if minIndex != i:
            arr[i], arr[minIndex] = arr[minIndex], arr[i]

    return arr

print(selectionSort(arr))
