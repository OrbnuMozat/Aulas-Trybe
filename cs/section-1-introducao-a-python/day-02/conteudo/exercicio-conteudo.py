user_name = input('Me diga o seu nome: ')


for letra in user_name:
    print(letra)


naturals_numbers = input(
    'Digite alguns números a serem somados, separados por espaço: '
    )


numbers_splitted = naturals_numbers.split(" ")
final_number = 0


for char in numbers_splitted:
    if not str.isdigit(char):
        print(f'Erro ao somar os valores, {char} é um valor inválido')
    else:
        final_number += int(char)


print(f'A soma dos valores é: {final_number}')

file = open("arquivo.txt", mode="w")
# ao abrir um arquivo para escrita, um novo arquivo é criado
# mesmo que ele já exista, sobrescrevendo o antigo.

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

file.close()


# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo


# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(line)
# não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo


# escrita
file = open("arquivo.dat", mode="wb")
file.write(b"C\xc3\xa1ssio 30")
# o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo
