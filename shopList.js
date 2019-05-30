//Shopping List app for me and Amanda to use (designed for us specifically)

/*Some ideas for the app:
	- clicking or tapping on an item on the list that displays will cross it out or remove it all together
	- add a print button that will print out the list
	- ability to edit the list once it has been generated (do this last)
		* This could work by perhaps using JS in my showList() function to add a 'Remove' button 
		to the end of each list entry that can be pressed to remove the item from that list.
*/

var shoppingList = [];
var produceList = [];
var meatList = [];
var snacksList = [];
var condimentsList = [];
var coldList = [];
var frequentItems = {
	'produce': ['Green Pepper', 'Sweet Potato', 'Yellow Onion', 'Mushrooms', 'Avocado'],
	'condiments': ['Barbeque Sauce', 'Ketchup', 'Ranch', 'Mayo'],
	'snacks': ['Hummus', 'Cottage Cheese', 'Yoghurt', 'Lara Bars', 'Chips'],
	'cold': ['Frozen Pizza', 'Bag of Fries', 'Ice Cream', 'Shredded Cheese', 'Cream Cheese', 'Sour Cream'],
	'meat': ['Chicken', 'Beef', 'Bacon', 'Eggs']
};



function startList() {

	var stopAdd = 0;

	document.getElementById('sortBut').style.visibility = "hidden";

	while (stopAdd < 1) {

		switch (addFoodItem = prompt('Add an Item and its quantity:')) {
			case 'quit':
				stopAdd++;
				break;
			default:
				shoppingList.push(addFoodItem.charAt(0).toUpperCase() + addFoodItem.slice(1));
				break;
		}
	}

}

function freqItem(item) {

	switch (item) {
		case 'Green Pepper':
			var qty = prompt('How many?');
			produceList.push('Green Pepper ' + qty);
			break;
		case 'Sweet Potato':
			var qty = prompt('How many?');
			produceList.push('Sweet Potato ' + qty);
			break;
		case 'Yellow Onion':
			var qty = prompt('How many?');
			produceList.push('Yellow Onion ' + qty);
			break;
		case 'Mushrooms':
			var qty = prompt('How many? (8oz packs)');
			produceList.push('Mushrooms ' + qty + 'pack(s)');
			break;
		case 'Avocado':
			var qty = prompt('How many?');
			produceList.push('Avocado ' + qty);
			break;
		case 'Barbeque Sauce':
			var qty = prompt('How many?');
			condimentsList.push('Barbeque Sauce ' + qty);
			break;
		case 'Ketchup':
			var qty = prompt('How many?');
			condimentsList.push('Ketchup ' + qty);
			break;
		case 'Ranch':
			var qty = prompt('How many?');
			condimentsList.push('Ranch ' + qty);
			break;
		case 'Mayo':
			var qty = prompt('How many?');
			condimentsList.push('Mayo ' + qty);
			break;
		case 'Hummus':
			var qty = prompt('How many?');
			snacksList.push('Hummus ' + qty);
			break;
		case 'Cottage Cheese':
			var qty = prompt('How many?');
			snacksList.push('Cottage Cheese ' + qty);
			break;
		case 'Yoghurt':
			var qty = prompt('How many? (packs of 4)');
			snacksList.push('Yoghurt ' + qty + 'pack(s)');
			break;
		case 'Lara Bars':
			var qty = prompt('How many?');
			snacksList.push('Lara Bars ' + qty);
			break;
		case 'Chips':
			var qty = prompt('How many?');
			snacksList.push('Chips ' + qty);
			break;
		case 'Frozen Pizza':
			var qty = prompt('How many?');
			coldList.push('Frozen Pizza ' + qty);
			break;
		case 'Bag of Fries':
			var qty = prompt('How many?');
			coldList.push('Bag of Fries ' + qty + 'bag(s)');
			break;
		case 'Ice Cream':
			var qty = prompt('How many?');
			coldList.push('Ice Cream ' + qty);
			break;
		case 'Shredded Cheese':
			var qty = prompt('How many?');
			coldList.push('Shredded Cheese ' + qty);
			break;
		case 'Cream Cheese':
			var qty = prompt('How many?');
			coldList.push('Cream Cheese ' + qty);
			break;
		case 'Sour Cream':
			var qty = prompt('How many?');
			coldList.push('Sour Cream ' + qty);
			break;
		case 'Chicken':
			var qty = prompt('How many pounds?');
			meatList.push('Chicken ' + qty + 'lbs');
			break;
		case 'Beef':
			var qty = prompt('How many pounds?');
			meatList.push('Beef ' + qty + 'lbs');
			break;
		case 'Bacon':
			var qty = prompt('How many packs?');
			meatList.push('Bacon ' + qty + 'pack(s)');
			break;
		case 'Eggs':
			var qty = prompt('How many dozens?');
			meatList.push('Eggs ' + qty + 'pack(s)');
			break;
	}

}

function showList() {
	shoppingList.sort();
	document.getElementById('sortBut').style.visibility = "visible";

	//Clearing the lists
	document.getElementById('testButton8').innerHTML = '';
	document.getElementById('produce').innerHTML = '';
	document.getElementById('meat').innerHTML = '';
	document.getElementById('snacks').innerHTML = '';
	document.getElementById('condiments').innerHTML = '';
	document.getElementById('cold').innerHTML = '';

	document.getElementById('testButton7').innerHTML = '<h2>' + '<strong>Extras</strong>' + '</h2>';

	//Printing the lists
	for (var j = 0; j < shoppingList.length; j++) {
		document.getElementById('testButton8').innerHTML += '<li class="listStuff">' + ' - ' +
		shoppingList[j] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}

	for (var p = 0; p < produceList.length; p++) {
		document.getElementById('produce').innerHTML += '<li class="listStuff">' + ' - ' +
		produceList[p] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}

	for (var m = 0; m < meatList.length; m++) {
		document.getElementById('meat').innerHTML += '<li class="listStuff">' + ' - ' +
		meatList[m] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}

	for (var s = 0; s < snacksList.length; s++) {
		document.getElementById('snacks').innerHTML += '<li class="listStuff">' + ' - ' +
		snacksList[s] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}

	for (var c = 0; c < condimentsList.length; c++) {
		document.getElementById('condiments').innerHTML += '<li class="listStuff">' + ' - ' +
		condimentsList[c] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}

	for (var k = 0; k < coldList.length; k++) {
		document.getElementById('cold').innerHTML += '<li class="listStuff">' + ' - ' +
		coldList[k] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
	}
}


//Work on the Print functionality and start testing for some bugs



//Get this function to sort the items into categories
function sortList() {
	//I may just skip this function for now
}
