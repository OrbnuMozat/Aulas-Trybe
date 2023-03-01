import csv
# import json
import random

WORDS = []
ATTEMPTS = 3


# JSON
""" with open("words.json", mode="r") as file:
    WORDS = json.load(file)["words"] """


# CSV
with open("words.csv", mode="r") as f:
    content = csv.reader(f, delimiter=",")
    header, *data = content
    for item in data:
        WORDS.append(item[0])


def secret_word(words):
    random_word = random.choice(WORDS)
    scramble = "".join(random.sample(random_word, len(random_word)))
    return random_word, scramble


def get_guesses(word):
    user_attempts = 0
    user_guess = []
    while word not in user_guess and user_attempts < ATTEMPTS:
        user_guesses = input(
            f"Guess the word in {ATTEMPTS - user_attempts} chances: "
            )
        user_guess.append(user_guesses)
        user_attempts += 1
    return user_guess


def game_result(word, guesses):
    if word in guesses:
        print(f"You win! The word was: {word}")
    else:
        print(f"You lose. Secret word: {word}")


if __name__ == "__main__":
    word, scramble = secret_word(WORDS)
    print(f"Scramble word is: {scramble}")
    user_guesses = get_guesses(word)
    game_result(word, user_guesses)
