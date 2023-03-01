class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def velocidade_maxima(self, velocidade):
        self.__velocidade_maxima = velocidade

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Ventilador(Eletrodomestico):
    def __init__(
        self, cor, potencia, tensao, preco, velocity=None, size="38cm"
    ):
        super().__init__(cor, potencia, tensao, preco)
        if velocity is not None:
            self.__velocidade = velocity
            super().velocidade_maxima(velocity)
        else:
            self.__velocidade = 3
        self.__size = size

    def __str__(self) -> str:
        return (
            f"Ventilador {super().cor} de {self.__velocidade}"
            f" velocidades e {self.__size}"
          )


class Pessoa:
    def __init__(self, name, age, account_value):
        self.name = name
        self.age = age
        self.account_value = account_value
        self.ventilator = None

    def buy_ventilator(self, ventilator):
        if ventilator.preco < self.account_value:
            self.account_value -= ventilator.preco
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
    potencia=500,
    tensao=110,
    preco=250,
    velocity=3,
    size="38cm"
    )
customer.buy_ventilator(ventilador_38cm)
print(customer)
