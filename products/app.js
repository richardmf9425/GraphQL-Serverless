const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const products = [
	{
		id: 1,
		name: 'Lord of the Rings'
	},
	{
		id: 2,
		name: 'The Hobbit'
	},
	{
		id: 3,
		name: 'Game of Thrones'
	}
];

app.get('/', (req, res) => res.json(products));
app.listen(port, () => console.log(`app listening on port ${port}`));
