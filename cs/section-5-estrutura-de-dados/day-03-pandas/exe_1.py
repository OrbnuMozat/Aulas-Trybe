import pandas as pd

friends_preferences = {
  "name": ["Samira", "Chloe", "Bruno"],
  "favority_food": ["lazanha", "pizza", "pizza"],
  "favority_dessert": ["pie", "chocolate", "ice_cream"]
}

my_dataframe = pd.DataFrame(friends_preferences)

print(my_dataframe)
