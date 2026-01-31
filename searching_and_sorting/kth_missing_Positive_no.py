# https://leetcode.com/problems/kth-missing-positive-number/description/?envType=problem-list-v2&envId=binary-search&

# using Linear search
# brute force

n = [2,3,4,7,11]
x = int(input())
count=0

def LSFind(n,x,count):
    for i in range(1,len(n)+x):
        if i not in n:
            count+=1
            if count==x:
                return i
            
print(LSFind(n,x,count))



# binary search
def findKthPositive(arr, k):
    """
    :type arr: List[int]
    :type k: int
    :rtype: int
    """
    low=0
    high=len(arr)-1
    while low<=high:
        mid=(low+high)//2
        m=arr[mid]-(mid+1)
        if(m<k):
            low=mid+1
        else:
            high=mid-1
    return low+k # or high + 1 + k
