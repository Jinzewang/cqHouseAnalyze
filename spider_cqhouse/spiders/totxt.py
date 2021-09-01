#将数据csv化为txt
import pandas as pd

frame=pd.read_csv('result2_lianjia.csv.csv',engine='python')
data=frame[['houses_BuildingTime','houses_CommunityName','houses_Decoration','houses_HouseSize',
                                     'houses_HouseType','houses_LocationName','houses_NumPeople','houses_ReleaseTime','houses_TotalPrice'
    ,'houses_UnitPrice','houses_area','houses_floor','houses_orientation','houses_structureType']]
with open('result2_lianjia.txt', 'a',
          encoding='utf_8_sig')as wt:
    a=0
    for i in data.houses_area:
        wt.write(
            data.houses_area[a] + '  ' + data.houses_LocationName[a] + '  '+data.houses_CommunityName[a]+'  '+data.houses_HouseType[a]+'  '+
            data.houses_HouseSize[a]+'  '+data.houses_Decoration[a]+'  '+data.houses_orientation[a]+'  '+data.houses_floor[a]+'  '+
            data.houses_BuildingTime[a]+'  '+data.houses_structureType[a]+'  '+data.houses_NumPeople[a]+'  '+data.houses_ReleaseTime[a]+'  '+
            str(data.houses_TotalPrice[a])+'  '+str(data.houses_UnitPrice[a])+'\n')
        a=a+1
