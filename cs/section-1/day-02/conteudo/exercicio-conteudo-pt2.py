try:
    aprovados = ""
    with open("estudantes.txt", mode="r") as file:
        for line in file:
            line = line.split()
            if int(line[1]) >= 6:
                aprovados += f"{line[0]}\n"

    with open("aprovados", mode="w") as file:
        file.write(aprovados)
except OSError:
    print("erro ao ler arquivo e salvar aprovados")
finally:
    print(
        "Tentativa de ler arquivo e criar aprovados.")
