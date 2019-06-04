/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var promises = [];

    operations.forEach(operation => {
        operation = new Promise((resolve, reject) => {
                    var next = function (err, ms) {
                        if (err !== null) {
                            reject(err);
                        } else {
                            resolve(ms);
                        }
                    };
                    operation(next);
        });

        promises.push(operation);
    });

    Promise.all(promises)
            .then(function (resolve) {
                callback(null, resolve);
            })
            .catch(function (reject) {
                callback(reject, null);
            });
};