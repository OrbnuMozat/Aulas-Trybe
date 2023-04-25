import pandas as pd

data = {
    "comida": [
        "abacate",
        "requeijão",
        "margarina",
        "doce de leite",
        "abacaxi",
    ],
    "tipo": ["doce", "salgado", "salgado", "doce", "doce"],
}

df = pd.DataFrame(data)

# Aqui filt pelo tipo "doce" passando df["tipo"] == "doce" como índice do loc.
comidas_doces = df.loc[df["tipo"] == "doce"]

print(comidas_doces)
