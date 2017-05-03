

temp = read.csv("C:/Users/hobie/Desktop/MelbournePedestrians/data/TempData2013-2016.csv", header = TRUE)
# df <- data.frame(id = rep(1:3, each = 5)
#                  , hour = rep(1:5, 3)
#                  , value = sample(1:15))

#####There is a difference between min = rep(temp$min, each = 24) and min = rep(temp$min, 24) value = sample(1:31440)   

df <- data.frame(year = rep(temp$Year, each = 24),
                 month = rep(temp$Month, each = 24),
                 day = rep(temp$Day, each = 24),
                 hour = rep(0:23, 1310),
                 max = rep(temp$max, each = 24),
                 min = rep(temp$min, each = 24),
                 avg = rep(temp$avg, each = 24),
                 type = rep(temp$type, each = 24),
                 stepvalue = rep((temp$max - temp$min)/12, each = 24))