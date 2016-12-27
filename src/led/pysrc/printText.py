import sys
from sense_hat import SenseHat

if(sys.argv[1]):
    r = int(sys.argv[1])
else:
    r = 0

if(sys.argv[2]):
    g = int(sys.argv[2])
else:
    g = 0

if(sys.argv[3]):
    b = int(sys.argv[3])
else:
    b = 0

if(sys.argv[4]):
    text = sys.argv[4]
else:
    text = 'Hello World!'

color = (r, g, b)
sense = SenseHat()
sense.clear()

sense.show_message(text, text_colour=color)
