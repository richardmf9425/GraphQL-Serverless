const products = [
	{
		id: 1,
		name: 'Lord Of The Rings'
	}
];

const reviews = [
	{
		grade: 5,
		title: 'Best Movie ever made',
		description: 'In the hole in the ground, there lived a hobbit...',
		product: 1
	}
];

const getReviews = () => {
	return Promise.resolve(reviews);
};

const getProducts = () => {
	return Promise.resolve(products);
};

const getProduct = (id) => {
	return Promise.resolve(products.find((p) => p.id === id));
};

const createProduct = (product) => {
	const newProduct = { ...product, id: products.length + 1 };
	products = [ ...products, newProduct ];

	return Promise.resolve(newProduct);
};

module.exports = {
	Query: {
		hello: () => 'world',
		products: async () => getProducts(),
		product: async (_, { id }) => getProduct(id),
		reviews: async () => getReviews()
	},
	Review: {
		product: async (review) => getProduct(review.product)
	},
	Mutation: {
		createProduct: async (_, { product }) => createProduct(product)
	}
};
