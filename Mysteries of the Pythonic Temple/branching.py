import sys

x = int(sys.argv[1]) + int(sys.argv[2])

if x <= 0:
    print('You have chosen the path of destitution.')

elif x <= 100:
    print('You have chosen the path of plenty.')

else:
    print('You have chosen the path of excess.')
