module.exports = function (str) {
    const match = str.match(/x=(\d+)/)
    return match? match[1]: null
}