class Persona:
    def __init__(self, nombre, edad, peso, altura):
        self.nombre = nombre
        self.edad = edad
        self.peso = peso
        self.altura = altura

    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")

    def calcular_imc(self):
        imc = self.peso / (self.altura ** 2)
        print(f"Mi IMC es {imc:.2f}")

elprofe = Persona("Juan", 43, 76, 1.63)
elprofe.saludar()
elprofe.calcular_imc()