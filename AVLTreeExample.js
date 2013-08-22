var tree = new avlTree();

function update(node, level) {
	var holder = document.getElementById('elements');
	holder.innerHTML = "";
    
    if(
    
    var j;
    for(j = 0; j< i; j++) {
        holder.innerHTML = holder.innerHTML + "    "
    }
    holder.innerHTML = "+-- " + node.val + "\n";
}

function updateRec(node, height, text) {

}

function btnAdd() {
	list.add(document.getElementById('val').value);
	update(tree.root);
}

function btnGet() {
	alert(list.get(document.getElementById('index').value));
	update(tree.root);
}

function btnRemove() {
	alert(list.remove(document.getElementById('index').value));
	update(tree.root);
}