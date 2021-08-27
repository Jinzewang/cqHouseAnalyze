import re

import scrapy

# 渝中   江北   南岸   九龙坡    沙坪坝  大渡口  北碚   渝北  巴南
from spider_cqhouse.items import PriceItem

# areas = ['yuzhong', 'jiangbei', 'nanan', 'jiulongpo', 'shapingba', 'dadukou', 'beibei', 'yubei', 'banan']
areas = {'渝中':'house-a056', '江北': 'house-a057', '渝北':'house-a058', '南岸':'house-a059', '沙坪坝':'house-a060'
    , '九龙坡':'house-a061', '大渡口':'house-a062', '北碚':'house-a063', '巴南':'house-a064'}

class SpiderCqhouseSpider(scrapy.Spider):
    name = 'spider_cqhouse_zhuge'
    allowed_domains = ['https://cq.esf.fang.com/']
    start_urls = []
    for area in areas.values():
        url1 = "https://cq.esf.fang.com/" + area
        for page in range(1, 2):
            url = url1+"/i3{0}".format(page)+"/"
            start_urls.append(url)
        print(url1)
    print(start_urls)

    area = []
    def parse(self, response):
        url = response.url
        a = url.find('/i31/')
        # 区域
        area = url[85: a]
        print(area)
        # 地点名 https://cq.esf.fang.com/house-a062/i31/ //*[@id="kesfqbfylb_A01_01_03"]/dd[1]/p[2]/span
        address = response.xpath("//div[@class='shop_list shop_list_4']/dl[@class='clearfix']"
                                 "/dd[1]/p[@class='add_shop']/span/text()").exrtact()[0]
        print(type(address))
        print(address)