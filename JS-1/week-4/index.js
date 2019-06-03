/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var data = collection.slice();
    var todo = [].slice.call(arguments).slice(1);

    if (todo.length !== 0) {
        todo.sort().forEach(function (fn) {
            data = fn(data);
        });
    }

    return data;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return function select(data) {
        return data.reduce(function (arr, item) {
            var selectedFields = {};

            for (key in item) {
                if (fields.indexOf(key) !== -1) {
                    selectedFields[key] = item[key];
                }
            }

            arr.push(selectedFields);

            return arr;
        }, []);
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn (data) {
        
        for (var i = 0; i < data.length; i++) {
            if (values.indexOf(data[i][property]) == -1) {
                data.splice(i, 1);
                i = -1;
            }
        }
        
        return data;
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
