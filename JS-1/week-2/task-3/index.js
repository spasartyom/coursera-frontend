// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandName = command.split(' ')[0];
    
    if (commandName == 'ADD'){
        function ADD(){
            var name = command.split(' ')[1];
            var phone = command.split(' ')[2];
            var phones = phone.split(',');
            if(!phoneBook.hasOwnProperty(name)){
                phoneBook[name] = phones;
            } else {
                for (i = 0; i < phones.length; i++){
                    phoneBook[name].push(phones[i]);
                }
            }

            return phoneBook;
        }
        return ADD();
    }

    if (commandName == 'REMOVE_PHONE'){
        function remove(){
            var numb = (command.split(' ')[1]);

            for (i = 0; i < Object.keys(phoneBook).length; i++) {
                var key = Object.keys(phoneBook)[i];
                var x = phoneBook[key].indexOf(numb);
                if (x != -1) {
                    phoneBook[key].splice(x, 1);
                    return true;
                }
                
            }
            return false;
  
        }
        return remove();
    }

    if (commandName == 'SHOW'){
        function show(){
            var phones = [];
            for (name in phoneBook) {
                if (phoneBook[name] && phoneBook[name].length > 0){
                    phones.push(name +': ' + phoneBook[name].join(', '));
                }
            }
        return phones.sort();
            
        }
        return show();
    }
};
