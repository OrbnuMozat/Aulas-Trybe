import requests
from parsel import Selector

# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        # price = product.css(".price_color::text").get()

        # price limpo
        price = product.css(".price_color::text").re(r"£\d+\.\d{2}")[0]

        # print(title, price)

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        # ~ significa a tag irmã
        description = detail_selector.css(
            "#product_description ~ p::text"
        ).get()

        # limpando description
        suffix = "...more"
        if description.endswith(suffix):
            # description = description[: -len(suffix)]
            """À partir da versão 3.9 do Python,
            teremos uma função chamada removesuffix,
            que é equivalente à palavra[:-len(suffix)]."""
            description = description.removesuffix(suffix)

        # print(description)

        print(
            f"Book title: {title}\n"
            f"Book price: {price}\n"
            f"Book description: {description}"
        )

    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
