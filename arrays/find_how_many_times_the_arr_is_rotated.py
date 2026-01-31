arr = [4, 5, 6, 7, 0, 1, 2, 3]


def findKRotation(arr):
    ans=max(arr)
    low=0
    high=len(arr)-1
    while low<=high:
        mid=(low+high)//2
        if arr[low]<=arr[high]:
            if(arr[low]<ans):
                ans=arr[low]
            return ans
        if arr[low]<=arr[mid]:
            if arr[mid]<ans:
                ans=arr[mid]
            low=mid+1
        else:
            if arr[mid]<ans:
                ans=arr[mid]
            high=mid-1
    return ans


print(findKRotation(arr))