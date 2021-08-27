# #coding=gbk
import json
import pymysql
from config import db

"""
本视图专门用于处理ajax数据
"""
from flask import Blueprint
from dbmodel.floor_location import FloorLocation
from dbmodel.house_size import HouseSize

data = Blueprint('data', __name__)
conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
                       charset='utf8')
cursor1 = conn.cursor()
cursor1.execute('select houses_avgUnitPrice,houses_area from avgprice')
cursor2 = conn.cursor()
cursor2.execute('select houses_HouseType,number from housestype')

@data.route("/getFloor", methods=['GET'])
def get_floor():
    conn = pymysql.connect(host="localhost", user="root", password="root", database="cqhouseanalyze",
                           charset='utf8')
    cursor = conn.cursor()
    cursor.execute('select floor_top, floor_mid, floor_low from floor_location')
    data = cursor.fetchall()
    view_data = {'view_data': data}
    return json.dumps(view_data, ensure_ascii=False)


@data.route("/getHouseSize", methods=['GET'])
def get_house_size():
    conn = pymysql.connect(host="localhost", user="root", password="root", database="cqhouseanalyze",
                           charset='utf8')
    cursor = conn.cursor()
    cursor.execute('select interval0, interval1, interval2, interval3 from house_size')
    data = cursor.fetchall()
    view_data = {'view_data': []}
    interval1 = []
    interval2 = []
    interval3 = []
    interval4 = []
    for i in data:
        interval1.append(i[0])
        interval2.append(i[1])
        interval3.append(i[2])
        interval4.append(i[3])
    view_data['view_data'].append(interval1)
    view_data['view_data'].append(interval2)
    view_data['view_data'].append(interval3)
    view_data['view_data'].append(interval4)
    return json.dumps(data, ensure_ascii=False)


@data.route('/getAvg', methods=['GET'])
def get_avg():
    price = cursor1.fetchall()
    avg = {}
    area = {}
    for i in range(len(price)):
        avg[i] = price[i][0]
        area[i] = price[i][1]
    avgs = {
        'avg': avg,
        'area': area
    }
    avgs = json.dumps(avgs)
    return avgs


@data.route('/getType', methods=['GET'])
def get_type():
    num = cursor2.fetchall()
    numb = {}
    type = {}
    for i in range(len(num)):
        type[i] = num[i][0]
        numb[i] = num[i][1]
    data = {
        'numb': numb,
        'type': type
    }
    data = json.dumps(data)
    return data
