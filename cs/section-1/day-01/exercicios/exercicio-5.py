import math


def paint_meters(square_meter):
    cover = 1 / 3
    lt = cover * square_meter
    latas = math.ceil(lt / 18)
    price = latas * 80
    buy = latas, f"R${price}"

    return buy


print(paint_meters(500))
