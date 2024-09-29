def f(n):
    result = n + 1
    while result % n == 0:
        result += 1
    return result
    