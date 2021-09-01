# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

class SpiderURLItem(scrapy.Item):
    url=scrapy.Field()

class SpiderCqhouseItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class PriceItem(scrapy.Item):
    # 区县
    cqArea = scrapy.Field()
    # 最低单价
    price_low = scrapy.Field()
    # 最高单价
    price_top = scrapy.Field()
class houses(scrapy.Item):
    houses_area=scrapy.Field()#区域
    houses_LocationName=scrapy.Field()#地点名
    houses_CommunityName=scrapy.Field()#小区名
    houses_HouseType=scrapy.Field()#户型
    houses_HouseSize=scrapy.Field()#房屋大小
    houses_Decoration=scrapy.Field()#装修情况
    houses_orientation=scrapy.Field()#朝向
    houses_floor=scrapy.Field()#楼层
    houses_BuildingTime=scrapy.Field()#建房时间
    houses_structureType=scrapy.Field()#结构类型
    houses_NumPeople=scrapy.Field()#关注人数
    houses_ReleaseTime=scrapy.Field()#发布时间
    houses_TotalPrice=scrapy.Field()#总价
    houses_UnitPrice=scrapy.Field()#单价
    houses_title=scrapy.Field()#标题