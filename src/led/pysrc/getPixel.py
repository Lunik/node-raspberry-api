import sys
from sense_hat import SenseHat

if(sys.argv[1]):
    x = int(sys.argv[1])
else:
    x = 0

if(sys.argv[2]):
    y = int(sys.argv[2])
else:
    y = 0

sense = SenseHat()

pixel = sense.get_pixel(x, y)

print(pixel)
