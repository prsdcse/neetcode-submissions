class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        if (s === t) {
            return true
        }

        const sCharCodes = {};
        const tCharCodes = {};

        for (let char of s) {
            sCharCodes[char] = (sCharCodes[char] || 0) + 1;
        }

        for (let char of t) {
            tCharCodes[char] = (tCharCodes[char] || 0) + 1;
        }

        for (const key in sCharCodes) {
            if (!key in tCharCodes) {
                return false;
            }
            if (tCharCodes[key] !== sCharCodes[key]) {
                return false;
            }
        }

        return true;
    }
}
