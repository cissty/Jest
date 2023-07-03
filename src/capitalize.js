function capitalize(str){
    if (str.length === 0) {
        return str;
      }

    const capitalizeLatter = str[0].toUpperCase()
    const string = str.slice(1);
    return capitalizeLatter + string;
}

module.exports = {
    capitalize,
};