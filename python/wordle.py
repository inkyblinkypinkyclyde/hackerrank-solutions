import requests

def get_word(length):
    r = requests.get(f'https://random-word-api.herokuapp.com/word?length={length}')
    return r.json()[0]
    return 'test'
    
def wordle():
    score = 0
    while True:
        word_length = int(input('Enter a word length: '))
        word = get_word(word_length)
        attempt_number = 1
        playing = True
        while playing:
            guess = input(f'Guess the word (attempts {attempt_number}): ')
            return_array = []
            if len(guess) != len(word):
                print('The word is not the correct length')
            else:
                for letter in range(len(word)):
                    if word[letter] == guess[letter]:
                        return_array.append(word[letter])
                    else:
                        return_array.append('_')
                print(return_array)
                if guess == word:
                    print('You win!')
                    score += 1
                    print(f'Your score is score {score}')
                    break
            attempt_number += 1

wordle()
    
