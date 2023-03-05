const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return (this._price = priceToCheck);
    }
  },
  get todaySpecial() {
    return this._meal && this._price
      ? `Today's Special is ${this._meal} for U$ ${this._price}!`
      : 'Meal or price was note set correctly!';
  },
};

menu.meal = 'Hamburger';
menu.price = 10000;

console.log(menu);
console.log(menu.todaySpecial);
