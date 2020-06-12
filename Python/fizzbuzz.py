import sys

def Fizzbuzz(number):
    if number%3 == 0:
        if number%5 == 0:
            print("fizzbuzz")
        else:
            print("fizz")
    elif number%5 == 0:
        print("buzz")
    else:
        print(number)

numbers = sys.argv[1:]
for number in numbers:
    Fizzbuzz(int(number))
