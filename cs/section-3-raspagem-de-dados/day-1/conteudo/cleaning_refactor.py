import requests
from parsel import Selector

regex_price = r"£\d+\.\d{2}"
# £ -> libras
# \d+ -> dígitos
# \. -> ponto
# \d{2} -> dois dígitos(casas decimais)

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

# Extrai todos os preços da primeira página
""" Agora, para utilizar a expressão regular que fizemos,
podemos substituir o método getall pelo método re,
ou o método get por re_first. """
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)

response_description = requests.get(
    "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
)
selector_description = Selector(text=response_description.text)

# Extrai a descrição
description = selector_description.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
print(description)
