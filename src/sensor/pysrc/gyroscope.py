from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

pitch, roll, yaw = sense.get_gyroscope_raw().values()
print("{"+"\"p\": "+str(pitch)+", \"r\": "+str(roll)+", \"y\": "+str(yaw)+"}")
