class Ventilador:
    def __init__(self, cor, velocity, size, price):
        self.__velocity = velocity
        self.__size = size
        self.price = price
        self.__cor = cor

    def cor(self):
        return self.__cor

    def __str__(self) -> str:
        return f"Ventilador {self.__cor} de {self.__velocity} e {self.__size}"


class Pessoa:
    def __init__(self, name, age, account_value):
        self.name = name
        self.age = age
        self.account_value = account_value
        self.ventilator = None

    def buy_ventilator(self, ventilator):
        if ventilator.price < self.account_value:
            self.account_value -= ventilator.price
            self.ventilator = ventilator

    def __str__(self) -> str:
        if self.ventilator is not None:
            return (
                f"{self.name} possui um: {self.ventilator}"
                )
        else:
            return f"{self.name} não possui ventilador"


customer = Pessoa('Bruno', age=37, account_value=1000)
print(customer)
ventilador_38cm = Ventilador(
    "Preto",
    velocity="3 velocidades",
    size="38cm",
    price=250
    )
customer.buy_ventilator(ventilador_38cm)
print(customer)
