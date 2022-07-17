# INSTRUCTIONS

# Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

# The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

# def add10(x): return x + 10
# def mul30(x): return x * 30

# chain(50, [add10, mul30])
# returns 1800

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

# INSTRUCCIONES

# Escriba un encadenador de funciones genérico que tome un valor inicial y una matriz de funciones para ejecutar en él (matriz de símbolos para Ruby).

# La entrada de cada función es la salida de la función anterior (excepto la primera función, que toma el valor inicial como entrada). Devuelve el valor final una vez completada la ejecución.

# def add10(x): return x + 10
# def mul30(x): return x * 30

# chain(50, [add10, mul30])
# returns 1800

def chain(init_val, functions):
    for f in functions:
        init_val = f(init_val)
    return init_val

