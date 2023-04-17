from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# Instancia um objeto da classe 'Options'
options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
# Este argumento executa o scrap sem ~"abrir" o navegador
options.add_argument("--headless")


chrome = webdriver.Chrome(options=options)


chrome.get("https://bookes.toscrape.com/")


def scrape(url):
    chrome.get(url)

    books = []

    # Itera os elementos com essa classe
    for book in chrome.find_elements(By.CLASS_NAME, "product_pod"):
        # Dict vazio para guardar elementos capturados
        new_item = {}
        # Cria uma chave ´title'para receber o titulo
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )
        # O preço do book está em um elemento da classe 'price_color'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")
        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)
    return books


chrome.get("https://books.toscrape.com/")

all_books = []
url2request = "https://books.toscrape.com/"

# Cria uma variável com o seletor que captura o link do botão de passar para
# a próxima página
next_page_link = chrome.find_element(By.CLASS_NAME, "next").get_attribute(
    "innerHTML"
)

# Enquanto este botão de 'next' existir na página ele irá iterar
while next_page_link:
    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(url2request))
    try:
        url2request = (
            chrome.find_element(By.CLASS_NAME, "next")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
    except NoSuchElementException:
        print("exception handled")
        break

print(all_books)
