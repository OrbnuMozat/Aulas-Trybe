import json

with open("pokemons.json") as file:
    content = file.read()  # Leitura
    pokemons = json.loads(content)["results"]
    # Transforma numa estrutura Python e
    # acessa chave results que é onde estão os dados deste arquivo


print('Pokemons: ', pokemons[0])

# Leitura sendo feita diretamente
with open("pokemons.json") as new_file:
    pokemons_direct = json.load(new_file)["results"]


print('Pokemons lidos diretamente: ', pokemons_direct[0])


# Escrita em JSON
with open("pokemons.json") as pok_file:
    pokemons_list = json.load(pok_file)["results"]


grass_type_pokemons = [
    pokemon for pokemon in pokemons_list if "Grass" in pokemon["type"]
    ]


with open("grass_pokemons.json", mode="w") as new_pok_file:
    json_to_write = json.dumps(grass_type_pokemons)  # converte para json
    # p/ fazer a escrita diretamente sem precisar da linha 34
    # json_to_write = json.dumps(grass_type_pokemons, new_pok_file)
    new_pok_file.write(json_to_write)
