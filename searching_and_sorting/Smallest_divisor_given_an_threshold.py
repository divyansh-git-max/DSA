# https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/


class Solution(object):
    def counting(self,nums,m):
        t=0
        for i in range(len(nums)):
            t+=(nums[i]+m-1)//m
        return t
    def smallestDivisor(self, nums, threshold):
        """
        :type nums: List[int]
        :type threshold: int
        :rtype: int
        """
        low=1
        high=max(nums)
        ans=0
        while low<=high:
            mid=(low+high)//2
            if self.counting(nums,mid)<=threshold:
                ans=mid
                high=mid-1
            else:
                low=mid+1
        return ans
    
# time complexity O(Nlog(Max(Nums)−Min(Nums)))
# space complexity O(1)