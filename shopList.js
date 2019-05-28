//Shopping List app

/*Some ideas for the app:
	- make a pane that lists frequently bought items that you can add to the shoppingList array by click
		* Use the properties I set up under frequentItems variable as drop downs that trigger the items
	- clicking on an item on the list that displays will cross it out or remove it all together
	- sort button for the list
	- add a download button to download the list
	- add a print button that will print out the list
	- ability to edit the list once it has been generated (do this last)
*/

var shoppingList = [];
var frequentItems = {
	'produce': ['Green Pepper', 'Sweet Potato', 'Yellow Onion', 'Mushrooms', 'Avocado'],
	'condiments': ['Barbeque Sauce', 'Ketchup', 'Ranch', 'Mayo'],
	'snacks': ['Hummus', 'Cottage Cheese', 'Yoghurt', 'Lara Bars', 'Chips'],
	'cold': ['Frozen Pizza', 'Bag of Fries', 'Ice Cream', 'Shredded Cheese', 'Cream Cheese', 'Sour Cream'],
	'meat': ['Chicken', 'Beef', 'Bacon', 'Eggs']
};



function startList() {

	var stopAdd = 0;

	while (stopAdd < 1) {

		switch (addFoodItem = prompt('Add an Item and its quantity:')) {
			case 'quit':
				stopAdd++;
				break;
			default:
				shoppingList.push(addFoodItem);
				break;
		}
	}

}

function freqItem(item) {

	switch (item) {
		case 'Green Pepper':
			var qty = prompt('How many?');
			shoppingList.push('Green Pepper ' + qty);
			break;
		case 'Sweet Potato':
			var qty = prompt('How many?');
			shoppingList.push('Sweet Potato ' + qty);
			break;
		case 'Yellow Onion':
			var qty = prompt('How many?');
			shoppingList.push('Yellow Onion ' + qty);
			break;
		case 'Mushrooms':
			var qty = prompt('How many? (8oz packs)');
			shoppingList.push('Mushrooms ' + qty + 'pack(s)');
			break;
		case 'Avocado':
			var qty = prompt('How many?');
			shoppingList.push('Avocado ' + qty);
			break;
		case 'Barbeque Sauce':
			var qty = prompt('How many?');
			shoppingList.push('Barbeque Sauce ' + qty);
			break;
		case 'Ketchup':
			var qty = prompt('How many?');
			shoppingList.push('Ketchup ' + qty);
			break;
		case 'Ranch':
			var qty = prompt('How many?');
			shoppingList.push('Ranch ' + qty);
			break;
		case 'Mayo':
			var qty = prompt('How many?');
			shoppingList.push('Mayo ' + qty);
			break;
		case 'Hummus':
			var qty = prompt('How many?');
			shoppingList.push('Hummus ' + qty);
			break;
		case 'Cottage Cheese':
			var qty = prompt('How many?');
			shoppingList.push('Cottage Cheese ' + qty);
			break;
		case 'Yoghurt':
			var qty = prompt('How many? (packs of 4)');
			shoppingList.push('Yoghurt ' + qty + 'pack(s)');
			break;
		case 'Lara Bars':
			var qty = prompt('How many?');
			shoppingList.push('Lara Bars ' + qty);
			break;
		case 'Chips':
			var qty = prompt('How many?');
			shoppingList.push('Chips ' + qty);
			break;
		case 'Frozen Pizza':
			var qty = prompt('How many?');
			shoppingList.push('Frozen Pizza ' + qty);
			break;
		case 'Bag of Fries':
			var qty = prompt('How many?');
			shoppingList.push('Bag of Fries ' + qty + 'bag(s)');
			break;
		case 'Ice Cream':
			var qty = prompt('How many?');
			shoppingList.push('Ice Cream ' + qty);
			break;
		case 'Shredded Cheese':
			var qty = prompt('How many?');
			shoppingList.push('Shredded Cheese ' + qty);
			break;
		case 'Cream Cheese':
			var qty = prompt('How many?');
			shoppingList.push('Cream Cheese ' + qty);
			break;
		case 'Sour Cream':
			var qty = prompt('How many?');
			shoppingList.push('Sour Cream ' + qty);
			break;
		case 'Chicken':
			var qty = prompt('How many pounds?');
			shoppingList.push('Chicken ' + qty + 'lbs');
			break;
		case 'Beef':
			var qty = prompt('How many pounds?');
			shoppingList.push('Beef ' + qty + 'lbs');
			break;
		case 'Bacon':
			var qty = prompt('How many packs?');
			shoppingList.push('Bacon ' + qty + 'pack(s)');
			break;
		case 'Eggs':
			var qty = prompt('How many dozens?');
			shoppingList.push('Eggs ' + qty + 'pack(s)');
			break;
	}

}

function showList() {
	document.getElementById('testButton7').innerHTML = '<h2>' + '<strong>Food List</strong>' + '</h2>';

	for (var j = 0; j < shoppingList.length; j++) {
		document.getElementById('testButton8').innerHTML += '<li class="listStuff">' + ' - ' +
		shoppingList[j] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}
}


