class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        for (const word of strs) {
            const count = new Array(26).fill(0);
            for (const ch of word) count[ch.charCodeAt(0) - 97]++;
            const key = count.join('#')
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key).push(word)
        }

        return [...groups.values()];
    }
}
