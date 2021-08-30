import pandas as pd
import numpy as np
import pymysql
conn = pymysql.connect(host='10.20.220.203', user='root', passwd='sx2626', port=3306, db='python', charset='utf8')
cursot = conn.cursor()

#重庆各区二手房关注人数

#1.获取关注人数，并转换成列表
cursot.execute("select area,NumPeople from data_K")
row1 = cursot.fetchall()
# print(row1)
area_1 = np.array(row1)
area_2 = area_1.tolist()
# 2.将读取的列表类型数据转换为dataframe类型
from pandas.core.frame import DataFrame
data = DataFrame(area_2)                    #以行为标准写入的
# print(data)
data[1] = data[[1]].astype(int)             #将数据转化为int类型
data_1 = data.groupby(0)[1].sum()
data_2 = data.groupby(0)[1].mean().round(2)
print(data_2)

data_1=data_1.to_frame().reset_index()      #Series类型转为dataframe
data_2=data_2.to_frame().reset_index()      #Series类型转为dataframe
data_3=pd.concat([data_1, data_2], axis=1,ignore_index=True)    #将两个dataframe拼一起
data_4=data_3.loc[:,[0,1,3]]                                    #提取需要的列
print(data_4)


# 重庆各区二手房装修情况与单价间关系
#
# cursot.execute("select count(a),sum(UnitPrice),area,Decoration from data_K GROUP BY area,Decoration;")
# data_5 = cursot.fetchall()
#
# from pandas.core.frame import DataFrame
# data_5=DataFrame(data_5)
# data_5[4]=round((data_5[1]/data_5[0]),2)        #将data_5第2列单价总量与第一列数量作商并保留2位小数
# print(data_5)

#写入数据库

# sql_1="""insert into ZX(
# sum,sum_price,area,zx,avg) values (%s,%s,%s,%s,%s);""" #向数据库增加数据
#

sql_2="""insert into attention(
area,sum_people,avg_people) values (%s,%s,%s);""" #向数据库增加数据

xx=data_4.values.tolist()
# mc=data_5.values.tolist()
try:
    # cursot.executemany(sql_1,mc)  #一次性全部写入数据
    cursot.executemany(sql_2,xx)  #一次性全部写入数据
    conn.commit()
except Exception as e:
    print(e)
    conn.rollback()
conn.close()

