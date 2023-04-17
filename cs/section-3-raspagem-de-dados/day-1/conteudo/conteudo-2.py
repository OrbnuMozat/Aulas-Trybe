import requests
from parsel import Selector

url = "http://books.toscrape.com/"

response = requests.get(url)
selector = Selector(text=response.text)
# print(selector)

titles = selector.css(".product_pod h3 a::attr(title)").getall()
prices = selector.css(".product_price .price_color::text").getall()
# print(prices, titles)

for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)

# Existe uma classe next, que podemos recuperar a url
# através do seu elemento âncora
next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)
