const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR";
    }
    let string = "";
    for (i = 0; i < num; i++) {
    string += text;
}
    return string;
};

repeatString ("hey", 3);

// Do not edit below this line
module.exports = repeatString;
