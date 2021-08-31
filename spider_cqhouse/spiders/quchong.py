import pandas as pd

frame=pd.read_csv('result.csv',engine='python',index_col=0)

data = frame.drop_duplicates(keep='first', inplace=False)#去除一样的数据
data.to_csv('result2_lianjia.csv', encoding='utf8')
