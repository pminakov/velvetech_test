import {
	AuthController,
	CatalogCategoryController,
	CatalogItemController
} from '../controllers';

export const router = (app) => {
	// auth
	app.post('/api/login', AuthController.login);

	// categories
	app.get('/api/categories', CatalogCategoryController.getList);
	app.post('/api/categories', CatalogCategoryController.createCategory);
	app.get('/api/categories/:id', CatalogCategoryController.getCategory);
	app.put('/api/categories/:id', CatalogCategoryController.updateCategory);
	app.delete('/api/categories/:id', CatalogCategoryController.deleteCategory);

	// items
	app.get('/api/items', CatalogItemController.getList);
	app.post('/api/items', CatalogItemController.createItem);
	app.get('/api/items/:id', CatalogItemController.getItem);
	app.put('/api/items/:id', CatalogItemController.updateItem);
	app.delete('/api/items/:id', CatalogItemController.deleteItem);
};