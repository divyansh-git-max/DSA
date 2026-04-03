class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        curr=head
        my_set=set()
        
        while curr!=None:
            if curr in my_set:
                return True
            else:
                my_set.add(curr)
                curr=curr.next
        return False 