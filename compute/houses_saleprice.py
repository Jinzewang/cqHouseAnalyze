#将房屋总价写入数据库

import pymysql
import pandas as pd
#连接数据库
conn=pymysql.connect(
    host="10.20.220.203",
    port=3306,
    user="root",
    passwd="sx2626",
    db="python")

#创建游标
cur=conn.cursor()
#查询t_test表的所需字段数据
cur.execute("select house_area,house_LocationName,house_TotalPrice,house_UnitPrice from data")#有了这一步才能进行下面的操作

#获取表的所有数据
data=cur.fetchall()
data_list=list(data)
data_priceInfo=pd.DataFrame(data_list,columns=["house_area",'house_LocationName','house_TotalPrice','house_UnitPrice'])
count=0
for i in data_priceInfo.house_area:
    values = (count+1,data_priceInfo.house_area[count], data_priceInfo.house_LocationName[count], data_priceInfo.house_TotalPrice[count],
              data_priceInfo.house_UnitPrice[count])
    count=count+1
    cur.execute("insert into price_analysis(house_id,houses_area,houses_LocationName,houses_TotalPrice,houses_UnitPrice) "
                "values (%s,%s,%s,%s,%s)",values)  # 将数据插入到数据库
    conn.commit()  # 提交
