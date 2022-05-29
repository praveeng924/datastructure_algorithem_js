class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head =null;
        this.tail =null;
        this.length=0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
       let current = this.head;
       let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail =null;
        }  
        return console.log(current);
    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0){
            this.tail = null;
        }
        return console.log(currentHead);
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return console.log(this);
    }
    get(index){
        if(index < 0 || index >= this.lenght) return null;
        let current = this.head;
        let count =0;
        while(index !== count){
            current = current.next;
            count ++;
        }
        return current;
    }

    set(index,val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(val,index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
    }

    remove(index){
        if(index < 0 || index >=this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var prevNode = this.get(index - 1);
        var remove = prevNode.next;
        var aheadnode = remove.next;
        prevNode.next = aheadnode;
        this.length --;
        return console.log(remove);
    }

    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return console.log(arr);
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var prev = null;
        for(let i = 0;i<this.length;i++){
            var next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
// list.push(12);
// list.push(14);
// list.push(15);
// console.log(list);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list);
list.push("HI");
list.push("HOW");
list.push("ARE");
list.push("YOU");
list.reverse();
list.print();
// list.shift();
// list.shift();
// list.shift();
// list.unshift("SUPER");
// list.unshift("MAN");
// list.get(1);
// list.set(1,"KING");
// list.insert("SINGH",3);
// list.insert("ROCK",2);
// list.get(3);
// list.remove(0);
// list.remove(1);
// console.log(list);
