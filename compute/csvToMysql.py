#coding=utf-8
import pandas as pd
import pymysql
data = pd.read_csv("data.csv", header=None, sep=',', encoding='utf-8')  # 打开读取csv文件
db= pymysql.connect(host='localhost',user='root',passwd='sx2626',port=3306,db='python',charset='utf8')  #连接数据库
cursor= db.cursor()
sql="""insert into data(
house_area,house_LocationName ,house_CommunityName,house_HouseType,house_HouseSize,house_Decoration,
house_orientation ,house_floor ,house_BuildingTime ,house_structureType ,house_NumPeople,house_ReleaseTime,
house_TotalPrice ,house_UnitPrice,
a) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,1);""" #向数据库增加数据

# #将data数据中为空的地方用0替换
# # data_1 = data.fillna('')
# # print(data_1)

mc=data.values.tolist()
try:
    cursor.executemany(sql,mc)  #一次性全部写入数据
    db.commit()
except Exception as e:
    print(e)
    db.rollback()
db.close()
