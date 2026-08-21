import { isAnagram } from "./is-anagram.ts";

function groupAnagrams(list: string[]) {
  const result = [];
  const filteredList = [...list];

  for (let i = 0; i < filteredList.length; i++) {
    result.push([filteredList[i]]);

    for (let j = i + 1; j < filteredList.length; j++) {
      if (isAnagram(filteredList[i], filteredList[j])) {
        result[i].push(filteredList[j]);

        filteredList.splice(j, 1);
        j--;
      }
    }
  }

  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
