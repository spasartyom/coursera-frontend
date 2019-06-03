/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var final = [];
    var arr_str = [];
    for (i = 0; i < hashtags.length; i++){
        final[i] = hashtags[i].toLowerCase();
    }

    nextInput:
        for (i = 0; i < final.length; i++){
            var tmp = final[i];
            for (j = 0; j < arr_str.length; j++){
                if (arr_str[j] == tmp) continue nextInput;
            } 
            arr_str.push(tmp);
        }
    
    var str = arr_str.join(', ')
    return str;
};
