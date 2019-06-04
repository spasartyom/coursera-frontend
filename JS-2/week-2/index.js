module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this._coll = [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this._coll;
};
// другие методы

// at
Collection.prototype.at = function (index) {
    if (index < 1 || index > this._coll.length) {
        return null;
    } else return this._coll[index-1];
}

// count
Collection.prototype.count = function () {
    return this._coll.length;
}

// append
Collection.prototype.append = function (element) {
    if (element instanceof Collection){
        this._coll = this._coll.concat(element._coll);
    } else this._coll.push(element);
}

// removeAt
Collection.prototype.removeAt = function (index) {
    if (this._coll.length >= index && index > 0) {
        this._coll.splice(index - 1, 1);
        return true;
    } else return false;
}


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (element) {
    var collection = new Collection;
    collection._coll = collection._coll.concat(element);
    return collection;
};
