import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader


# Podemos verificar quantos cursos são ofertados por departamento.
group_by_department = {}
for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1


# Escrever o relatório em csv
with open("department_report.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)

    # Cabeçalho
    headers = [
        "Departamento",
        "Total de Cursos"
    ]
    writer.writerow(headers)

    # Dados
    for department, grades in group_by_department.items():  # desempacota
        row = [
            department,
            grades,
        ]
        writer.writerow(row)
