from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

north = sense.get_compass()
print(north)
