class Solution(object):
    def subArr(self, arr,mid):
        sub = 1
        sum = 0
        for i in range(0,len(arr)):
            if(sum+arr[i]<=mid):
                sum+=arr[i]
            else:
                sub=sub+1
                sum=arr[i]
        return sub
    
    
    def splitArray(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        n = len(nums)
        
        if(k>n):
            return -1
        low = max(nums)
        high = sum(nums)

        while (low<=high):
            mid = (low+high)/2
            if(self.subArr(nums,mid)>k):
                low=mid+1
            else:
                high=mid-1
        return low