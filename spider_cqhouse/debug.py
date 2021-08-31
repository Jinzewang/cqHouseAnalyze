from scrapy.cmdline import execute
#
# execute("scrapy crawl spider_cqhouse_zhuge".split())
# execute("scrapy crawl beikehouses".split())
# execute("scrapy crawl CqhouseSpider_url_lianjia -o url_lianjia.csv".split())
execute("scrapy crawl CqhouseSpider_lianjia -o result_lianjia.csv".split())