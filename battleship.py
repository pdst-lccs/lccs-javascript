from random import randint
#import random

randomLoc = randint(1, 6)

location1 = randomLoc
location2 = location1 + 1
location3 = location1 + 2

#guess;
hits = 0;
isSunk = False

while (isSunk == False):
    guess = int(input("Ready, aim, fire! (enter a number from 0-6):"))
    if (guess < 0 or guess > 6):
        print("Please enter a valid cell number!")
    else:
        if (guess == location1 or guess == location2 or guess == location3):
            print("HIT!")
            hits = hits + 1
            if (hits == 3):
                isSunk = True
                print("You sank my battleship!")
        else:
            print("MISS")

