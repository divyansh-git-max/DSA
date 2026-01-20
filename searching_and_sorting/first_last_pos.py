class Solution(object):
    def searchRange(self, nums, target):
        def firstElem(nums,target):
            start,end=0,len(nums)
            res = -1
            while start < end:
                mid=(start+end)//2
                if nums[mid]==target:
                    res=mid
                    end=mid
                elif nums[mid]<target:
                    start=mid+1
                elif nums[mid]>target:
                    end=mid
            return res
    
        def lastElem(nums,target):
            start,end=0,len(nums)
            res=-1
            while start<end:
                mid=(start+end)//2
                if nums[mid]==target:
                    res=mid
                    start=mid+1
                elif nums[mid]<target:
                    start=mid+1
                elif nums[mid]>target:
                    end=mid
            return res
            
        return [firstElem(nums,target),lastElem(nums,target)]
    
        