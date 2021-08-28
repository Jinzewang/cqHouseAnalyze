import pymysql

conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python", charset='utf8')
cursor = conn.cursor()
# SELECT house_area, house_floor FROM `data` WHERE house_floor REGEXP '^[0-9]'
top = "SELECT house_area, COUNT(a) FROM `data` WHERE house_floor LIKE '高%' GROUP BY house_area"
cursor.execute(top)
floor_top = cursor.fetchall()
mid = "SELECT house_area, COUNT(a) FROM `data` WHERE house_floor LIKE '中%' GROUP BY house_area"
cursor.execute(mid)
floor_mid = cursor.fetchall()
low = "SELECT house_area, COUNT(a) FROM `data` WHERE house_floor LIKE '低%' GROUP BY house_area"
cursor.execute(low)
floor_low = cursor.fetchall()
query1 = "update floor_location set floor_top= %s where area= %s"
for top in floor_top:
    cursor.execute(query1, [top[1], top[0]])
    conn.commit()
query2 = "update floor_location set floor_mid= %s where area= %s"
for mid in floor_mid:
    cursor.execute(query2, [mid[1], mid[0]])
    conn.commit()
query3 = "update floor_location set floor_low= %s where area= %s"
for low in floor_low:
    cursor.execute(query3, [low[1], low[0]])
    conn.commit()
cursor.close()
conn.close()
