import string

def caesarCipher(s, k):
    message = s
    shift = k % 26
    alphabet = list(string.ascii_lowercase)
    print(alphabet)
    code = ''
    
    for character in message:
        if character in alphabet:
            index = alphabet.index(character)
            newIndex = (index + shift) % 26
            code += alphabet[newIndex]
        elif character.lower() in alphabet:
            index = alphabet.index(character.lower())
            newIndex = (index + shift) % 26
            code += alphabet[newIndex].upper()
        else:
            code += character
    
    return code
