package searching_and_sorting;

public class koko_eating_banana {
    public static double find(int[] arr, int m){
        double count = 0;
        for(int i=0;i<arr.length; i++){
            count = count + Math.ceil((double)arr[i]/m);
        }
        return count;
    } 
    public static int minimumRateToEatBananas(int []v, int h) {
        // Write Your Code Here
        int low=1;
        int high = 0;
        
        for(int pile : v) {
            high = Math.max(high, pile);
        }
        int ans=high;
        while (low<=high){
            int mid=(low+high)/2;
            if(find(v,mid)<=h){
                ans=mid;
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        return ans;
    }
}

