# Receba um nome e imprima o mesmo na vertical em escada invertida.


def invert_name(name):
    for letter_qtd_to_remove in range(len(name)):
        for index in range(len(name) - letter_qtd_to_remove):
            print(name[index], end="")
        print()


if __name__ == "__main__":
    user_name = input('Digite seu nome: ')
    invert_name(user_name)
