import sys
import os
from sense_hat import SenseHat

if(sys.argv[1]):
    image = sys.argv[1]
else:
    image = 'default'

sense = SenseHat()
sense.clear()

sense.load_image(image)
