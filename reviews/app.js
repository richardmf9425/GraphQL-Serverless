const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const reviews = [
	{
		id: 1,
		title: 'Best movie ever made',
		description: 'In the hole in the ground, there lived a hobbit...',
		grade: 5,
		product: 1
	},
	{
		id: 2,
		name: 'Second best movie and book ever made',
		description: 'These movies are amazing, and the book is even better!',
		grade: 5,
		product: 2
	},
	{
		id: 3,
		name: 'Dissapointed',
		description: 'They ruined the whole show in the last few episodes, episode 6 was badass though',
		grade: 2,
		product: 2
	}
];

app.get('/', (req, res) => res.json(reviews));
app.listen(port, () => console.log(` app listening on port ${port}!`));
