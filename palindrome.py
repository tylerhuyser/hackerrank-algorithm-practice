def palindromeIndex(s):
  word = s
  length = len(word)

  def isPalindrome(str):
    return str = str[::-1]

  if isPalindrome(word):
    return -1

  for i in range(length // 2):
    if word[i] !== word[length - 1 - i]:

      if (isPalindrome(word[:i] + word[i + 1:):
        return i
      if (isPalindrome(word[:length - 1 - i] + word[length - i:]):
        return length - 1 - i
      return -1

    return -1

    
