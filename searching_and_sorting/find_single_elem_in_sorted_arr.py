# https://leetcode.com/problems/single-element-in-a-sorted-array/


arr = [1,1,2,2,3,3,4,5,5,6,6]

n=len(arr)

def find(nums):

    n=len(nums)
    if len(nums)==1:
        return nums[0]

    if nums[0]!=nums[1]:
        return nums[0]
    
    if nums[n-1]!=nums[n-2]:
        return nums[n-1]
    
    low=1
    high=len(nums)-2

    while low<=high:
        mid=(low+high)//2

        if nums[mid]==nums[mid+1]:
            if mid%2!=0:
                high=mid-1
            else:
                low=mid+1
        elif nums[mid-1]==nums[mid]:
            if mid%2!=0:
                low=mid+1
            else:
                high=mid-1
        else:
            return nums[mid]




print(find(arr))