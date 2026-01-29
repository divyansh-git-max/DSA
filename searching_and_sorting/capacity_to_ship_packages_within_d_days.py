
# https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

class Solution(object):
    def check(self, arr, m,d):
        day=1
        cW=0
        for i in range(len(arr)):
            if cW<m:
                cW+=arr[i]
                if(cW>m):
                    day+=1
                    cW=arr[i]
            else:
                day+=1
                cW=arr[i]
        if day<=d:
            return True
        return False
    def shipWithinDays(self, weights, days):
        """
        :type weights: List[int]
        :type days: int
        :rtype: int
        """
        low=max(weights)
        high=sum(weights)
        while low<=high:
            mid=(low+high)//2
            if self.check(weights,mid,days):
                high=mid-1
            else:
                low=mid+1
        return low
        