names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


greater_name = ""


for name in names_list:
    if len(name) > len(greater_name):
        greater_name = name


print(greater_name)
