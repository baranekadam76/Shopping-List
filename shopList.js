//Shopping List app for me and Amanda to use (designed for us specifically)

/*Some ideas for the app:
	- build a smooth welcome page with quick instructions that the user sees before using the app
*/

var shoppingList = [];
var produceList = [];
var meatList = [];
var snacksList = [];
var condimentsList = [];
var coldList = [];
var variousList = [];
var frequentItems = {
	'produce': ['Green Pepper', 'Sweet Potato', 'Yellow Onion', 'Mushrooms', 'Avocado', 'Garlic', 
	'Broccoli Crowns', 'Hummus', 'Jalapeno', 'Tomato', 'Lime'],
	'condiments': ['Barbeque Sauce', 'Ketchup', 'Ranch', 'Mayo', 'Olive Oil', 'Spray Oil', 
	'Buffalo Sauce', 'Tabasco', 'Hot Sauce'],
	'snacks': ['Lara Bars', 'Corn Chips', 'Pop Tarts', 'Candy', 'Salsa'],
	'cold': ['Frozen Pizza', 'Bag of Fries', 'Ice Cream', 'Shredded Cheese', 'Cream Cheese', 
			'Sour Cream', 'Cottage Cheese', 'Yoghurt', 'Peanut Butter'],
	'meat': ['Chicken Breast', 'Beef', 'Bacon', 'Eggs', 'Chicken Thighs', 'Drumsticks'],
	'various': ['Almond Milk', 'Adam Coffee', 'Amanda Coffee', 'Tea', 'Honey', 'Cereal', 'Soup', 
	'Broth', 'Tortillas']
};



function startList() {

	var stopAdd = 0;

	document.getElementById('printBut').style.visibility = "hidden";

	while (stopAdd < 1) {

		switch (addFoodItem = prompt('Add an Item and its Quantity (type \'done\' when you are finished):')) {
			case 'done':
				stopAdd++;
				showList();
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
			showList();
			break;
		case 'Sweet Potato':
			var qty = prompt('How many?');
			produceList.push('Sweet Potato ' + qty);
			showList();
			break;
		case 'Yellow Onion':
			var qty = prompt('How many?');
			produceList.push('Yellow Onion ' + qty);
			showList();
			break;
		case 'Mushrooms':
			var qty = prompt('How many? (8oz packs)');
			produceList.push('Mushrooms ' + qty + 'pack(s)');
			showList();
			break;
		case 'Avocado':
			var qty = prompt('How many?');
			produceList.push('Avocado ' + qty);
			showList();
			break;
		case 'Garlic':
			var qty = prompt('How many?');
			produceList.push('Garlic ' + qty);
			showList();
			break;
		case 'Broccoli Crowns':
			var qty = prompt('How many?');
			produceList.push('Broccoli Crowns ' + qty);
			showList();
			break;
		case 'Hummus':
			var qty = prompt('How many?');
			produceList.push('Hummus ' + qty);
			showList();
			break;
		case 'Jalapeno':
			var qty = prompt('How many?');
			produceList.push('Jalapeno ' + qty);
			showList();
			break;
		case 'Tomato':
			var qty = prompt('How many?');
			produceList.push('Tomato ' + qty);
			showList();
			break;
		case 'Lime':
			var qty = prompt('How many?');
			produceList.push('Lime ' + qty);
			showList();
			break;
		case 'Barbeque Sauce':
			var qty = prompt('How many?');
			condimentsList.push('Barbeque Sauce ' + qty);
			showList();
			break;
		case 'Ketchup':
			var qty = prompt('How many?');
			condimentsList.push('Ketchup ' + qty);
			showList();
			break;
		case 'Ranch':
			var qty = prompt('How many?');
			condimentsList.push('Ranch ' + qty);
			showList();
			break;
		case 'Mayo':
			var qty = prompt('How many?');
			condimentsList.push('Mayo ' + qty);
			showList();
			break;
		case 'Olive Oil':
			var qty = prompt('How many?');
			condimentsList.push('Olive Oil ' + qty);
			showList();
			break;
		case 'Spray Oil':
			var qty = prompt('How many?');
			condimentsList.push('Spray Oil ' + qty);
			showList();
			break;
		case 'Buffalo Sauce':
			var qty = prompt('How many?');
			condimentsList.push('Buffalo Sauce ' + qty);
			showList();
			break;
		case 'Tabasco':
			var qty = prompt('How many?');
			condimentsList.push('Tabasco ' + qty);
			showList();
			break;
		case 'Hot Sauce':
			var qty = prompt('How many?');
			condimentsList.push('Hot Sauce ' + qty);
			showList();
			break;
		case 'Cottage Cheese':
			var qty = prompt('How many?');
			coldList.push('Cottage Cheese ' + qty);
			showList();
			break;
		case 'Yoghurt':
			var qty = prompt('How many? (packs of 4)');
			coldList.push('Yoghurt ' + qty + 'pack(s)');
			showList();
			break;
		case 'Peanut Butter':
			var qty = prompt('How many?');
			coldList.push('Peanut Butter ' + qty);
			showList();
			break;
		case 'Lara Bars':
			var qty = prompt('How many?');
			snacksList.push('Lara Bars ' + qty);
			showList();
			break;
		case 'Corn Chips':
			var qty = prompt('How many?');
			snacksList.push('Corn Chips ' + qty);
			showList();
			break;
		case 'Pop Tarts':
			var qty = prompt('How many?');
			snacksList.push('Pop Tarts ' + qty);
			showList();
			break;
		case 'Candy':
			var qty = prompt('How many (just specify an arbitrary amount)?');
			snacksList.push('Candy ' + qty);
			showList();
			break;
		case 'Salsa':
			var qty = prompt('How many?');
			snacksList.push('Salsa ' + qty);
			showList();
			break;
		case 'Frozen Pizza':
			var qty = prompt('How many?');
			coldList.push('Frozen Pizza ' + qty);
			showList();
			break;
		case 'Bag of Fries':
			var qty = prompt('How many?');
			coldList.push('Bag of Fries ' + qty + 'bag(s)');
			showList();
			break;
		case 'Ice Cream':
			var qty = prompt('How many?');
			coldList.push('Ice Cream ' + qty);
			showList();
			break;
		case 'Shredded Cheese':
			var qty = prompt('How many?');
			coldList.push('Shredded Cheese ' + qty);
			showList();
			break;
		case 'Cream Cheese':
			var qty = prompt('How many?');
			coldList.push('Cream Cheese ' + qty);
			showList();
			break;
		case 'Sour Cream':
			var qty = prompt('How many?');
			coldList.push('Sour Cream ' + qty);
			showList();
			break;
		case 'Chicken Breast':
			var qty = prompt('How many pounds?');
			meatList.push('Chicken Breast ' + qty + 'lbs');
			showList();
			break;
		case 'Beef':
			var qty = prompt('How many pounds?');
			meatList.push('Beef ' + qty + 'lbs');
			showList();
			break;
		case 'Bacon':
			var qty = prompt('How many packs?');
			meatList.push('Bacon ' + qty + 'pack(s)');
			showList();
			break;
		case 'Eggs':
			var qty = prompt('How many dozens?');
			meatList.push('Eggs ' + qty + 'dozen');
			showList();
			break;
		case 'Chicken Thighs':
			var qty = prompt('How many pounds?');
			meatList.push('Chicken Thighs ' + qty + 'lbs');
			showList();
			break;
		case 'Drumsticks':
			var qty = prompt('How many packs?');
			meatList.push('Drumsticks ' + qty + 'pack(s)');
			showList();
			break;
		case 'Almond Milk':
			var qty = prompt('How many?');
			variousList.push('Almond Milk ' + qty);
			showList();
			break;
		case 'Adam Coffee':
			var qty = prompt('How many?');
			variousList.push('Adam Coffee ' + qty);
			showList();
			break;
		case 'Amanda Coffee':
			var qty = prompt('How many?');
			variousList.push('Amanda Coffee ' + qty);
			showList();
			break;
		case 'Tea':
			var qty = prompt('How many boxes?');
			variousList.push('Tea ' + qty + 'box');
			showList();
			break;
		case 'Honey':
			var qty = prompt('How many?');
			variousList.push('Honey ' + qty);
			showList();
			break;
		case 'Cereal':
			var qty = prompt('How many?');
			variousList.push('Cereal ' + qty);
			showList();
			break;
		case 'Soup':
			var qty = prompt('How many cans?');
			variousList.push('Soup ' + qty + 'cans');
			showList();
			break;
		case 'Broth':
			var qty = prompt('How many?');
			variousList.push('Broth ' + qty);
			showList();
			break;
		case 'Tortillas':
			var qty = prompt('How many bags?');
			variousList.push('Tortillas ' + qty + 'bags');
			showList();
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
	document.getElementById('various').innerHTML = '';

	//Printing the lists to the screen
	for (var j = 0; j < shoppingList.length; j++) {
		if (shoppingList[j] === '') {
			//Leaving this empty basically just means I'm skipping over the 'print to screen'
		}
		else {
		document.getElementById('testButton8').innerHTML += '<li class="listStuff" id="shoppingItem' 
		+ j + '">' + ' - ' + shoppingList[j] + ' ' + '<button onclick="removeShopping(' + j + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '<button onclick="moveShopping(' + j + ')"' + 
		'class="moveButtons">' + 'Move' + '</button>' + '</li>';
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

	for (var v = 0; v < variousList.length; v++) {
		if (variousList[v] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('various').innerHTML += '<li class="listStuff" id="variousItem' 
		+ v + '">' + ' - ' + variousList[v] + ' ' + '<button onclick="removeVarious(' + v + ')"' + 
		'class="removeButtons">' + 'Remove' + '</button>' + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}
}

//This function will re-print the list without the buttons
function showPrintList() {
	shoppingList.sort();

	//Clearing the lists
	document.getElementById('testButton8').innerHTML = '';
	document.getElementById('produce').innerHTML = '';
	document.getElementById('meat').innerHTML = '';
	document.getElementById('snacks').innerHTML = '';
	document.getElementById('condiments').innerHTML = '';
	document.getElementById('cold').innerHTML = '';
	document.getElementById('various').innerHTML = '';

	//Printing the lists to the screen
	for (var j = 0; j < shoppingList.length; j++) {
		if (shoppingList[j] === '') {
			//Leaving this empty basically just means I'm skipping over the 'print to screen'
		}
		else {
		document.getElementById('testButton8').innerHTML += '<li class="listStuff" id="shoppingItem' 
		+ j + '">' + ' - ' + shoppingList[j] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var p = 0; p < produceList.length; p++) {
		if (produceList[p] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('produce').innerHTML += '<li class="listStuff" id="produceItem' 
		+ p + '">' + ' - ' + produceList[p] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var m = 0; m < meatList.length; m++) {
		if (meatList[m] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('meat').innerHTML += '<li class="listStuff" id="meatItem' 
		+ m + '">' + ' - ' + meatList[m] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var s = 0; s < snacksList.length; s++) {
		if (snacksList[s] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('snacks').innerHTML += '<li class="listStuff" id="snacksItem' 
		+ s + '">' + ' - ' + snacksList[s] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var c = 0; c < condimentsList.length; c++) {
		if (condimentsList[c] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('condiments').innerHTML += '<li class="listStuff" id="condimentsItem' 
		+ c + '">' + ' - ' + condimentsList[c] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var k = 0; k < coldList.length; k++) {
		if (coldList[k] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('cold').innerHTML += '<li class="listStuff" id="coldItem' 
		+ k + '">' + ' - ' + coldList[k] + '</li>';
		//The '+=' in the above line is crucial for this to work properly and print the list out
		}
	}

	for (var v = 0; v < variousList.length; v++) {
		if (variousList[v] === '') {
			//Leaving this empty basically just means I'm skipping over the print to screen
		}
		else {
		document.getElementById('various').innerHTML += '<li class="listStuff" id="variousItem' 
		+ v + '">' + ' - ' + variousList[v] + '</li>';
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

function removeVarious(num) {
	document.getElementById('variousItem' + num).innerHTML = '';
	variousList[num] = '';
}

//Move item from the Extra/Non-Food list to a different list
function moveShopping(num) {
	switch(prompt('Select the list to move the item to (1-6 are your choices).\n' + 
		'1. Produce 2. Meat 3. Snacks 4. Condiments 5. Various 6. Cold')) {
		case '1':
			produceList.push(shoppingList[num]);
			break;
		case '2':
			meatList.push(shoppingList[num]);
			break;
		case '3':
			snacksList.push(shoppingList[num]);
			break;
		case '4':
			condimentsList.push(shoppingList[num]);
			break;
		case '5':
			variousList.push(shoppingList[num]);
			break;
		case '6':
			coldList.push(shoppingList[num]);
			break;
		default:
			console.log('something broke');
	}

	removeShopping(num);
	showList();
}


//Opens print window to print the shopping list
function printList() {
	document.getElementById('mainContent').innerHTML = '';
	showPrintList(); //This removes the buttons from the list
	window.print();
}