arr = [8,4,5,6,9,1,3,6]

def merge(left,right):
    res=[]
    i=0
    j=0
    while(i<len(left) and j<len(right)):
        if(left[i]<right[j]):
            res.append(left[i])
            i+=1
        else:
            res.append(right[j])
            j+=1

    res.extend(left[i:])
    res.extend(right[j:])
    return res 

def mergeSort(arr):
    if len(arr) < 2:
        return arr

    mid = len(arr) // 2
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])

    return merge(left, right) # divide and merge

print(mergeSort(arr))