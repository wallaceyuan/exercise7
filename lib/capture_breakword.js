module.exports = function (str) {
    const match = str.match(/\bx=(\d+)\b/)
    return match ? match[1] : null
}