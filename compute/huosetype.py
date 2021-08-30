#coding=gbk
import pymysql
from MySQLdb.constants.FIELD_TYPE import VARCHAR

from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StructField, StringType, Row, DoubleType
# 读取数据
conn=pymysql.connect(host="10.20.220.203",user="root",password="sx2626",database="python",charset='utf8')
cursor=conn.cursor()
cursor.execute('select house_area,house_HouseType from data')
type=cursor.fetchall()
huxing=["1室","2室","3室","4室","5室及以上"]
types= {}
area=["江北","大渡口","南岸","巴南","渝中","渝北","沙坪坝","北碚","九龙坡"]
areatype={}
for nums in range(len(type)):
    types[nums]=type[nums][1][:2]
def typearea(area):
    num = [0, 0, 0, 0, 0]
    for nums in range(len(type)):
        if type[nums][0]==area:
            for i in range(len(huxing)):
                if types[nums] == huxing[i]:
                    num[i] += 1
            if types[nums] != "1室" and types[nums] != "2室" and types[nums] != "3室" and types[nums] != "4室":
                num[4] += 1
    # print(area,num)
    return num
for i in range(len(area)):
    num=typearea(area[i])
    for y in range(len(num)):
        areatype[len(areatype)]=(area[i],huxing[y],num[y])
print(areatype[0])
#将数据写入数据库
query = "insert into housestype (houses_area,houses_HouseType,number) values (%s,%s,%s)"
for r in range(len(areatype)):
    houses_area=areatype[r][0]
    houses_HouseType=areatype[r][1]
    number=areatype[r][2]
    values=(houses_area,houses_HouseType,number)
    cursor.execute(query,values)
conn.commit()