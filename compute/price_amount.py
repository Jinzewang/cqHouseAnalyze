#将各售价区间各区域的房源数量写入数据库
import pymysql
import pandas as pd

conn = pymysql.connect(
        host="10.20.220.203",
        port=3306,
        user="root",
        passwd="sx2626",
        db="python")
cursor = conn.cursor()
cursor.execute('select houses_area,houses_TotalPrice from price_analysis')

def query():
    area = ["'江北'", "'渝北'", "'南岸'", "'渝中'", "'沙坪坝'", "'九龙坡'", "'巴南'", "'大渡口'", "'北碚'"]
    Price_info=cursor.fetchall()
    Price_area = pd.DataFrame(list(Price_info), columns=["houses_area",'houses_TotalPrice'])
    data_total={}
    for i in area:
        query = i + "in houses_area"  # 设置查询时的字符串
        data_query = Price_area.query(query)  # 找出各区域的数据
        if eval(i) == "江北":
            data_jiangbei=data_query.values
            data_total['data_jiangbei']=data_jiangbei
        else:
            if eval(i)=="渝北":
                data_yubei=data_query.values
                data_total['data_yubei']=data_yubei
            else:
                if eval(i) == "南岸":
                    data_nanan = data_query.values
                    data_total['data_nanan'] = data_nanan
                else:
                    if eval(i)=="渝中":
                        data_yuzhong=data_query.values
                        data_total['data_yuzhong']=data_yuzhong
                    else:
                        if eval(i)=="沙坪坝":
                            data_shapingba=data_query.values
                            data_total['data_shapingba']=data_shapingba
                        else:
                            if eval(i)=="九龙坡":
                                data_jiulongpo=data_query.values
                                data_total['data_jiulongpo']=data_jiulongpo
                            else:
                                if eval(i)=="巴南":
                                    data_banan=data_query.values
                                    data_total['data_banan']=data_banan
                                else:
                                    if eval(i)=="大渡口":
                                        data_dadukou=data_query.values
                                        data_total['data_dadukou']=data_dadukou
                                    else:
                                        if eval(i)=="北碚":
                                            data_beibei=data_query.values
                                            data_total['data_beibei']=data_beibei
    return data_total


def get_Price():
    price_range=['30万以下','30-60万','60-100万','100-150万','150-200万','200万以上']
    data_total=query()
    for i in data_total:
        UnderThirty = 0
        ThirtyToSixty = 0
        SixtyToHundred = 0
        HundredToHfifty = 0
        HfiftyToTHundred = 0
        AboveTHundred = 0
        for t in data_total[i]:
            if float(t[1].split('万')[0])<30:
                UnderThirty+=1
            else:
                if float(t[1].split('万')[0])<60 and float(t[1].split('万')[0])>=30:
                    ThirtyToSixty +=1
                else:
                    if float(t[1].split('万')[0])>=60 and float(t[1].split('万')[0])<100:
                        SixtyToHundred+=1
                    else:
                        if float(t[1].split('万')[0]) >= 100 and float(t[1].split('万')[0]) < 150:
                            HundredToHfifty+=1
                        else:
                            if float(t[1].split('万')[0]) >= 150 and float(t[1].split('万')[0]) < 200:
                                HfiftyToTHundred+=1
                            else:
                                if float(t[1].split('万')[0]) >= 200:
                                    AboveTHundred+=1
            if t[0]=='北碚':
                price_amount_beibei=[t[0],UnderThirty,ThirtyToSixty,SixtyToHundred,HundredToHfifty,HfiftyToTHundred,AboveTHundred]
            else:
                if t[0]=='江北':
                    price_amount_jiangbei = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred, HundredToHfifty,
                                           HfiftyToTHundred, AboveTHundred]
                else:
                    if t[0] == '渝北':
                        price_amount_yubei = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred, HundredToHfifty,
                                               HfiftyToTHundred, AboveTHundred]
                    else:
                        if t[0]=='南岸':
                            price_amount_nanan= [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred, HundredToHfifty,
                                                   HfiftyToTHundred, AboveTHundred]
                        else:
                            if t[0]=='渝中':
                                price_amount_yuzhong = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred,
                                                       HundredToHfifty, HfiftyToTHundred, AboveTHundred]
                            else:
                                if t[0]=='沙坪坝':
                                    price_amount_shapingba = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred,
                                                           HundredToHfifty, HfiftyToTHundred, AboveTHundred]
                                else:
                                    if t[0]=='九龙坡':
                                        price_amount_jiulongpo = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred,
                                                               HundredToHfifty, HfiftyToTHundred, AboveTHundred]
                                    else:
                                        if t[0]=='巴南':
                                            price_amount_banan = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred,
                                                                   HundredToHfifty, HfiftyToTHundred, AboveTHundred]
                                        else:
                                            if t[0]=='大渡口':
                                                price_amount_dadukou = [t[0], UnderThirty, ThirtyToSixty, SixtyToHundred,
                                                                       HundredToHfifty, HfiftyToTHundred, AboveTHundred]

    UnderThirty_all=price_amount_jiangbei[1]+price_amount_yubei[1]+price_amount_nanan[1]+\
                    price_amount_yuzhong[1]+price_amount_shapingba[1]+ price_amount_jiulongpo[1]+\
                    price_amount_banan[1]+ price_amount_dadukou[1]+price_amount_beibei[1]
    ThirtyToSixty_all = price_amount_jiangbei[2] + price_amount_yubei[2] + price_amount_nanan[2] + \
                      price_amount_yuzhong[2] + price_amount_shapingba[2] +price_amount_jiulongpo[2] + \
                      price_amount_banan[2] + price_amount_dadukou[2] + price_amount_beibei[2]
    SixtyToHundred_all = price_amount_jiangbei[3] + price_amount_yubei[3] +price_amount_nanan[3] + \
                        price_amount_yuzhong[3] + price_amount_shapingba[3] + price_amount_jiulongpo[3] + \
                        price_amount_banan[3] + price_amount_dadukou[3] + price_amount_beibei[3]
    HundredToHfifty_all = price_amount_jiangbei[4] + price_amount_yubei[4] + \
                         price_amount_nanan[4] + \
                         price_amount_yuzhong[4] + price_amount_shapingba[4] + \
                         price_amount_jiulongpo[4] + \
                         price_amount_banan[4] + price_amount_dadukou[4] + \
                         price_amount_beibei[4]
    HfiftyToTHundred_all = price_amount_jiangbei[5] + price_amount_yubei[5] + \
                          price_amount_nanan[5] + \
                          price_amount_yuzhong[5] + price_amount_shapingba[5] + \
                          price_amount_jiulongpo[5] + \
                          price_amount_banan[5] + price_amount_dadukou[5] + \
                          price_amount_beibei[5]
    AboveTHundred_all = price_amount_jiangbei[6] + price_amount_yubei[6] + \
                           price_amount_nanan[6] + \
                           price_amount_yuzhong[6] + price_amount_shapingba[6] + \
                           price_amount_jiulongpo[6] + \
                           price_amount_banan[6] + price_amount_dadukou[6] + \
                           price_amount_beibei[6]
    sum=[UnderThirty_all,ThirtyToSixty_all,SixtyToHundred_all,HundredToHfifty_all,HfiftyToTHundred_all,AboveTHundred_all]
    count = 1
    for i in price_range:
        values=(price_range[count-1],price_amount_jiangbei[count],price_amount_yubei[count],price_amount_nanan[count],price_amount_yuzhong[count]
                ,price_amount_shapingba[count],price_amount_jiulongpo[count],price_amount_banan[count],price_amount_dadukou[count],price_amount_beibei[count],sum[count-1])
        cursor.execute(
            "insert into price_amount(price_range,data_jiangbei,data_yubei,data_nanan,data_yuzhong,data_shapingba,data_jiulongpo,data_banan,data_dadukou,data_beibei,data_sum) "
            "values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", values)  # 将数据插入到数据库
        count += 1
        conn.commit()
