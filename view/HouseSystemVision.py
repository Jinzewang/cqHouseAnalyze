import os

import pyecharts.options as opts
from pyecharts.globals import ThemeType
from pyecharts.charts import Timeline, Grid, Bar, Map, Pie, Line,Page
from pyecharts.faker import Faker
import pandas as pd
df=pd.read_csv('view\House.csv', header=None)
df=df.dropna(axis=0,how='any')
# print(df)
#
# print(sum(df.iloc[:,4]==0))
# print(sum(df.iloc[:,4]==1))

groups=df.groupby(by=1)
name=[]
nums_is_subway=[]
nums_is_not_subway=[]
for i in groups:

    name.append(i[0])
    dic={huh[0]:huh[1].iloc[:,2] for huh in i[1].groupby(5)}
    try:
        nums_is_subway.append(float('{:.3f}'.format(sum(dic[1])/len(dic[1]))))
    except:
        nums_is_subway.append(0)
    try:
        nums_is_not_subway.append(float('{:.3f}'.format(sum(dic[0])/len(dic[0]))))
    except:
        nums_is_not_subway.append(0)

# print(name,nums_is_subway,nums_is_not_subway)




def bar_datazoom_slider() -> Bar:
    c = (
        Bar( init_opts=opts.InitOpts(width="1600px", height="900px", theme=ThemeType.DARK))
        .add_xaxis(name)
        .add_yaxis('近地铁',nums_is_subway)
        .add_yaxis('不近地铁',nums_is_not_subway)
        .set_global_opts(
            title_opts=opts.TitleOpts(title="Bar"),
        )
    )
    return c

def pie_rosetype() -> Pie:
    c = (
        Pie( init_opts=opts.InitOpts(width="1600px", height="900px", theme=ThemeType.DARK))
        .add(
            "",
            [list(z) for z in zip(['无电梯','有电梯'], [sum(df.iloc[:,4]==0),sum(df.iloc[:,4]==1)])],
            radius=["30%", "75%"],
            center=["50%", "50%"],
            # rosetype="area",
        )
        .set_global_opts(title_opts=opts.TitleOpts(title="Pie"))
    )
    return c


def page_draggable_layout():
    page = Page(layout=Page.SimplePageLayout,)
    page.add(
        bar_datazoom_slider(),
        pie_rosetype(),
    )
    page.render("HouseSystemVision.html")


if __name__ == "__main__":
    page_draggable_layout()
    os.startfile('HouseSystemVision.html')