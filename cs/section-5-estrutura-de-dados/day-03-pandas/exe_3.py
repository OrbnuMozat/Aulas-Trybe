import pandas as pd

ipea_2015 = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62],
}

ipea_dataframe = pd.DataFrame(ipea_2015)

ipea_shape = ipea_dataframe.shape

print(f"Resposta 1 --> Linhas: {ipea_shape[0]}, Colunas: {ipea_shape[1]}")

media_in_street = ipea_dataframe["População em situação de rua"].describe()

print(f'Resposta 3 --> A média é: {media_in_street["mean"]}')

media_total_in_street = ipea_dataframe[
    "Total em situação de rua (%)"
].describe()

print(
    f"Resposta 4 --> Menor Quantidade {media_total_in_street['min']},"
    f" Maior Quantidade {media_total_in_street['max']}"
)
