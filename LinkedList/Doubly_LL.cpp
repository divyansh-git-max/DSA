#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* prev;

    public:
    Node(int data1, Node* next1, Node* prev1){
        data = data1;
        next = next1;
        prev = prev1;
    }
    Node(int data1){
        data = data1;
        next = nullptr;
        prev = nullptr;
    }
};

Node* convertArr2DLL(vector<int> &arr){
    Node* head  = new Node(arr[0]);
    Node* prevNode = head;
    for(int i=1;i<arr.size();i++){
        Node* temp = new Node(arr[i],nullptr,prevNode);
        prevNode->next = temp;
        prevNode = temp;
    }
    return head;
}


// delete head in DLL
Node* removehead(Node* head){
    if(head == NULL || head->next == NULL){
        return NULL;
    }
    Node* prev = head;
    head = head->next;
    head->prev = NULL;
    prev->next = NULL;

    delete prev;
    return head;
    
}


// delete tail in DLL
Node* removetail(Node* head){
    if(head==NULL || head->next==NULL) return NULL;
    
    Node* tail = head;
    while(tail->next!=NULL){
        tail = tail->next;
    }

    Node* prev = tail->prev;
    prev->next = NULL;
    tail->prev = NULL;
    delete tail;
    return head;

}


// delete the kth node of linked list
Node* deleteK(Node* head, int k){
    if(head ==  NULL || head->next == NULL) return NULL;

    Node* temp = head;
    int count = 0;
    while(temp!=NULL){
        count++;
        if(count == k){
            break;
        }
        temp = temp->next;
    }

    Node* prev = temp->prev;
    Node* front = temp->next;

    if(prev == NULL){
        head = removehead(head);
        return head;
    }
    if(front == NULL){
        head = removetail(head);
        return head;
    }
    if (prev == NULL && front == NULL){
        delete temp;
        return NULL;
    }

    prev->next = front;
    front->prev = prev;


    temp->next = NULL;
    temp->prev = NULL;


    delete temp;
    return head;

}

// delete the node from the doubly LL and node is not head
void deleteNode(Node* temp){
    Node* prev = temp->prev;
    Node* front = temp->next;

    if(front == NULL){
        prev->next = NULL;
        temp->prev = NULL;
        free(temp);
        return;
    }
    prev->next=front;
    front->prev=prev;
    temp->next=temp->prev=NULL;
    delete temp;
    return;

}

// insertion of before head
Node* insertBeforehead(Node* head, int val){
    Node* newHead = new Node(val, head, NULL);
    head->prev = newHead;
    return newHead;
}

// insertion after the head
Node* insertAfterHead(Node* head, int val){
    Node* newNode = new Node(val, head->next, head);
    head->next->prev = newNode;
    head->next = newNode;
    return head;

}   

// insertion before the tail
Node* insertBeforeTail(Node* head, int val){
    Node* tail = head;
    while (tail->next != NULL){
        tail=tail->next;
    }
    
    Node* newNode = new Node(val, tail, tail->prev);
    tail->prev->next = newNode;
    tail->prev = newNode;
    return head;
}

// insertion after the tail
Node* insertAferTail(Node* head, int val){
    Node* tail = head;
    while(tail->next!= NULL){
        tail=tail->next;
    }

    Node* newNode = new Node(val, NULL, tail);
    tail->next = newNode;
    return head;
}   

// inserting before the kth node of the LL
Node* insertBeforeValue(Node* head, int val, int el){
    if(el==1){
        return insertBeforehead(head, val);
    }
    Node* temp=head;
    int count = 0;
    while(temp!=NULL){
        count++;
        if(count==el){
            break;
        }
        temp=temp->next;
    }
    Node* newNode = new Node(val, temp, temp->prev);
    temp->prev->next = newNode;
    temp->prev = newNode;
    return head;

}

// insertion before the given Node(not equal Head)
void insertBeforeNode(Node* node, int val){
    Node* prevNode = node->prev;
    Node* newNode = new Node(val, node, prevNode);
    prevNode->next = newNode;
    node->prev = newNode;
}

void print(Node* head){
    while(head!=NULL){
        if(head->next!=NULL){
            cout<<head->data<<"->";
            head = head->next;
        }
        else{
            cout<<head->data<<"";
            head = head->next;
        }
    }

    cout<<endl;
}




int main(){
    vector<int> arr = {12,5,8,7};
    Node* head = convertArr2DLL(arr);
    // print(head);
    // head = removehead(head);
    print(head);
    // head = removetail(head);
    // print(head);
    // head = deleteK(head, 3);
    
    // deleteNode(head->next->next->next);
    cout<<"insertion before head"<<endl;
    head = insertBeforehead(head, 10);
    print(head);
    cout<<"insertion after head"<<endl;
    head = insertAfterHead(head, 20);
    print(head);
    cout<<"insertion before tail"<<endl;
    head = insertBeforeTail(head, 100);
    print(head);
    cout<<"insertion after tail"<<endl;
    head = insertAferTail(head, 200);
    print(head);

    cout<<"insertion before kth node"<<endl;
    head = insertBeforeValue(head, 300, 3);
    print(head);

return 0;
}