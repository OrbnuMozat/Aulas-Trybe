import csv
import json


def recover_books(file):
    return json.load(f)


def reduce_categories(books):
    categories_in_books = {}
    for categories in books:
        for category in categories["categories"]:
            if category not in categories_in_books:
                categories_in_books[category] = 0
            categories_in_books[category] += 1
    del categories_in_books[""]
    return categories_in_books


def calc_percent(category_count, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in category_count.items()
    ]


def alt_calc_percent(category_count, total_books):
    books = {}
    for category, qtd in category_count.items():
        books[category] = qtd / total_books
    return books


def write_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    for category, percent in rows.items():
        row = [category, percent]
        writer.writerow(row)
    # writer.writerow(rows)


if __name__ == "__main__":
    with open("books.json", mode="r") as f:
        books = recover_books(f)

    QUANTITY_OF_BOOKS = len(books)
    count_by_category = reduce_categories(books)
    books_percent_row = alt_calc_percent(count_by_category, QUANTITY_OF_BOOKS)
    # print(books_percent_row)

    with open("books_categories_percent.csv", mode="w") as f:
        header = ["categoria", "porcentagem"]
        write_csv(f, header, books_percent_row)
