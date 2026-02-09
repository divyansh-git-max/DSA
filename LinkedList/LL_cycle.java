import java.util.*;
class Node{
    int data;
    Node next;
    Node(int data){
        this.data=data;
        this.next=null;
    }
    Node(int data,Node next){
        this.data=data;
        this.next=next;
    }
}

public class LL_cycle{
    private static Node convertArr2LL(int[] arr){
        Node head = new Node(arr[0]);
        Node mover = head;
        for(int i=1;i<arr.length;i++){
            Node temp = new Node(arr[i]);
            mover.next = temp;
            mover = temp;
        }
        return head;
    
    }
    private static int lengthOfLL(Node head){
        int count = 0;
        Node temp = head;
        while(temp!=null){
            count++;
            temp = temp.next;
        }
        return count;
    }
    private static boolean checkIfPresent(Node head, int val){
        Node temp = head;
        while(temp!=null){
            if(temp.data == val){
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        Node y = convertArr2LL(arr);
        System.out.println(y.data);
        System.out.println(lengthOfLL(y));
        System.out.println(checkIfPresent(y,10));
    }
}