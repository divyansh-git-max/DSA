package searching_and_sorting;

public class first_and_last {
    
        public static int find(int[] nums, int target, boolean isFirst){
            int low = 0;
            int high = nums.length - 1;
            int ans = -1;
            while(low<=high){
                int mid = (low+high)/2;
                if(nums[mid] == target){
                    ans = mid;
                    if (isFirst){
                        high = mid-1;
                    }else{
                        low = mid+1;
                    }
                }else if(nums[mid]<target){
                    low=mid+1;
                }else{
                    high=mid-1;
                }
            }
            return ans;
        }
    
        public int[] searchRange(int[] nums, int target) {
            int first = find(nums, target, true);
            int second = find(nums, target, false);
            int[] res = {first, second};
            return res;
        }
    }
