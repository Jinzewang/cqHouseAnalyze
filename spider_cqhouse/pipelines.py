# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter

from spider_cqhouse.items import PriceItem


class SpiderCqhousePipeline(object):
    def process_item(self, item, spider):
        if isinstance(item, PriceItem):
            obj = ScrapyTopAndLowPricePipeline()
            obj.process_item(self, spider)


# 最高单价和最低单价
class ScrapyTopAndLowPricePipeline(object):
    def process_item(self, item, spider):
        with open("../original_data/price_lowandtop_jin/low_price.txt", "a", errors='ignore') as file:
            file.write(
                item["cqArea"]+","+item["price_low"]+"\n"
            )
        return item
