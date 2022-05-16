const getAll = async () => {
	try {
		console.log('---getAll---');
		const response = await fetch('http://localhost:3011/movies/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log('--fetch:getAll--');
		const data = await response.json();
		console.log(data);
		let html = '';
		data.forEach(element => {
			html += htmlNewsegment(element)
			let container = document.querySelector('.movies')
			container.innerHTML = html;
		});
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
		let mov=document.querySelector('.movies')
		mov2=Array.from(mov.children)
		console.log(mov2.length)
		mov.style.marginTop = 7*(mov2.length) + 'em'
	}
	catch (err) {
		console.log(err);
	}
}

const getID = async () => {
	let id = prompt('ID: ');
	try {
		console.log('---getID---');
		const response = await fetch('http://localhost:3011/movies/' + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);
		let html = '';
		html += htmlNewsegment(data)
		let container = document.querySelector('.movies')
		container.innerHTML = html;
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
	}
	catch (err) {
		console.log(err);
	}
}

const getValue = async () => {
	let key = prompt('Clave: ');
	let value = prompt('Valor: ');
	try {
		console.log('---myFunction3---');
		const response = await fetch('http://localhost:3011/movies/search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				key: key,
				value: value
			})
		});
		const data = await response.json();
		console.log(data);

		let html = '';
		data.forEach(element => {
			html += htmlNewsegment(element)
			let container = document.querySelector('.movies')
			container.innerHTML = html;
		});
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})


	}
	catch (err) {
		console.log(err);
	}
}

const Delete = async () => {
	let id = prompt('ID: ');
	try {
		console.log('---getID---');
		const response = await fetch('http://localhost:3011/movies/' + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);
		let html = '';
		html += htmlNewsegment(getAll())
		let container = document.querySelector('.movies')
		container.innerHTML = html;
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
	}
	catch (err) {
		console.log(err);
	}
}

const Insert = async () => {
	let dataFilm = prompt('Data as JSON: ');
	try {
		console.log('---getID---');
		const response = await fetch('http://localhost:3011/movies/add', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: dataFilm
		});
		const data = await response.json();
		console.log(data);
		let html = '';
		html += htmlNewsegment(getAll())
		let container = document.querySelector('.movies')
		container.innerHTML = html;
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
	}
	catch (err) {
		console.log(err);
	}
}

const Update = async () => {
	let dataFilm = prompt('Data as JSON: ');
	try {
		console.log('---getID---');
		const response = await fetch('http://localhost:3011/movies/update', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: dataFilm
		});
		const data = await response.json();
		console.log(data);
		let html = '';
		html += htmlNewsegment(getAll())
		let container = document.querySelector('.movies')
		container.innerHTML = html;
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
	}
	catch (err) {
		console.log(err);
	}
}



function htmlNewsegment(movie) {
	//template

	return `<div class="movie">
	<h2>${movie.title}</h2>
	<p>ID:${movie.id}</p>
<p>${movie.genres}</p>
<p>${movie.year}</p>
<p>${movie.director}</p>
<p>${movie.actors}</p>
</div>`;

}