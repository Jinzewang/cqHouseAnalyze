import pymysql

conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python", charset='utf8')
cursor = conn.cursor()

area = ['江北', '渝北', '渝中', '南岸', '巴南', '北碚', '沙坪坝', '大渡口', '九龙坡']

query = "SELECT CAST(house_HouseSize AS UNSIGNED), house_area FROM `data` WHERE house_area= %s"
inter1 = 0
inter2 = 0
inter3 = 0
inter4 = 0
dic = {}
for a in area:
    cursor.execute(query, a)
    temp = cursor.fetchall()
    for size in temp:
        if size[0] <= 50:
            inter1 = inter1 + 1
        elif size[0] <= 100:
            inter2 = inter2 + 1
        elif size[0] <= 200:
            inter3 = inter3 + 1
        else:
            inter4 = inter4 + 1
    dic[a] = [inter1, inter2, inter3, inter4]
# UPDATE house_size SET interval0= 1, interval1= 2, interval2= 3, interval3= 4 WHERE area = '江北'
updata_query = "UPDATE house_size SET interval0= %s, interval1= %s, interval2= %s, interval3= %s WHERE area = %s"
for k, v in dic.items():
    cursor.execute(updata_query, [v[0], v[1], v[2], v[3], k])
    conn.commit()
cursor.close()
conn.close()