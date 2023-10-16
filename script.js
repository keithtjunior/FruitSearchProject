const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// TODO
	if(!str || str.length === 0) return;
	fruit.filter((name) => {	
		if(name.substring(0, str.length).toLowerCase() === str)
			results.push(name);
	});
	return results;
}

function searchHandler(e) {
	// TODO
	let inputVal = e.target.value.toLowerCase();
	let results = search(inputVal);
	clearList();
	if(results) showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.setAttribute('class', 'has-suggestions');
	for(let name of results){
		let fruitNameLi = document.createElement("li");
		fruitNameLi.innerText = name;
		suggestions.appendChild(fruitNameLi);
	}
}

function useSuggestion(e) {
	// TODO
	let selectedFruit = e.target.innerText;
	input.value = selectedFruit;
	input.focus();
	clearList();
}

const clearList = () => {
	suggestions.removeAttribute('class', 'has-suggestions');
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);