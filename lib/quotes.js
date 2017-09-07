module.exports = function (str) {
    var match = str.match(/".+?"/g)
    return match ? match : ['""']
}