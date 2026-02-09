#include <bits/stdc++.h>
using namespace std;

class Node
{
    /* data */
    public:
    int data;
    Node *next;

    public:
    Node(int data1, Node *next1){
        data = data1;
        next = next1;
    }

    public:
    Node(int data1){
        data = data1;
        next = nullptr;
    }
};
Node* convertArr2LL(vector<int> &arr){
    Node* head = new Node(arr[0]);
    Node* mover = head;
    for(int i=1;i<arr.size();i++){
        Node* temp = new Node(arr[i]);
        mover -> next = temp;
        mover = temp;
    }
    return head;
}

void print(Node* head){
    while(head!=NULL){
        cout<<head->data<<" ";
        head = head->next;
    }
    cout<<endl;
}
Node* inserthead(Node* head, int val){
    Node* temp = new Node(val, head);
    return temp;
}

Node* inserttail(Node* head, int val){

    if(head == NULL){
        return new Node(val);
    }

    Node* temp = head;
    while(temp->next!=NULL){
        temp = temp->next;
    }
    Node* newNode = new Node(val);
    temp->next=newNode;

    return head;
}
Node* insterPosition(Node* head , int val, int pos){
    if(head == NULL){
        if (pos == 1){
            return new Node(val);
        }
        else{
            return head;
        }
    }
    if(pos==1){
        Node* newHead = new Node(val, head);
        return newHead;
    }
    int count = 0;
    Node* temp = head;
    while(temp!=NULL){
        count++;
        if(count==pos-1){
            Node* newNode = new Node(val, temp->next);
            temp->next = newNode;
            break;
        }
        temp = temp->next;
    }
    return head;
}

Node* insertBeforeValue(Node* head, int val, int el){
    if(head == NULL){
       return NULL;
    }
    if (head->data == val){
        return new Node(el, head);
    }
    Node* temp = head;
    while(temp->next!=NULL){

        if(temp->next->data == val){
            Node* newNode = new Node(el, temp->next);
            temp->next = newNode;
            break;
        }
        temp = temp->next;
    }
    return head;
}

int main(){
    vector<int> arr = {3, 4, 5, 2, 6, 1, 9, -1};
    Node* head = convertArr2LL(arr);
    // head = removehead(head);
    // removetail(head);
    // head = inserttail(head, 100);
    // head = insterPosition(head, 100, 10);
    head = insertBeforeValue(head, 6, 100);
    print(head);

}