var data;

function getGhibli() {
	var request = new XMLHttpRequest();
	
	request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
	
	request.onload = function() {
		data = JSON.parse(this.response);
		displayGhibli(data);
	}
	if(data == null) {
		request.send();
	}
}

function displayGhibli(movies) {
	const app = document.getElementById('root');
	const container = document.createElement('div');
	container.setAttribute('class', 'container');
	app.appendChild(container);
	
	movies.forEach(movie => {
		const card = document.createElement('div');
		card.setAttribute('class', 'card border-gray');
		
		const h1 = document.createElement('h1');
		h1.textContent = movie.title;
		
		const p = document.createElement('p');
		movie.description = movie.description.substring(0, 300);
		p.textContent = `${movie.description}...`;
		
		container.appendChild(card);
		
		card.appendChild(h1);
		card.appendChild(p);
	});
}