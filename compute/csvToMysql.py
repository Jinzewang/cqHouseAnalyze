#coding=utf-8
import pandas as pd
import pymysql

data = pd.read_csv("data.csv", header=None, sep=',', encoding='utf-8')  # 打开读取csv文件
"""
drop=True就是把原来的索引index列去掉，重置index。  drop=False就是保留原来的索引，添加重置的index。
inplace=False（默认）表示原数组不变，对数据进行修改之后结果给新的数组。  inplace=True表示直接在原数组上对数据进行修改。
"""
data.sort_index(inplace=True, ascending=True)
data.reset_index(inplace=True, drop=True)
print(data)

db= pymysql.connect(host='localhost',user='root',passwd='sx2626',port=3306,db='python',charset='utf8')  #连接数据库
cursor= db.cursor()
sql="""insert into data(
house_area,
house_LocationName ,
house_CommunityName,
house_HouseType,
house_HouseSize,
house_Decoration,
house_orientation ,
house_floor ,
house_BuildingTime ,
house_structureType ,
house_NumPeople,
house_ReleaseTime,
house_TotalPrice ,
house_UnitPrice,
a) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,1);""" #向数据库增加数据

# #将data数据中为空的地方用0替换
# # data_1 = data.fillna('')
# # print(data_1)
#
#

mc=data.values.tolist()
# print(mc)
try:
    cursor.executemany(sql,mc)  #一次性全部写入数据
    db.commit()
except Exception as e:
    print(e)
    db.rollback()
db.close()
