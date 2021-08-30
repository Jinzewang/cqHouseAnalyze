#coding=utf-8
import pandas as pd
import pymysql

"""
在所有爬取数据中，将需要字段提取出来放在自己数据库中
"""
conn = pymysql.connect(host='localhost', user='root', passwd='sx2626', port=3306, db='python', charset='utf8')
cursot = conn.cursor()
cursot.execute("select house_area,house_NumPeople,house_Decoration,house_UnitPrice from data")
data_1 = cursot.fetchall()
# print(data_1)
from pandas.core.frame import DataFrame
data = DataFrame(data_1)                    #以行为标准写入的
# print(data)

"""
drop=True就是把原来的索引index列去掉，重置index。  drop=False就是保留原来的索引，添加重置的index。
inplace=False（默认）表示原数组不变，对数据进行修改之后结果给新的数组。  inplace=True表示直接在原数组上对数据进行修改。
"""

data.sort_index(inplace=True, ascending=True)
data.reset_index(inplace=True, drop=True)

def func1(item):  # 将关注人数的单位清洗掉
    NumPeople = str(item).split("人关注")[0]
    return (NumPeople)

def func2(item):  # 将单价的单位清洗掉
    price = item.split("元/平米")[0]
    return (price)

data["area"] = data[0]
data["NumPeople"] = data[1].map(func1)
data["UnitPrice"] = data[3].map(func2)
data["Decoration"] = data[2]
data = data.loc[:, ["area", "NumPeople","UnitPrice",'Decoration']]
print(data)

# #将清洗的数据写如csv文件
# data.to_csv("mydata.csv", encoding="utf_8_sig",sep=" ",index=None,header=None,mode='a+')
#

sql="""insert into data_K(area,NumPeople,UnitPrice,Decoration,a) values (%s,%s,%s,%s,1);""" #向数据库增加数据
mc=data.values.tolist()
# print(mc)
try:
    cursot.executemany(sql,mc)  #一次性全部写入数据
    cursot.execute("UPDATE data_K set UnitPrice='0' WHERE Decoration='0';")     #将装修情况未知的房屋的单价置为0
    conn.commit()
except Exception as e:
    print(e)
    conn.rollback()
conn.close()

