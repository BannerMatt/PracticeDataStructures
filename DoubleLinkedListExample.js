var tree = new avlTree();

function update() {
	var holder = document.getElementById('elements');
	holder.innerHTML = "";
	
	var h = tree.root.height;
    var i;
    var j;
	for(i=0; i< h; i++) {
        for(j=0; j<h; j++) {
            holder.innerHTML = holder.innerHTML + "  ";
        }
        holder.innerHTML = holder.innerHTML +" \n";
		holder.innerHTML = holder.innerHTML + "  ";
	}
}

function btnAdd() {
	list.add(document.getElementById('val').value);
	update();
}

function btnGet() {
	alert(list.get(document.getElementById('index').value));
	update();
}

function btnRemove() {
	alert(list.remove(document.getElementById('index').value));
	update();
}
