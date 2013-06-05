var list = new DoubleLinkedList();

function update() {
	var holder = document.getElementById('elements');
	holder.innerHTML = " ";
	
	var i = 0;
	for(i=0; i< list.len; i++) {
		holder.innerHTML = holder.innerHTML + "   " + list.get(i);
	}
}

function btnPushFront() {
	list.pushFront(document.getElementById('val').value);
	update();
}

function btnPushBack() {
	list.pushBack(document.getElementById('val').value);
	update();
}
function btnAdd() {
	list.add(document.getElementById('val').value);
	update();
}

function btnInsert() {
	list.insert(document.getElementById('index').value, document.getElementById('val').value);
	update();
}

function btnGet() {
	alert(list.get(document.getElementById('index').value));
	update();
}

function btnPopFront() {
	alert(list.popFront());
	update();
}

function btnPopBack() {
	alert(list.popBack());
	update();
}

function btnRemove() {
	alert(list.remove(document.getElementById('index').value));
	update();
}
