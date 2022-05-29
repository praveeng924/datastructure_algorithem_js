class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(this.root == null){
            this.root = newNode;
        } else{
            let current = this.root;
            while (true) {
                if(val == current.val) return undefined;
                if (val < current.val) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left;
                    }
                } else if(val >current.val){
                    if(current.right == null){
                        current.right = newNode;
                        return this;
                    } else{
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val){
        if(this.root == null) return false;
        let current = this.root;
        let found = false;
        while(current && !found ){
            if(val <current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else{
                return console.log(true);
            }
        }
        return console.log(false);
    }

    BFS(){
        var node = this.root;
        let queue = [];
        let data = [];
        queue.push(node);
        while(queue.length > 0){
            node = queue.shift();
            data.push(node.val);
           if(node.left) { queue.push(node.left)};
           if(node.right) { queue.push(node.right)};
        }
        return console.log(data);
    }

    DFSPreorder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return console.log(data);
    }

    DFSPostorder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return console.log(data);
    }

    DFSInorder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
            
        }
        traverse(current);
        return console.log(data);
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(11);

//    10
// 5 6    11
//tree.BFS();
tree.DFSPreorder();
tree.DFSPostorder();
tree.DFSInorder();
// tree.find(5);
// tree.find(77);