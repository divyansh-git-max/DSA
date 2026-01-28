#https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets


class Solution(object):
    def counter(self,arr, mid , k):
        count=0
        b=0
        for i in range(len(arr)):
            if arr[i]<=mid:
                count+=1
                if count==k:
                    b+=1
                    count=0
            else:
                count=0
        return b
    def minDays(self, bloomDay, m, k):
        """
        :type bloomDay: List[int]
        :type m: int
        :type k: int
        :rtype: int
        """
        n=len(bloomDay)
        if m*k > n:
            return -1
        
        low=min(bloomDay)
        high=max(bloomDay)

        while low<=high:
            mid=(low+high)//2
            if (self.counter(bloomDay, mid , k)) >= m:
                high=mid-1
            else:
                low=mid+1
        return low