with open("books_categories_percent.csv", mode="w") as f:
    writer = csv.writer(f)
    header = ["categoria", "porcentagem"]
    writer.writerow(header)

    for 