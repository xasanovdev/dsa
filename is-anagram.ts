export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const lettersA = new Map();
  const lettersB = new Map();

  for (let i = 0; i < s.length; i++) {
    if (lettersB.has(s[i])) {
      lettersB.set(s[i], lettersB.get(s[i]) + 1);
    } else {
      lettersB.set(s[i], 1);
    }

    if (lettersA.has(t[i])) {
      lettersA.set(t[i], lettersA.get(t[i]) + 1);
    } else {
      lettersA.set(t[i], 1);
    }
  }

  for (let [label, value] of lettersA.entries()) {
    if (!lettersB.has(label) || lettersB.get(label) !== value) return false;
  }

  return true;
}

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("ab", "cc"));
