/**
 * Calculate the number of occurrences of each word in a text.
 * Words less than two letters are ignored.
 *
 * @param {String} text The input string.
 * @return {Object} An object with each word as a property and their occurence as a value.
 *
 */
module.exports = function (text) {
  const out = {}
  const re = /n't|\W[a-z]'|'[a-z]\W|[^a-z'ÀÁÂĂÂÃÈÉÊÌÎÍÒÓÔÕȘȚÙÚĂĐĨŨƠàáăââãèéêîìíòóôõùúășțđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g
  const wordsArray = text
    .toLowerCase()
    .replace(re, ` `)
    .split(' ')
    .filter(word => word.length > 1)
    .forEach(word => {
      if (word in out) {
        out[word] += 1
      } else {
        out[word] = 1
      }
    })
  return out
}
