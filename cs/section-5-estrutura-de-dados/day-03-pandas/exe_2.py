import pandas as pd

friends_preferences = {
  "name": ["Samira", "Chloe", "Bruno"],
  "favority_food": ["lazanha", "pizza", "pizza"],
  "favority_dessert": ["pie", "chocolate", "ice_cream"]
}

names = pd.Series(friends_preferences["name"])
food = pd.Series(friends_preferences["favority_food"])
dessert = pd.Series(friends_preferences["favority_dessert"])

print(names)
print(food)
print(dessert)
