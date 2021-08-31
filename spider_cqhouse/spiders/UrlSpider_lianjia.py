import random
import scrapy
from spider_cqhouse.items import SpiderURLItem

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
    name = "CqhouseSpider_url_lianjia"  # 爬虫名称
    House_headers = {"User-Agent": random.choice(user_agenrs)}#随机设置请求头
    download_delay = random.randint(0, 2)#随机设置推迟时间

    # download_delay =random.choice(time)
    # 如何避免爬虫被网站识别出来导致被禁呢？
    # 可以重写（override）start_requests()方法，手动生成一个功能更强大的Request对象。
    # 因为伪装浏览器、自动登录等功能都是在Request对象中设置的。
    def start_requests(self):
        # 生成主城区网址
        for region in regions:
            url = "https://cq.lianjia.com" + region
            yield scrapy.Request(url, headers=self.House_headers, callback=self.url_parse, dont_filter=True)


# 对网址(url)数据解析,生成各区域下地点的网址
    def url_parse_1(self, response):  # 数据解析
        # 使用xpath定位
        small_region_selector = response.xpath("//div[@data-role='ershoufang']")
        # 生成城区下的主要地点网址
        for one_selector in small_region_selector:
            small_region = one_selector.xpath("div[2]/a/@href").extract()
            for count in small_region:
                counting = 0
                if counting < len(small_region):
                    url = "https://cq.lianjia.com" + count
                    print(url)
                    item = SpiderURLItem()
                    item['url'] = url
                    yield item
                else:
                    break