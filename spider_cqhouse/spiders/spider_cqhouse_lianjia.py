import csv
import random
import time
import scrapy
from spider_cqhouse.items import houses

# 价格区间
Sell_Price_Range = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7']

# 房屋面积区间
Size_Range = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']

# user_agent列表
user_agenrs = [
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; AcooBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
    "Mozilla/4.0 (compatible; MSIE 7.0; AOL 9.5; AOLBuild 4337.35; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
    "Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
    "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)",
    "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0",
    "Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5",
    "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
    "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52",
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
]


# 主城区列表
regions = ['/ershoufang/jiangbei/','/ershoufang/yubei/', '/ershoufang/nanan/', '/ershoufang/banan/',
           '/ershoufang/shapingba/', '/ershoufang/jiulongpo/', '/ershoufang/yuzhong/', '/ershoufang/dadukou/',
           '/ershoufang/beibei/']


class SpiderCqhouseSpider(scrapy.Spider):
    name = "CqhouseSpider_lianjia"  # 爬虫名称
    House_headers = {"User-Agent": random.choice(user_agenrs)}#随机设置请求头
    download_delay = random.randint(0, 2)#随机设置推迟时间

    # download_delay =random.choice(time)
    # 如何避免爬虫被网站识别出来导致被禁呢？
    # 可以重写（override）start_requests()方法，手动生成一个功能更强大的Request对象。
    # 因为伪装浏览器、自动登录等功能都是在Request对象中设置的。
    def start_requests(self):
        url = "https://cq.lianjia.com"
        yield scrapy.Request(url, headers=self.House_headers, callback=self.url_parse, dont_filter=True)

    # 引擎是怎么知道要将下载好的页面发送给parse()方法而不是其他方法？能否自定义这个方法？
    # 引擎之所以能自动定位，是因为在Request对象中，指定了解析数据的回调函数，而默认情况下，Request指定的解析函数就是parse()方法。

    def url_parse(self, response):  # 数据解析
        #打开存有网址的文件且生成该地区按户型类别区分的网址
        House_headers = {"User-Agent": random.choice(user_agenrs)}
        url_file=csv.reader(open('url_lianjia.csv','r'))
        for url_count in url_file:
            for p in Size_Range:
                url = url_count[0] + p
                yield scrapy.Request(url, headers=House_headers, callback=self.house_parse, dont_filter=True)

    # 进入页面爬取数据
    def house_parse(self, response):
        page_selector1 = response.xpath("//div[@class='page-box fr']/div[@class='page-box house-lst-page-box']")
        House_headers = {"User-Agent": random.choice(user_agenrs)}

        if len(page_selector1) != 0:
            page_selector = response.xpath("//div[@class='page-box fr']")
            for selector in page_selector:
                #获取页码数
                page = selector.xpath("div/@page-data").extract()[0]
                page_1 = page.split(':')
                page_2 = page_1[1].split(',')
                temp_page = page_1[2].split('}')
                cur_page = int(temp_page[0])#当前页码
                page_3 = int(page_2[0])#总页码

                if cur_page <= page_3:
                    area = response.xpath("//div[@data-role='ershoufang']/div[1]/a[@class='selected']/text()").extract()[0]  # 获取区域
                    info_selector = response.xpath("//div[@class='info clear']")
                    for info in info_selector:
                        # time.sleep(random.randint(0, 1))
                        # title = info.xpath("div[1]/a[1]/text()").extract()[0]  # 获取标题
                        communitname = info.xpath('div[2]/div[1]/a[1]/text()').extract()[0].strip()  # 获取小区名
                        position = info.xpath("div[2]/div[1]/a[2]/text()").extract()[0]  # 获取城区下的地区名
                        Unitprice = info.xpath("div[6]/div[2]/@data-price").extract()[0]  # 获取单价
                        house_info = info.xpath("normalize-space(div[3]/div[1]/text())").extract()[0]  # 获取详细信息
                        house_info = house_info.split('|')

                        # 初始化关于房源信息为null
                        type = '0'
                        housesize = '0'
                        decoration = '0'
                        orientation = '0'
                        floor = '0'
                        buildtime = '0'
                        structuretype = '0'

                        # 判定房源信息的每个版块有该有字符串,确保信息的对应
                        for info_count in house_info:
                            if info_count.find('室') != -1:
                                type = info_count.strip()  # 获取户型
                            else:
                                if info_count.find('平米') != -1:
                                    housesize = info_count.strip()  # 获取房屋面积
                                else:
                                    if info_count.find('装') != -1:
                                        decoration = info_count.strip()  # 获取装修情况
                                    if info_count.find('坯') != -1:
                                        decoration = info_count.strip()  # 获取装修情况
                                    else:
                                        if info_count.find('东') != -1:
                                            orientation = info_count.rstrip()  # 获取房屋朝向
                                            orientation=orientation.lstrip()
                                        else:
                                            if info_count.find('南') != -1:
                                                orientation = info_count.strip()  # 获取房屋朝向
                                                orientation = orientation.lstrip()
                                            else:
                                                if info_count.find('西') != -1:
                                                    orientation = info_count.strip()  # 获取房屋朝向
                                                    orientation = orientation.lstrip()
                                                else:
                                                    if info_count.find('北') != -1:
                                                        orientation = info_count.strip()  # 获取房屋朝向
                                                        orientation = orientation.lstrip()
                                                    else:
                                                        if info_count.find('层') != -1:
                                                            floor = info_count.strip()  # 获取房屋楼层
                                                        else:
                                                            if info_count.find('建') != -1:
                                                                buildtime = info_count.strip()  # 获取建房时间
                                                            else:
                                                                if info_count.find('塔' ) != -1:
                                                                    structuretype = info_count.strip()  # 获取结构类型
                                                                else:
                                                                    if info_count.find('板') != -1:
                                                                        structuretype = info_count.strip()  # 获取结构类型

                        totalprice = info.xpath("div[6]/div[1]/span/text()").extract()[0]  # 获取总价
                        focus = info.xpath('div[4]/text()').extract()[0]  # 获取关注人数和发布时间
                        focus = focus.split('/')
                        numpeople = focus[0].strip()  # 获取关注人数
                        releasetime = focus[1].strip()  # 获取发布时间

                        # 封装到item
                        item = houses()
                        item['houses_area'] = area
                        item["houses_LocationName"] = position
                        item['houses_CommunityName'] = communitname
                        item['houses_HouseType'] = type
                        item['houses_HouseSize'] = housesize
                        item['houses_Decoration'] = decoration
                        item['houses_orientation'] = orientation
                        item['houses_floor'] = floor
                        item['houses_BuildingTime'] = buildtime
                        item['houses_structureType'] = structuretype
                        item['houses_NumPeople'] = numpeople
                        item['houses_ReleaseTime'] = releasetime
                        item['houses_TotalPrice'] = totalprice
                        item["houses_UnitPrice"] = Unitprice
                        #写入文本
                        with open('result_lianjia.txt', 'a',
                                  encoding='utf_8_sig')as wt:
                            wt.write(
                                area + '  ' + position + '  ' + communitname + '  ' + type + '  ' + housesize + '  ' + decoration + '  ' + orientation + '  ' + floor + '  ' + buildtime + '  '
                                + structuretype + '  ' + numpeople + '  ' + releasetime + '  ' + totalprice + '  ' + Unitprice + '\n')
                        yield item
                    #将爬取过的网址写入文本
                    now_url = response.request.url
                    url_outfile = open('url_scrawled.csv', 'a')
                    url_outfile.write(now_url + '\n')



                # 分页管理
                if now_url.rfind('pg') != -1:
                    if cur_page + 1 <= page_3:
                        next_url = now_url.replace('pg%d' % (cur_page), 'pg%d' % (cur_page + 1))
                        time.sleep(random.randint(0, 2))
                        yield scrapy.Request(next_url, headers=House_headers, callback=self.house_parse,
                                             dont_filter=False)
                    else:
                        break
                else:
                    if cur_page + 1 <= page_3:
                        temp_url = now_url.split('/')

                        temp_url_5 = temp_url[5]
                        # self.current_page += 1
                        next_url_5 = "pg%d" % (cur_page + 1) + temp_url_5
                        next_url = temp_url[0] + '/' + temp_url[1] + '/' + temp_url[2] + '/' + temp_url[3] + '/' + \
                                   temp_url[4] + '/' + next_url_5 + '/'

                        time.sleep(random.randint(0, 3))
                        yield scrapy.Request(next_url, headers=House_headers, callback=self.house_parse,
                                             dont_filter=False)
                    else:
                        break

