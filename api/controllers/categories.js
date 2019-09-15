import model from '../db/models';

const { CatalogCategories, CatalogItem } = model;


export class CatalogCategoryController {
	static getList (req, res) {
		try {
			const {sort, filter, range} = req.query;
			let offset = 0, limit = 10;
			if (range) {
				const [start, end] = JSON.parse(range);
				offset = start;
				limit = end - start + 1;
			}
			let order = [['id', 'ASC']];
			if (sort) {
				order = [JSON.parse(sort)];
			}
			let where = {};
			if (filter) {
				where = JSON.parse(filter);
			}
			const total = CatalogCategories.count({where}).then((i) => (parseInt(i)));
			const categories = CatalogCategories.findAll({
				where,
				offset,
				limit,
				order,
			});
			return Promise.all([total, categories])
				.then((data) => {
				  res.setHeader('Content-Range', `${offset}-${data[1].length}/${data[0]}`);
					res.status(200).send(data[1]);
				})
				.catch((error)=>{
					console.log(error);
					res.status(500).send({})
				})
		} catch (error) {
			console.log(error);
			res.status(500).send({})
		}
	};
	static getCategory (req, res) {
		try {
			let {id} = req.params;
			id = parseInt(id);
			return CatalogCategories
				.findOne({where:{id}})
				.then((category)=>{
					if (category) {
						res.status(200).send(category)
					} else {
						res.status(404).send({});
					}
				}).catch((error)=>{
					console.log(error);
					res.status(500).send({});
				});
		} catch (error) {
			console.log(error);
			res.status(500).send({});
		}
	}
	static createCategory (req, res) {
		try {
			const {name} = req.body;
			if (!name) {
				res.status(400).send();
			}
			return CatalogCategories
				.create({name})
				.then((category) => {
					res.status(201).send(category)
				})
		} catch (error) {
			console.log(error);
			res.status(500).send({});
		}
	}
	static updateCategory (req, res) {
		try {
			const {name} = req.body;
			let {id} = req.params;
			id = parseInt(id);
			if (!name) {
				res.status(400).send();
			}
			return CatalogCategories
				.findOne({where:{id}})
				.then((category)=>{
					if (category) {
						return category
							.update({name})
							.then((category) => {
								res.status(200).send(category)
							}).catch((error) => {
								console.log(error);
								res.status(500).send({});
							})
					} else {
						res.status(404).send({});
					}
				}).catch((error)=>{
					console.log(error);
					res.status(500).send({});
				})

		} catch (error) {
			console.log(error);
			res.status(500).send({});
		}
	}
	static deleteCategory (req, res) {
		try {
			let {id} = req.params;
			if (!id || !parseInt(id)) {
				res.status(404).send({});
			}
			// todo: wrap with transaction
			return CatalogCategories
				.findOne({where:{id}})
				.then((category)=>{
					if (category) {
						return CatalogItem
							.update({categoryId:0}, {where:{id}})
							.then(()=>{
								return category
									.destroy()
									.then(() => {
										res.status(204).send({})
									})
									.catch((error) => {
										console.log(error);
										res.status(500).send({})
									})
							}).catch(error => {
								console.log(error);
								res.status(500).send({})
							});
					} else {
						res.status(404).send({})
					}
				})
				.catch((error)=>{
					console.log(error);
					res.status(500).send({})
				})
		} catch (error) {
			console.log(error);
			res.status(500).send({});
		}
	}
}