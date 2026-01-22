package searching_and_sorting;

public class Find_min_in_rotated_arr_2 {

    int min = Integer.MAX_VALUE;
    public int findMin(int[] nums) {
        int low = 0;
        int high = nums.length-1;
        while(low<=high){
            if (nums[low]==nums[high] && low!=high){
                low=low+1;
                continue;
            }
            int mid = (low+high)/2;
            if(nums[mid]<=nums[high]){
                if (nums[mid]<min){
                    min=nums[mid];
                }
                high=mid-1;
            }else{

                if(nums[low]<min){
                    min=nums[low];
                }
                low=mid+1;
            }
        }
        return min;
    }
}