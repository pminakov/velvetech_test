'use strict';
module.exports = (sequelize, DataTypes) => {
	const CatalogCategories = sequelize.import('./catalogcategory');
  const CatalogItem = sequelize.define('CatalogItem', {
    name: {
      type: DataTypes.STRING(40),
      validate: {
        len: {
          args: [5,40],
          msg: "Name should have from 5 to 40 characters"
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL(15,2),
      validate: {
        priceNotZero: function(value, next) {
          try {
	          if (parseFloat(value) >= 0.0) {
		          return next()
	          } else {
		          return next('Price should be greater than 0')
	          }
          } catch (error) {
            return next(`${value} is a not valid value for price field: ${error}`)
          }
        },
      }
    },
    expires: DataTypes.DATE,
    categoryId: {
      type: DataTypes.INTEGER,
      categoryExist: function(value, next) {
        try {
	        CatalogCategories
            .findOne({where: {id: parseInt(value)}})
            .then((category) => {
              if (!category) {
                return next()
              } else {
                return next(`${value}" is a not valid value for categoryId field`);
              }
            })
            .catch((error) => {
	            console.log(error);
              return next(error)
            })
        } catch (error) {
	        console.log(error);
	        return next(`${value}" is a not valid value for categoryId field: ${error}`)
        }
      }
    },
  }, {});
  CatalogItem.associate = function(models) {
    CatalogItem.belongsTo(models.CatalogCategories, {
      foreignKey: 'categoryId',
	    constraints: false,
    })
  };
  return CatalogItem;
};