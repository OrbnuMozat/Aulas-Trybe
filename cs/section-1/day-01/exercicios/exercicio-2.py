import random

random_list = random.sample(range(0, 100), 10)


def number_average(list):
    return sum(list) / len(list)


print(number_average(random_list))
