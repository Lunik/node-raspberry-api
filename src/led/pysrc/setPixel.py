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

if(sys.argv[3]):
    r = int(sys.argv[3])
else:
    r = 0

if(sys.argv[4]):
    g = int(sys.argv[4])
else:
    g = 0

if(sys.argv[5]):
    b = int(sys.argv[5])
else:
    b = 0

color = (r, g, b)
sense = SenseHat()

sense.set_pixel(x, y, color)
