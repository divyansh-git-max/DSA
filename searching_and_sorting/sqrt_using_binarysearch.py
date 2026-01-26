# https://leetcode.com/problems/sqrtx/

class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        low=0
        high=x
        if x==1:
            return 1
        if x==0:
            return 0
        while low<=high:
            mid=(low+high)//2
            if mid>(x/mid):
                high=mid-1
            else:
                low=mid+1
        return high