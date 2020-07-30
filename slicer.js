module.exports = function (str) {
    let counter = 1
    let newStr = ""

    for (let char of str) {
        if (counter % 3 === 0) {
            newStr += (char)
        }

        counter++
    }

    return newStr
}
