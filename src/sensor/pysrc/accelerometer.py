from sense_hat import SenseHat

sense = SenseHat()
sense.clear()

accel_only = sense.get_accelerometer()
print("{"+"\"p\": {pitch}, \"r\": {roll}, \"y\": {yaw}".format(**accel_only)+"}")
