/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let devoweledString = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != "a" && s.charAt(i) != "e" && s.charAt(i) != "i" && s.charAt(i) != "o" && s.charAt(i) != "u") {
            devoweledString += s[i]
            }
        }
    return devoweledString;
};

/*
Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Example 1:

Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: s = "aeiou"
Output: ""

Constraints:

1 <= s.length <= 1000
s consists of only lowercase English letters.
*/
