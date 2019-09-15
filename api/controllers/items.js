import model from '../db/models';

const { CatalogItem, CatalogCategories } = model;


export class CatalogItemController {
	static getList (req, res) {
		try {
			const {sort, filter, range} = req.query;
			let offset = 0, limit = 10;
			if (range) {
				[offset, limit] = JSON.parse(range);
			}
			let order = [['id', 'ASC']];
			if (sort) {
				order = [JSON.parse(sort)];
			}
			let where = {};
			if (filter) {
				where = JSON.parse(filter);
			}
			const total = CatalogItem.count({where}).then((i) => (parseInt(i)));
			const items = CatalogItem.findAll({
				where,
				offset,
				limit,
				order,
				include: [
					{
						model: CatalogCategories
					},
				],
			});
			return Promise.all([total,items])
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
	static getItem (req, res) {
		try {
			let {id} = req.params;
			id = parseInt(id);
			return CatalogItem
				.findOne({
					where:{id},
					include: [
						{
							model: CatalogCategories
						},
					]
				})
				.then((item)=>{
					if (item) {
						res.status(200).send(item)
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
	static createItem (req, res) {
		try {
			const {name, price, categoryId, expires} = req.body;
			if (!name) {
				res.status(400).send();
			}
			return CatalogItem
				.create({name, price, categoryId, expires})
				.then((item) => {
					res.status(201).send(item)
				})
		} catch (error) {
			console.log(error);
			res.status(500).send({});
		}
	}
	static updateItem (req, res) {
		try {
			const {name, price, categoryId, expires} = req.body;
			let {id} = req.params;
			id = parseInt(id);
			let updates = {};
			if (name) {
				updates = {...updates, name};
			}
			if (price) {
				updates = {...updates, price};
			}
			if (categoryId) {
				updates = {...updates, categoryId};
			}
			if (expires) {
				updates = {...updates, expires};
			}
			if (JSON.stringify(updates) === '{}') {
				res.status(400).send();
			}
			return CatalogItem
				.findOne({where:{id}})
				.then((item)=>{
					if (item) {
						return item
							.update(updates)
							.then((item) => {
								res.status(200).send(item)
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
	static deleteItem (req, res) {
		try {
			let {id} = req.params;
			if (!id || !parseInt(id)) {
				res.status(404).send({});
			}
			return CatalogItem
			.findOne({where:{id}})
			.then((item)=>{
				if (item) {
					return item
						.destroy()
						.then(() => {
							res.status(204).send({})
						})
						.catch((error) => {
							console.log(error);
							res.status(500).send({})
						})
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