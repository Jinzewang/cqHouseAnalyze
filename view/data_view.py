# #coding=gbk
import json

import numpy as np
import pymysql
from config import db
import pandas as pd
"""
本视图专门用于处理ajax数据
"""
from flask import Blueprint

data = Blueprint('data', __name__)

def getdb():
    conn = pymysql.connect(
        host="10.20.220.203",
        port=3306,
        user="root",
        passwd="sx2626",
        db="python")
    cursor = conn.cursor()
    return cursor


#获取各售价区间房屋数量总数
@data.route("/getPriceAmount",methods=['GET'])
def get_Price_Amount():
    cursor = getdb()
    cursor.execute('select price_range,data_jiangbei,data_yubei,data_nanan,data_yuzhong,data_shapingba,data_jiulongpo,'
                   'data_banan,data_dadukou,data_beibei,data_sum from price_amount')
    Price_amount = cursor.fetchall()

    for i in Price_amount:
        if i[0] == '30万以下':
            UnderThirty_all=i[10]
        else:
            if i[0]=='30-60万':
                ThirtyToSixty_all=i[10]
            else:
                if i[0]=='60-100万':
                    SixtyToHundred_all=i[10]
                else:
                    if i[0]=='100-150万':
                        HundredToHfifty_all=i[10]
                    else:
                        if i[0]=='150-200万':
                            HfiftyToTHundred_all=i[10]
                        else:
                            AboveTHundred_all=i[10]

    price_amount_all={
        'UnderThirty':UnderThirty_all,
        'ThirtyToSixty':ThirtyToSixty_all,
        'SixtyToHundred':SixtyToHundred_all,
        'HundredToHfifty':HundredToHfifty_all,
        'HfiftyToTHundred':HfiftyToTHundred_all,
        'AboveTHundred':AboveTHundred_all
    }
    price_amount_all=json.dumps(price_amount_all)
    cursor.close()
    return price_amount_all

#获取各售价区间各区域房源数量
@data.route("/getPrice",methods=['GET'])
def get_Price():
    cursor = getdb()
    cursor.execute('select price_range,data_jiangbei,data_yubei,data_nanan,data_yuzhong,data_shapingba,data_jiulongpo,'
                   'data_banan,data_dadukou,data_beibei,data_sum from price_amount')
    Price_amount = cursor.fetchall()

    area=['江北','渝北','南岸','渝中','沙坪坝','九龙坡','巴南','大渡口','北碚']
    price_amount_jiangbei = {
        'area':area[0]
    }
    price_amount_yubei = {'area':area[1]}
    price_amount_nanan = {'area':area[2]}
    price_amount_yuzhong = {'area':area[3]}
    price_amount_shapingba = {'area':area[4]}
    price_amount_jiulongpo = {'area':area[5]}
    price_amount_banan = {'area':area[6]}
    price_amount_dadukou = {'area':area[7]}
    price_amount_beibei = {'area':area[8]}

    for i in Price_amount:
        if i[0] == '30万以下':
            price_amount_jiangbei['UnderThirty'] = i[1]
            price_amount_yubei['UnderThirty'] = i[2]
            price_amount_nanan['UnderThirty'] = i[3]
            price_amount_yuzhong['UnderThirty'] = i[4]
            price_amount_shapingba['UnderThirty'] = i[5]
            price_amount_jiulongpo['UnderThirty'] = i[6]
            price_amount_banan['UnderThirty'] = i[7]
            price_amount_dadukou['UnderThirty'] = i[8]
            price_amount_beibei['UnderThirty'] = i[9]
        else:
            if i[0]=='30-60万':
                price_amount_jiangbei['ThirtyToSixty'] = i[1]
                price_amount_yubei['ThirtyToSixty'] = i[2]
                price_amount_nanan['ThirtyToSixty'] = i[3]
                price_amount_yuzhong['ThirtyToSixty'] = i[4]
                price_amount_shapingba['ThirtyToSixty'] = i[5]
                price_amount_jiulongpo['ThirtyToSixty'] = i[6]
                price_amount_banan['ThirtyToSixty'] = i[7]
                price_amount_dadukou['ThirtyToSixty'] = i[8]
                price_amount_beibei['ThirtyToSixty'] = i[9]

            else:
                if i[0]=='60-100万':
                    price_amount_jiangbei['SixtyToHundred'] = i[1]
                    price_amount_yubei['SixtyToHundred'] = i[2]
                    price_amount_nanan['SixtyToHundred'] = i[3]
                    price_amount_yuzhong['SixtyToHundred'] = i[4]
                    price_amount_shapingba['SixtyToHundred'] = i[5]
                    price_amount_jiulongpo['SixtyToHundred'] = i[6]
                    price_amount_banan['SixtyToHundred'] = i[7]
                    price_amount_dadukou['SixtyToHundred'] = i[8]
                    price_amount_beibei['SixtyToHundred'] = i[9]

                else:
                    if i[0]=='100-150万':
                        price_amount_jiangbei['HundredToHfifty'] = i[1]
                        price_amount_yubei['HundredToHfifty'] = i[2]
                        price_amount_nanan['HundredToHfifty'] = i[3]
                        price_amount_yuzhong['HundredToHfifty'] = i[4]
                        price_amount_shapingba['HundredToHfifty'] = i[5]
                        price_amount_jiulongpo['HundredToHfifty'] = i[6]
                        price_amount_banan['HundredToHfifty'] = i[7]
                        price_amount_dadukou['HundredToHfifty'] = i[8]
                        price_amount_beibei['HundredToHfifty'] = i[9]
                    else:
                        if i[0]=='150-200万':
                            price_amount_jiangbei['HfiftyToTHundred'] = i[1]
                            price_amount_yubei['HfiftyToTHundred'] = i[2]
                            price_amount_nanan['HfiftyToTHundred'] = i[3]
                            price_amount_yuzhong['HfiftyToTHundred'] = i[4]
                            price_amount_shapingba['HfiftyToTHundred'] = i[5]
                            price_amount_jiulongpo['HfiftyToTHundred'] = i[6]
                            price_amount_banan['HfiftyToTHundred'] = i[7]
                            price_amount_dadukou['HfiftyToTHundred'] = i[8]
                            price_amount_beibei['HfiftyToTHundred'] = i[9]

                        else:
                            price_amount_jiangbei['AboveTHundred'] = i[1]
                            price_amount_yubei['AboveTHundred'] = i[2]
                            price_amount_nanan['AboveTHundred'] = i[3]
                            price_amount_yuzhong['AboveTHundred'] = i[4]
                            price_amount_shapingba['AboveTHundred'] = i[5]
                            price_amount_jiulongpo['AboveTHundred'] = i[6]
                            price_amount_banan['AboveTHundred'] = i[7]
                            price_amount_dadukou['AboveTHundred'] = i[8]
                            price_amount_beibei['AboveTHundred'] = i[9]

    price_amount={
        'price_amount_jiangbei':price_amount_jiangbei,
        'price_amount_yubei':price_amount_yubei,
        'price_amount_nanan':price_amount_nanan,
        'price_amount_yuzhong':price_amount_yuzhong,
        'price_amount_shapingba':price_amount_shapingba,
        'price_amount_jiulongpo':price_amount_jiulongpo,
        'price_amount_banan':price_amount_banan,
        "price_amount_dadukou":price_amount_dadukou,
        'price_amount_beibei':price_amount_beibei
    }
    price_amount = json.dumps(price_amount)
    cursor.close()
    return price_amount

#获取各区域房源数量总数
@data.route("/getAmount",methods=['GET'])
def get_Amount():
    conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
                           charset='utf8')
    cursor = conn.cursor()
    # cursor = getdb()
    cursor.execute('select houses_area,houses_quantity from houses_amount')
    amount_info=cursor.fetchall()
    # print(len(amount_info))
    area={}
    amount={}
    count = 0
    for i in amount_info:
        area[count]=amount_info[count][0]
        amount[count]=amount_info[count][1]
        count=count+1

    data = {
        'area': area,
        'amount': amount
    }
    data=json.dumps(data)
    cursor.close()
    return data

@data.route("/getFloor", methods=['GET'])
def get_floor():
    conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
                           charset='utf8')
    cursor = conn.cursor()
    cursor.execute('select floor_top, floor_mid, floor_low from floor_location')
    data = cursor.fetchall()
    view_data = {'view_data': data}
    return json.dumps(view_data, ensure_ascii=False)


@data.route("/getHouseSize", methods=['GET'])
def get_house_size():
    conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
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
    return json.dumps(view_data, ensure_ascii=False)


@data.route('/getAvg', methods=['GET'])
def get_avg():
    conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
                           charset='utf8')
    cursor1 = conn.cursor()
    cursor1.execute('select houses_avgUnitPrice,houses_area from avgprice')
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
    conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
                           charset='utf8')
    cursor2 = conn.cursor()
    cursor2.execute('select houses_area,houses_HouseType,number from housestype')
    num = cursor2.fetchall()
    huxing = ["1室", "2室", "3室", "4室", "5室及以上"]
    price = [0, 0, 0, 0, 0]
    for i in range(len(num)):
        for x in range(len(huxing)):
            if num[i][1] == huxing[x]:
                price[x] += num[i][2]
    data = {
        'num': num,
        'price': price,
        'huxing': huxing
    }
    data = json.dumps(data)
    return data


@data.route('/getGZ', methods=['GET'])
def get_gz():
    conn = pymysql.connect(host="10.20.220.203", user="root", password="sx2626", database="python",
                           charset='utf8')
    cursot_ky1 = conn.cursor()
    cursot_ky1.execute("select * from attention;")

    row1 = cursot_ky1.fetchall()
    row2 = np.array(row1)
    row3 = row2.tolist()    #转换为列表
    C_area=[]
    Sum_people=[]
    people=[]

    for i in row3:
        C_area.append(i[0])
        Sum_people.append(i[1])
        people.append(i[2])
        b = [round(float(i)) for i in people]
        Avg_people = [i * 10000 for i in b]

    gz = C_area+Sum_people+Avg_people
    gz=json.dumps(gz)
    return gz

@data.route('/get_relation_data', methods=['GET'])
def get_relation():
#重庆各区二手房装修情况与单价间关系
    conn = pymysql.connect(host='10.20.220.203', user='root', passwd='sx2626', port=3306, db='python', charset='utf8')
    cursot_ky2 = conn.cursor()
    cursot_ky2.execute("select area,avg from zx;")
    data_2 = cursot_ky2.fetchall()
    # print(data_2)

    data_3 = np.array(data_2)
    data_4= data_3.tolist()    #转换为列表
    # print(data_4)
    data=[]
    area=[]

    for i in data_4:
        data.append(i[1])
        area.append(i[0])

    # print(area)
    area_data=area[0::4]
    mp_data=data[1::4]
    jianz_data=data[2::4]
    jinz_data=data[3::4]
    relation_data=area_data+mp_data+jianz_data+jinz_data
    # print(relation_data)
    relation=json.dumps(relation_data)
    return relation