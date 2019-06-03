/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arr_hash = [];
    var is = tweet.indexOf('#');
    var arr_space = [];
    var is_space = tweet.indexOf(' ', is);
    var final_arr = [];

    while(is != -1){
        arr_hash.push(is);
        arr_space.push(is_space);
        is = tweet.indexOf('#', is + 1);
        is_space = tweet.indexOf(' ', is);
    }

    for (i = 0; i < arr_hash.length; i++){
        if (arr_space[i] != -1) {
            var tmp = tweet.substring(arr_hash[i]+1, arr_space[i]);
            final_arr.push(tmp);
        } else {
            var tmp1 = tweet.substring(arr_hash[i]+1);
            final_arr.push(tmp1);
        }
    }
    return final_arr;
};
