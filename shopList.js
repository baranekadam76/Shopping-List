//Shopping List app for me and Amanda to use (designed for us specifically)

/*Some ideas for the app:
	- build functionality to allow moving of Extras items to a category of user's choosing (drag and drop?)
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

	document.getElementById('printBut').style.visibility = "hidden";

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
	document.getElementById('printBut').style.visibility = "visible";

	//Clearing the lists
	document.getElementById('testButton8').innerHTML = '';
	document.getElementById('produce').innerHTML = '';
	document.getElementById('meat').innerHTML = '';
	document.getElementById('snacks').innerHTML = '';
	document.getElementById('condiments').innerHTML = '';
	document.getElementById('cold').innerHTML = '';

	//Printing the lists to the screen
	for (var j = 0; j < shoppingList.length; j++) {
		if (shoppingList[j] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('testButton8').innerHTML += '<li class="listStuff" id="shoppingItem' 
		+ j + '">' + ' - ' + shoppingList[j] + ' ' + '<button onclick="removeShopping(' + j + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var p = 0; p < produceList.length; p++) {
		if (produceList[p] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('produce').innerHTML += '<li class="listStuff" id="produceItem' 
		+ p + '">' + ' - ' + produceList[p] + ' ' + '<button onclick="removeProduce(' + p + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var m = 0; m < meatList.length; m++) {
		if (meatList[m] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('meat').innerHTML += '<li class="listStuff" id="meatItem' 
		+ m + '">' + ' - ' + meatList[m] + ' ' + '<button onclick="removeMeat(' + m + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var s = 0; s < snacksList.length; s++) {
		if (snacksList[s] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('snacks').innerHTML += '<li class="listStuff" id="snacksItem' 
		+ s + '">' + ' - ' + snacksList[s] + ' ' + '<button onclick="removeSnacks(' + s + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var c = 0; c < condimentsList.length; c++) {
		if (condimentsList[c] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('condiments').innerHTML += '<li class="listStuff" id="condimentsItem' 
		+ c + '">' + ' - ' + condimentsList[c] + ' ' + '<button onclick="removeCondiments(' + c + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var k = 0; k < coldList.length; k++) {
		if (coldList[k] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('cold').innerHTML += '<li class="listStuff" id="coldItem' 
		+ k + '">' + ' - ' + coldList[k] + ' ' + '<button onclick="removeCold(' + k + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}
}

//Remove Item from the list functions
function removeProduce(num) {
	document.getElementById('produceItem' + num).innerHTML = '';
	produceList[num] = '';
}

function removeMeat(num) {
	document.getElementById('meatItem' + num).innerHTML = '';
	meatList[num] = '';
}

function removeShopping(num) {
	document.getElementById('shoppingItem' + num).innerHTML = '';
	shoppingList[num] = '';
}

function removeSnacks(num) {
	document.getElementById('snacksItem' + num).innerHTML = '';
	snacksList[num] = '';
}

function removeCondiments(num) {
	document.getElementById('condimentsItem' + num).innerHTML = '';
	condimentsList[num] = '';
}

function removeCold(num) {
	document.getElementById('coldItem' + num).innerHTML = '';
	coldList[num] = '';
}


//Opens print window to print the shopping list
function printList() {
	document.getElementById('mainContent').innerHTML = '';
	window.print();
	//Also have this window remove the 'Remove' button first before printing out
}



/*
Other than trying to remove the buttons in the printList() function,
this project is pretty much done. I just need to make it look pretty and
make it reponsive. Also, I need to add new items to the frequent list.
*/