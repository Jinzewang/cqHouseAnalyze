#coding=gbk
import pymysql

# 读取数据
conn=pymysql.connect(host="10.20.220.203",user="root",password="sx2626",database="python",charset='utf8')
cursor=conn.cursor()
cursor.execute('select house_HouseType from data')
type=cursor.fetchall()
huxing=["1室","2室","3室","4室","5室及以上"]
types= {}
num=[0,0,0,0,0]
for nums in range(len(type)):
    types[nums]=type[nums][0][:2]
for nums in range(len(type)):
    for i in range(len(huxing)):
        if types[nums]==huxing[i]:
            num[i]+=1
    if types[nums]!="1室" and types[nums]!="2室"and types[nums]!="3室"and types[nums]!="4室":
            num[4]+=1
print(len(types))
print(num)
print(len(type))
#将数据写入数据库
query = "insert into housestype (houses_HouseType,number) values (%s,%s)"
for r in range(len(num)):
    houses_HouseType=huxing[r]
    number=num[r]
    values=(houses_HouseType,number)
    cursor.execute(query,values)
conn.commit()