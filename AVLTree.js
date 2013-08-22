function avlTree() {
    this.size = 0;
    this.root = null;
}

avlTree.prototype = {
    add: function(val) {
        this.size = this.size + 1;
        var node = {
            val: val,
            left: null,
            right: null,
            height: 0
        }
        
        if(this.root === null) {
            this.root = node;
        } else {
            addRecursive(this.root, node);
        }
    }
    
    addRecursive: function(node1, node2) {
        if(node1 === null) {
            return node2;
        }
        
        if(node1.val > node2.val) {
            node1.left = addRecursive(node1.left, node2);
        } else {
            node1.right = addRecursive(node1.right, node2);
        }
        
        updateHeight(node1);
        
        var balance = node1.right.height - node1.left.height;
        
        if(balance > 1 && node2.val < node1.left.val) {
            return rightRotate(node);
        }
        
        if(balance < -1 && node2.val > node1.right.val) {
            return leftRotate(node);
        }
        
        if(balance > 1 && node2.val > node1.left.val) {
            node1.left = leftRotate(node1.left);
            return rightRotate(node1);
        }
        
        if(balance < -1 && node2.val <node1.right.val) {
            node1.right = rightRotate(node1.right);
            return leftRotate(node1);
        }
        
        return node1;
    }
    
    /*
     * There is an annoying distinction between "nodes"
     * and values in this implementation
     */
    remove: function(node, val) {
        if(node === null) {
            return node;
        }
        
        if(val < node.val) {
            node.left = remove(node.left, val);
        } else if(val > node.val) {
            node.right = remove(node.right, val);
        } else {
            if(node.left === null || node.right === null) {
                var temp = (node.left === null) ? node.right : node.left;
                
                if(temp === null) {
                    temp = node;
                    node = null;
                } else {
                    node = temp;
                }
            } else {
                var temp = runt(temp);
                
                node.val = temp.val;
                
                node.right = remove(node.right, temp.val);
            }
        }
        
        if(node === null) {
            return node;
        }
        
        updateHeight(node);
        
        var balance = node.right.height - node.left.height;
        
        if(balance > 1) {
            if(node.left.right.height - node.left.left.height >= 0) {
                return rightRotate(node);
            } else {
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }
        }
        
        if(balance < -1) {
            if(node.right.right.height - node.right.left.height <= 0) {
                return leftRotate(node);
            } else {
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }
        }
        
        return node;
    }
    
    rightRotate: function(node1) {
        var node2 = node1.left;
        var temp = node2.right;
        
        node2.right = node1;
        node1.left = temp;
        
        /* So much reliance on garbage collection */
        
        updateHeight(node1);
        updateHeight(node2);
        
        return node2;
    }
    
    leftRotate: function(node1) {
        var node2 = node1.right;
        var temp = node2.left;
        
        node2.left = node1;
        node1.right = temp;
        
        /* So much reliance on garbage collection */
        
        updateHeight(node1);
        updateHeight(node2);
        
        return node2;
    }
    
    /*
     * This seems like a large amount of code
     * Perhaps I can reduce it
     */
    updateHeight: function(node) {
        if(node.left.height === null) {
            if(node.right.height === null) {
                node.height = 0;
            } else {
                node.height = node.right.height + 1;
            }
        } else if(node.right.height ==== null) {
            node.height = node.height.left + 1;
        } else {
            node.height = Math.max(node.left.height, node.right.height) + 1;
        }
    }
    
    runt: function(node) {
        while(node.left !== null) {
            node = node.left;
        }
        
        return node;
    }
    
}