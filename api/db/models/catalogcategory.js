'use strict';
module.exports = (sequelize, DataTypes) => {
  const CatalogCategories = sequelize.define('CatalogCategories', {
    name: DataTypes.STRING(255)
  }, {});
  CatalogCategories.associate = function(models) {
    CatalogCategories.hasMany(models.CatalogItem, {
      foreignKey: 'categoryId',
	    constraints: false,
      as: 'items',
    });
  };
  return CatalogCategories;
};