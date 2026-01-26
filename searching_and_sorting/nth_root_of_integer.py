# find the nth root of integer using linear search and binary search


n=int(input())
x=int(input())

low=1
high=x

# using linear search


def root(n,m):
    return n**m


def nroot(n,x):
    for i in range(1,x+1):
        if root(i,n) ==  x:
            return i
        elif root(i,n) > x:
            break
    return -1




# binary search


def root(mid: int, n: int, m:int) -> int:
    ans=1
    for i in range(1,n+1):
        ans=ans*mid
        if (ans>m):
            return 2
    if ans==m:
        return 1
    return 0

def NthRoot(n: int, m: int) -> int:
    low=0
    high=m
    while low<=high:
        mid=(low+high)//2
        midN = root(mid,n,m)

        if midN == 1:
            return mid
        
        elif midN == 0:
            low=mid+1
        else:
            high=mid-1
    return -1 