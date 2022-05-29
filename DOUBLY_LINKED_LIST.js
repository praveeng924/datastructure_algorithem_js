class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
         let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length --;
        return console.log(poppedNode);
    }
    shift(){
        if(this.length === 0) return undefined;
        let poppedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = poppedNode.next;
            this.head.prev = null;
            poppedNode.next = null;
        }
        this.length --;
        return console.log(poppedNode);
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return console.log(this);
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count,current;
        if(index < this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count ++;
            }
        }else{
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count --
            }
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.value = val;
            return true;
        }
        return false;
    }

    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index == 0) return !!this.unshift(val);
        if(index == this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        return true;
    }
    remove(index){
        if(index < 0 || index >=this.length) return false;
        if(index == 0) return !!this.shift();
        if(index == this.length - 1) return !!this.pop();
        let removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length --;
        return console.log(removeNode);
    }

    reverse(){
        if(this.length == 0) return null;
        let current = this.head;
        while(current){
            let temp = current;
            current = current.next;
            temp.next = temp.prev;
            temp.prev = current;
        }
        let temp1 = this.head;
        this.head = this.tail;
        this.tail = temp1;
        return console.log(this);
        

    }
}

const list = new DoublyLinkedList();
list.push("hello");
list.push("world");
list.push("whole");
list.reverse();
// list.push("everyone");
// list.remove(2);

//list.insert(1,"beginning");
// list.pop();
// list.push("world");
// list.shift();
// list.unshift("KING");
//list.get(1);
//list.get(0);
//list.set(0,"King");
//console.log(list);

//list.push("testing");