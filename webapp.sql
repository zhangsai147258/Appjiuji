# Host: localhost  (Version: 5.5.53)
# Date: 2019-02-21 18:41:06
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin"
#

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin"
#

/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'aaa','123');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

#
# Structure for table "car"
#

DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `carpic` varchar(255) DEFAULT NULL,
  `carname` varchar(255) DEFAULT NULL,
  `carnum` varchar(255) DEFAULT NULL,
  `carprice` varchar(255) DEFAULT NULL,
  `listid` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=135 DEFAULT CHARSET=utf8;

#
# Data for table "car"
#

/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (120,'images/car/car09.jpg','咪咕 iPad Pro 2018 11寸 复联保护壳','2','199','006','wsj123'),(133,'images/detail/20180913060744616.jpg','AppleiPhone XS 64GB','1','7850.00','67868','1'),(134,'images/detail/20180913060744616.jpg','AppleiPhone XS 64GB','1','7850.00','67868','wsj123');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

#
# Structure for table "car2"
#

DROP TABLE IF EXISTS `car2`;
CREATE TABLE `car2` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `prices` varchar(255) DEFAULT NULL,
  `listid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "car2"
#

/*!40000 ALTER TABLE `car2` DISABLE KEYS */;
INSERT INTO `car2` VALUES (1,'images/car/car20.jpg','华为备咖存储','699.00','111'),(2,'images/car/car21.png','北通G1手游游戏手柄-蓝牙版','239.00','112'),(3,'images/car/car22.jpg','全汉 10000mAh 自带Type-C线 移动电源','179.00','113'),(4,'images/car/car19.jpg','华为 B5智能手环','1199.00','114'),(5,'images/car/car17.png','华为 Mate 20 Pro 原装硅胶保护壳','159.00','115');
/*!40000 ALTER TABLE `car2` ENABLE KEYS */;

#
# Structure for table "comment"
#

DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `picsrc` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `critic` varchar(255) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

#
# Data for table "comment"
#

/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'images/sec/sec32.jpg','139****3645','超爱 ，全五星好评，快递非常快，机器还没有使用，等用了再来评价。','2019-02-16  09:30'),(2,'images/sec/sec33.jpg','136****6687','东西很不错','2019-02-16  09:30'),(3,'images/sec/sec34.jpg','159****4556','超值!!好评,很满意的一次购物','2019-02-16  09:30'),(4,'images/sec/sec35.jpg','178****9645','哇偶,超级喜欢,给店家点赞','2019-02-16  09:30'),(5,'images/sec/sec36.jpg','135****6535','东西真心不错,好喜欢,给个赞','2019-02-16  09:30'),(6,'images/sec/sec37.jpg','187****5562','物流很快,东西没有出现瑕疵,赞','2019-02-16  09:30'),(7,'images/sec/sec38.jpg','137****5622','超爱','2019-02-16  09:30'),(8,'images/sec/sec10.jpg','177****4334','太喜欢了,很不错,','2019-02-16  09:30'),(9,'images/sec/sec20.png','188****5664','很满意的一次购物,物流很快,五星好评','2019-02-16  09:30');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

#
# Structure for table "fenlei"
#

DROP TABLE IF EXISTS `fenlei`;
CREATE TABLE `fenlei` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img1` varchar(255) DEFAULT NULL,
  `title1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `img6` varchar(255) DEFAULT NULL,
  `img7` varchar(255) DEFAULT NULL,
  `img8` varchar(255) DEFAULT NULL,
  `img9` varchar(255) DEFAULT NULL,
  `img10` varchar(255) DEFAULT NULL,
  `img11` varchar(255) DEFAULT NULL,
  `img12` varchar(255) DEFAULT NULL,
  `img13` varchar(255) DEFAULT NULL,
  `img14` varchar(255) DEFAULT NULL,
  `img15` varchar(255) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL,
  `title3` varchar(255) DEFAULT NULL,
  `title4` varchar(255) DEFAULT NULL,
  `title5` varchar(255) DEFAULT NULL,
  `name2` varchar(255) DEFAULT NULL,
  `name3` varchar(255) DEFAULT NULL,
  `name4` varchar(255) DEFAULT NULL,
  `name5` varchar(255) DEFAULT NULL,
  `name6` varchar(255) DEFAULT NULL,
  `name7` varchar(255) DEFAULT NULL,
  `name8` varchar(255) DEFAULT NULL,
  `name9` varchar(255) DEFAULT NULL,
  `name10` varchar(255) DEFAULT NULL,
  `name11` varchar(255) DEFAULT NULL,
  `name12` varchar(255) DEFAULT NULL,
  `name13` varchar(255) DEFAULT NULL,
  `name14` varchar(255) DEFAULT NULL,
  `name15` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

#
# Data for table "fenlei"
#

/*!40000 ALTER TABLE `fenlei` DISABLE KEYS */;
INSERT INTO `fenlei` VALUES (1,'images/good/83.jpg','热门品牌','images/good/84.jpg','images/good/85.jpg','images/good/86.jpg','images/good/87.jpg','images/good/88.jpg','images/good/89.jpg','images/good/90.jpg','images/good/91.jpg','images/good/92.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','其他品牌',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(2,'images/good/112.jpg','保护壳','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','保护膜','数据线','移动电源','手机耳机','苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(3,'images/good/113.jpg','笔记本','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','一体机','品牌台式机','显示屏','外设产品','苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(4,'images/good/114.jpg','平板电脑','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','平板保护膜','平板保护壳',NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(5,'images/good/115.jpg','品牌','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','imagse/good/97.jpg','适用户型',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(6,'images/good/116.jpg','智能手环','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','智能手表',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(7,'images/good/117.jpg','耳机/耳麦','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','蓝牙耳机',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(8,'images/good/118.jpg','生活周边','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','智能小电',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(9,'images/good/119.jpg','智能车载','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','平衡/电动车',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(10,'images/good/120.jpg','儿童玩具','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','儿童手表',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(11,'images/good/121.jpg','无人机/云台','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','益智教育',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(12,'images/good/122.jpg','健康护理','images/good/103.jpg','images/good/104.jpg','images/good/105.jpg','images/good/106.jpg','images/good/107.jpg','images/good/108.jpg','images/good/109.jpg','images/good/110.jpg','images/good/111.jpg','images/good/93.jpg','images/good/94.jpg','images/good/95.jpg','images/good/96.jpg','images/good/97.jpg','按摩设备',NULL,NULL,NULL,'苹果','华为','荣耀','小米','vivo','oppo','三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'苹果',NULL,'荣耀',NULL,NULL,NULL,'三星','魅族','美图','一加','努比亚','诺基亚','360','苹果'),(14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'魅族',NULL,NULL,NULL,'诺基亚',NULL,NULL);
/*!40000 ALTER TABLE `fenlei` ENABLE KEYS */;

#
# Structure for table "headline"
#

DROP TABLE IF EXISTS `headline`;
CREATE TABLE `headline` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img1` varchar(255) DEFAULT NULL,
  `title1` varchar(255) DEFAULT NULL,
  `name1` varchar(255) DEFAULT NULL,
  `num1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `name2` varchar(255) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL,
  `num2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `title3` varchar(255) DEFAULT NULL,
  `name3` varchar(255) DEFAULT NULL,
  `num3` varchar(255) DEFAULT NULL,
  `img4` varchar(255) DEFAULT NULL,
  `title4` varchar(255) DEFAULT NULL,
  `name4` varchar(255) DEFAULT NULL,
  `num4` varchar(255) DEFAULT NULL,
  `img5` varchar(255) DEFAULT NULL,
  `title5` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "headline"
#

/*!40000 ALTER TABLE `headline` DISABLE KEYS */;
INSERT INTO `headline` VALUES (1,'images/good/11.jpg','九机网2019年春节期间运营公告','九机营销中心','10978阅读','images/good/12.png','九机营销中心','10万锦鲤诞生|和您分享2019第一份坚持和相信','10978阅读','images/good/13.png','荣耀V20新品发布，2999起售！','九机营销中心','10978阅读','images/good/15.png','小米Play新品发布，自带流量，1099元起售！','九机营销中心','10978阅读','images/good/14.jpg','3099元起，华为nova4发布！'),(2,'images/good/11.jpg','九机网2019年春节期间运营公告','九机营销中心','10978阅读','images/good/12.png','九机营销中心','10万锦鲤诞生|和您分享2019第一份坚持和相信','10978阅读','images/good/13.png','荣耀V20新品发布，2999起售！','九机营销中心','10978阅读','images/good/15.png','小米Play新品发布，自带流量，1099元起售！','九机营销中心','10978阅读','images/good/124.jpg','3099元起，华为nova4发布！'),(3,'images/good/11.jpg','九机网2019年春节期间运营公告','九机营销中心','10978阅读','images/good/12.png','九机营销中心','10万锦鲤诞生|和您分享2019第一份坚持和相信','10978阅读','images/good/13.png','荣耀V20新品发布，2999起售！','九机营销中心','10978阅读','images/good/15.png','小米Play新品发布，自带流量，1099元起售！','九机营销中心','10978阅读','images/good/125.jpg','3099元起，华为nova4发布！'),(4,'images/good/11.jpg','九机网2019年春节期间运营公告','九机营销中心','10978阅读','images/good/12.png','九机营销中心','10万锦鲤诞生|和您分享2019第一份坚持和相信','10978阅读','images/good/13.png','荣耀V20新品发布，2999起售！','九机营销中心','10978阅读','images/good/15.png','小米Play新品发布，自带流量，1099元起售！','九机营销中心','10978阅读','images/good/126.jpg','3099元起，华为nova4发布！'),(5,'images/good/11.jpg','九机网2019年春节期间运营公告','九机营销中心','10978阅读','images/good/12.png','九机营销中心','10万锦鲤诞生|和您分享2019第一份坚持和相信','10978阅读','images/good/13.png','荣耀V20新品发布，2999起售！','九机营销中心','10978阅读','images/good/15.png','小米Play新品发布，自带流量，1099元起售！','九机营销中心','10978阅读','images/good/127.jpg','3099元起，华为nova4发布！'),(6,'images/good/11.jpg','九机网2019年春节期间运营公告','九机营销中心','10978阅读','images/good/12.png','九机营销中心','10万锦鲤诞生|和您分享2019第一份坚持和相信','10978阅读','images/good/13.png','荣耀V20新品发布，2999起售！','九机营销中心','10978阅读','images/good/15.png','小米Play新品发布，自带流量，1099元起售！','九机营销中心','10978阅读','images/good/128.jpg','3099元起，华为nova4发布！');
/*!40000 ALTER TABLE `headline` ENABLE KEYS */;

#
# Structure for table "integral"
#

DROP TABLE IF EXISTS `integral`;
CREATE TABLE `integral` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `symbol` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `order` varchar(255) DEFAULT NULL,
  `need` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `effective` varchar(255) DEFAULT NULL,
  `rightnow` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

#
# Data for table "integral"
#

/*!40000 ALTER TABLE `integral` DISABLE KEYS */;
INSERT INTO `integral` VALUES (1,'',NULL,NULL,NULL,NULL,NULL,NULL,'积分兑好劵','更多好劵'),(2,'￥','60','订单金额满500元','所需兑换积分','3000','兑换后一个月内有效','立即兑换',NULL,NULL),(3,'￥','50','订单金额满300元','所需兑换积分','2500','兑换后一个月内有效','立即兑换',NULL,NULL),(4,'￥','30','订单金额满600元','所需兑换积分','1500','兑换后一个月内有效','立即兑换',NULL,NULL);
/*!40000 ALTER TABLE `integral` ENABLE KEYS */;

#
# Structure for table "limit"
#

DROP TABLE IF EXISTS `limit`;
CREATE TABLE `limit` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `detil` varchar(255) DEFAULT NULL,
  `pirce` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `messages` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

#
# Data for table "limit"
#

/*!40000 ALTER TABLE `limit` DISABLE KEYS */;
INSERT INTO `limit` VALUES (1,'猫咪手机指环扣','990分','images/img-buttom/140.jpg','去兑换'),(2,'小米7号彩虹电池','1200分','images/img-buttom/126.jpg','去兑换'),(3,'绿联 NW102 网线 千兆网络连接线2米','1000分','images/img-buttom/141.jpg','去兑换'),(4,'全汉 双口 充电器','3500分','images/img-buttom/130.jpg','去兑换'),(5,'闪迪 酷铄CZ73 U盘16G','4900分','images/img-buttom/142.jpg','去兑换'),(6,'洛克 type-c 弹簧伸缩数据线1.5m','1200分','images/img-buttom/143.jpg','去兑换'),(7,'洛克 苹果lightning 短数据线0.25m','500分','images/img-buttom/134.jpg','去兑换'),(8,'华为 Type-C 原装数据线1m','600分','images/img-buttom/144.jpg','去兑换'),(9,'洛克 重力手机支架','1000分','images/img-buttom/145.jpg','去兑换'),(10,'绿联 CR106 一拖四usb集线器','990分','images/img-buttom/119.jpg\"','去兑换'),(11,'吹一吹火折子打火机','500分','images/img-buttom/146.jpg','去兑换'),(12,'雷柏 M100 蓝牙多模无线鼠标','1000分','images/img-buttom/132.jpg','去兑换'),(13,'南极人保暖桌垫鼠标垫','1000分','images/img-buttom/147.jpg','去兑换'),(14,'公牛小魔方智能插座','1000分','images/img-buttom/129.jpg','去兑换'),(15,'全汉 无线充电器','2000分','images/img-buttom/148.jpg','去兑换'),(16,'锐思 10000mAh 移动电源','2000分','images/img-buttom/149.jpg','去兑换'),(17,'黑鱼 无线充电器','1800分','images/img-buttom/150.jpg','去兑换'),(18,'新游（NewGame）N1Pro增强震动版手机游戏手柄增强版','1000分','images/img-buttom/151.jpg','去兑换'),(19,'羽博 20000mAh 数显移动电源','3000分','images/img-buttom/152.jpg','去兑换'),(20,'皮卡诺 双肩背包 升级版','2000分','images/img-buttom/153.jpg','去兑换');
/*!40000 ALTER TABLE `limit` ENABLE KEYS */;

#
# Structure for table "limlted"
#

DROP TABLE IF EXISTS `limlted`;
CREATE TABLE `limlted` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `ide` varchar(255) DEFAULT NULL,
  `fuhao` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `tope` varchar(255) DEFAULT NULL,
  `surpius` varchar(255) DEFAULT NULL,
  `purchase` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;

#
# Data for table "limlted"
#

/*!40000 ALTER TABLE `limlted` DISABLE KEYS */;
INSERT INTO `limlted` VALUES (1,'iphone XR全网通版 【白色 64GB】','超视网膜显示屏','￥','5280.00','￥5350.00','剩余2件','去抢购','images/limlted/01.jpg','time'),(2,'超大鼠标垫','精密锁边 游戏必备','￥','9.90','￥29.00','剩余29件','去抢购','images/limlted/02.jpg','time'),(3,'iPhone X 全网通版【银色 64GB】','全面屏 全面绽放','￥','5930.00','￥5999.00','剩余29件','去抢购','images/limlted/03.jpg','time'),(4,'iphone XS Max 【3D钢化膜】','3D全屏防刮防爆','￥','129.00','￥189.00','剩余9件','去抢购','images/limlted/04.jpg','time'),(5,'iPhone XS Max 全网通版 【深灰色 64GB】','超视网膜显示屏','￥','8699.00','￥8799.00','剩余9件','去抢购','images/limlted/05.jpg','time'),(6,'洛克车载支架II代','安全行车 不挡视线','￥','19.00','￥29.00','剩余6件','去抢购','images/limlted/06.jpg','time'),(7,'洛克 苹果+安卓mirco+Type-C一拖三 充电线','尼龙编织,快速充电,携带方便','￥','39.00','￥49.00','剩余4件','去抢购','images/limlted/07.jpg','time'),(8,'联想 小新 Air 14','超轻超薄 八代I7','￥','5588.00','￥5650.00','剩余10件','去抢购','images/limlted/08.jpg','time'),(9,'华为畅享9 全网通高配【幻夜黑4+64GB】','限时特惠 仅此一天','￥','1199.00','￥1299.00','剩余3件','去抢购','images/limlted/09.jpg','time'),(10,'猪小屁 故事机','趣味学舌 智能点播','￥','88.00','￥99.00','剩余7件','去抢购','images/limlted/010.jpg','time'),(11,'乐物 10000mAh 移动电源','双输入 双输出','￥','79.00','￥99.00','剩余7件','去抢购','images/limlted/012.jpg','time'),(12,'黑鱼 无线充电器','个性黑鱼 无线快充','￥','99.00','￥129.00','剩余9件','去抢购','images/limlted/013.jpg','time'),(13,'华为畅享9 Plus 全网通高配【幻夜黑 6+128GB】','限时特惠 仅此一天','￥','1199.00','￥1299.00','剩余6件','去抢购','images/limlted/014.jpg','time'),(14,'斗禾 电暖器','办公取暖好帮手','￥','139.00','￥169.00','剩余6件','去抢购','images/limlted/015.jpg','time'),(15,'iphone XR全网通版 【白色 64GB】','官网直降1200','￥','5280.00','￥5350.00','剩余5件','去抢购','images/limlted/01.jpg','time1'),(16,'小米彩虹7号电池','安全环保无毒无泵','￥','9.90','￥14.00','剩余5件','去抢购','images/limlted/025.jpg','time1'),(17,'猫咪手机指环扣','自由旋转 稳定支撑','￥','9.90','￥12.00','剩余5件','去抢购','images/limlted/024.jpg','time1'),(18,'iphone X 全网通版 【深空灰色 64GB】','超值爆款 特惠热销','￥','5950.00','￥6030.00','剩余5件','去抢购','images/limlted/023.jpg','time1'),(19,'猪小屁 故事机','趣味学舌 智能点播','￥','88.00','￥99.00','剩余7件','去抢购','images/limlted/010.jpg','time1'),(20,'火折子 创意打火机','气流激活一吹既燃','￥','35.00','￥59.00','剩余8件','去抢购','images/limlted/7.jpg','time1'),(21,'乐物 iPhone XS/X 3D钢化膜','防刮防爆防指纹','￥','129.00','￥189.00','剩余9件','去抢购','images/limlted/022.jpg','time1'),(22,'爱奇美手机指环扣','小身材 大用处','￥','12.00','￥18.00','剩余5件','去抢购','images/limlted/021.jpg','time1'),(23,'摇摆鹅益智玩具','能说会唱','￥','99.00','￥119.00','剩余3件','去抢购','images/limlted/020.jpg','time1'),(24,'华为畅享9 全网通高配版','限时特惠 仅此一天','￥','1199.00','￥1299.00','剩余6件','去抢购','images/limlted/026.jpg','time1'),(25,'全汉 5600mAh 移动电源+暖手宝','超萌造型 双面发热','￥','99.00','￥139.00','剩余7件','去抢购','images/limlted/019.jpg','time1'),(26,'iphone XS 全网通版 【金色 64GB】','官网直降800','￥','7830.00','￥7999.00','剩余4件','去抢购','images/limlted/018.jpg','time1'),(27,'超大鼠标垫','精密锁边 游戏必备','￥','9.90','￥29.00','剩余6件','去抢购','images/limlted/017.jpg','time1'),(28,'呆小萌暖手宝','过一个温暖的冬天','￥','99.00','￥138.00','剩余13件','去抢购','images/limlted/016.jpg','time1'),(29,'iPhone XR 全网通版【黑色 128G】','官网直降1300','￥','5650.00','￥5699.00','剩余13件','去抢购','images/limlted/5.jpg','time2'),(30,'乐物定制开收伞','自动开放 防回弹','￥','49.00','￥69.00','剩余8件','去抢购','images/limlted/19.jpg','time2'),(31,'斗禾 电暖器','办公取暖好帮手','￥','139.00','￥169.00','剩余5件','去抢购','images/limlted/13.jpg','time2'),(32,'南极人电热毯','三挡控温 可水洗','￥','99.00','￥149.00','剩余6件','去抢购','images/limlted/20.jpg','time2'),(33,'白枫 防辐射眼镜','健康护眼 经济实惠','￥','9.90','￥25.00','剩余12件','去抢购','images/limlted/21.jpg','time2'),(34,'iPhone  X 全网通版 【银色 64GB】','超值爆款 特惠热销','￥','5960.00','￥5999.00','剩余15件','去抢购','images/limlted/03.jpg','time2'),(35,'洛克 苹果lightning 弹簧伸缩数据线1.5m','伸缩自由 不占空间','￥','39.00','￥49.00','剩余20件','去抢购','images/limlted/22.jpg','time2'),(36,'猪小屁 故事机','趣味学舌 智能点播','￥','88.00','￥99.00','剩余10件','去抢购','images/limlted/010.jpg','time2'),(37,'漫威正版超级英雄摇头公仔 车载饰品','弹簧人车载摆件','￥','39.00','￥58.00','剩余5件','去抢购','images/limlted/23.jpg','time2'),(38,'乐物 iPhone XS Max 2.5D钢化膜','全屏覆盖防刮防爆','￥','99.00','￥129.00','剩余13件','去抢购','images/limlted/24.jpg','time2'),(39,'小米彩虹5号电池','安全环保 无毒无泵','￥','9.90','￥14.00','剩余11件','去抢购','images/limlted/6.jpg','time2'),(40,'华为畅享9 全网通高配【极光蓝 4+64GB】','限时优惠 仅此一天','￥','1199.00','￥1299.00','剩余4件','去抢购','images/limlted/25.jpg','time2'),(41,'好写液晶手写板','轻薄便捷 绿色环保','￥','69.00','￥89.00','剩余8件','去抢购','images/limlted/18.jpg','time2'),(42,'猫咪手机指环扣','自由旋转 稳定支撑','￥','9.90','￥12.00','剩余20件','去抢购','images/limlted/024.jpg','time2'),(43,'iPhone XS Max 【深空灰色 256GB】','官网直降千元','￥','9950.00','￥10050.00','剩余2件','去抢购','images/limlted/5.jpg','time3'),(44,'小米彩虹5号电池','安全环保 无毒无泵','￥','9.90','￥14.00','剩余5件','去抢购','images/limlted/6.jpg','time3'),(45,'火折子 创意打火机','气流激活 一吹既燃','￥','35.00','￥59.00','剩余18件','去抢购','images/limlted/7.jpg','time3'),(46,'超大鼠标垫','精密锁边 游戏必备','￥','9.90','￥29.00','剩余20件','去抢购','images/limlted/10.jpg','time3'),(47,'iPhone XR 全网通版【白色 128G】','官网直降1200','￥','5280.00','￥5350.00','剩余6件','去抢购','images/limlted/8.jpg','time3'),(48,'漫威正版超级英雄摇头公仔 车载饰品','弹簧人车载摆件','￥','39.00','￥58.00','剩余5件','去抢购','images/limlted/9.jpg','time3'),(49,'华为畅享9 全网通高配【幻夜黑 4+64GB】','限时优惠 仅此一天','￥','1199.00','￥1299.00','剩余7件','去抢购','images/limlted/09.jpg','time3'),(50,'乐物iPhone XS/X 3D钢化膜','防刮防爆防指纹','￥','129.00','￥189.00','剩余13件','去抢购','images/limlted/12.jpg','time3'),(51,'斗禾 电暖器','办公取暖好帮手','￥','139.00','￥169.00','剩余17件','去抢购','images/limlted/13.jpg','time3'),(52,'OPPO 闪充数据线1m','快速充电稳定传输','￥','25.00','￥29.00','剩余15件','去抢购','images/limlted/14.jpg','time3'),(53,'华硕 a豆','全面屏 指纹识别','￥','3399.00','￥3499.00','剩余19件','去抢购','images/limlted/15.jpg','time3'),(54,'猪小屁 故事机','趣味学舌 智能点播','￥','88.00','￥99.00','剩余6件','去抢购','images/limlted/16.jpg','time3'),(55,'全汉5600mAh 移动电源+暖手宝','超萌造型 双面发热','￥','89.00','￥139.00','剩余21件','去抢购','images/limlted/17.jpg','time3'),(56,'好写液晶手写板','轻薄便捷 绿色环保','￥','69.00','￥89.00','剩余7件','去抢购','images/limlted/18.jpg','time3'),(57,'iPhone XS Max  全网通版','超视网膜显示屏','￥','8699.00','￥8799.00','剩余17件','去抢购','images/limlted/26.jpg','time4'),(58,'百飒 防辐射眼镜','健康护眼 经济实惠','￥','9.90','￥25.00','剩余10件','去抢购','images/limlted/27.jpg','time4'),(59,'iPhone X 全网通版','超值爆款特惠热销','￥','5988.00','￥5999.00','剩余8件','去抢购','images/limlted/03.jpg','time4'),(60,'联想 小新Air 13.3英寸','高速硬盘 轻薄便携','￥','4899.00','￥4950.00','剩余9件','去抢购','images/limlted/28.jpg','time4'),(61,'华为畅享9 Plus 全网通【樱语粉 4+128GB】','限时特惠 仅此一天','￥','1499.00','￥1699.00','剩余7件','去抢购','images/limlted/29.jpg','time4'),(62,'漫威正版超级英雄摇头公仔 车载饰品','弹簧人车载摆件','￥','39.00','￥58.00','剩余4件','去抢购','images/limlted/30.jpg','time4'),(63,'好写液晶手写板','轻薄便捷 绿色环保','￥','69.00','￥89.00','剩余5件','去抢购','images/limlted/18.jpg','time4'),(64,'华为畅享9 全网通高配【珊瑚红 4+64GB】','限时特价 仅此一天','￥','1199.00','￥1299.00','剩余3件','去抢购','images/limlted/026.jpg','time4'),(65,'全汉 双口 充电器','小巧便捷 双口输出','￥','29.00','￥39.00','剩余7件','去抢购','images/limlted/31.jpg','time4'),(66,'iPhone XR全网通版','超视网膜显示屏','￥','5280.00','￥5350.00','剩余12件','去抢购','images/limlted/32.jpg','time4'),(67,'洛克车载手机支架','安全便捷 十拿九稳','￥','38.00','￥49.00','剩余14件','去抢购','images/limlted/33.jpg','time4'),(68,'雷柏 M10 无线鼠标','时尚炫彩 无线操控','￥','39.00','￥45.00','剩余15件','去抢购','images/limlted/34.jpg','time4'),(69,'荣耀8X 全网通版','霸屏实力 随身影院','￥','1730.00','￥1899.00','剩余17件','去抢购','images/limlted/35.jpg','time4'),(70,'公牛USB小魔方插座','更小更便捷','￥','59.00','￥69.00','剩余13件','去抢购','images/limlted/36.jpg','time4'),(71,'iPhone X全网通版【深空灰色 64GB】','超值爆款 特惠热销','￥','5999.00','￥6030.00','剩余13件','去抢购','images/limlted/023.jpg','time5'),(72,'小米彩虹5号电池','安全环保 无毒无泵','￥','9.90','￥14.00','剩余13件','去抢购','images/limlted/025.jpg','time5'),(73,'百飒 防辐射眼镜','健康护眼 经济实惠','￥','9.90','￥25.00','剩余13件','去抢购','images/limlted/27.jpg','time5'),(74,'iPhone XS Max 【深空灰色 256GB】','超视网膜显示屏','￥','9899.00','￥10050.00','剩余13件','去抢购','images/limlted/05.jpg','time5'),(75,'Macbook Air新款 256G','全新Air 触控ID','￥','9888.00','￥9988.00','剩余13件','去抢购','images/limlted/37.jpg','time5'),(76,'膜大师 笔记本屏幕贴膜','环保材料 高清高透','￥','39.00','￥49.00','剩余13件','去抢购','images/limlted/38.jpg','time5'),(77,'iPhone XR 全网通版【白色64GB】','超视网膜显示屏','￥','5280.00','￥5350.00','剩余13件','去抢购','images/limlted/01.jpg','time5'),(78,'火焰战士干粉灭火器','小巧便携 强力灭火','￥','39.00','￥49.00','剩余13件','去抢购','images/limlted/39.jpg','time5'),(79,'华为畅享9 全网通版【幻夜黑 4+64GB】','大电池 强劲续航','￥','1199.00','￥1299.00','剩余13件','去抢购','images/limlted/11.jpg','time5'),(80,'洛克 苹果+安卓mirco+Type-C一拖三充电线','快速充电 携带方便','￥','39.00','￥49.00','剩余13件','去抢购','images/limlted/07.jpg','time5'),(81,'荣耀8X 全网通版 【幻夜黑6+128GB】','霸屏实力 随身影院','￥','1730.00','￥1899.00','剩余13件','去抢购','images/limlted/35.jpg','time5'),(82,'摩可 荣耀 8X Max 2.5D钢化膜','裸机手感 经久耐用','￥','49.00','￥79.00','剩余13件','去抢购','images/limlted/40.jpg','time5'),(83,'华为畅享9Plus 全网通版【幻夜黑4+128GB】','四摄全面屏','￥','1499.00','￥1699.00','剩余13件','去抢购','images/limlted/014.jpg','time5'),(84,'特洛克柠萌插线板','创意圆形排查','￥','59.00','￥79.00','剩余13件','去抢购','images/limlted/41.jpg','time5'),(85,'iPhone XS Max 全网通 【金色256GB】','超视网膜显示屏','￥','9850.00','￥9950.00','剩余13件','去抢购','images/limlted/42.jpg','time6'),(86,'火折子 创意打火机','气流激活 一吹既燃','￥','35.00','￥59.00','剩余13件','去抢购','images/limlted/7.jpg','time6'),(87,'超大鼠标垫','精密锁边 游戏必备','￥','9.90','￥29.00','剩余13件','去抢购','images/limlted/02.jpg','time6'),(88,'iPhone XR全网通版 【黑色 128GB】','超视网膜显示屏','￥','5650.00','￥5699.00','剩余13件','去抢购','images/limlted/5.jpg','time6'),(89,'爱奇美手机指环扣','小身材 大用处','￥','12.00','￥18.00','剩余13件','去抢购','images/limlted/43.jpg','time6'),(90,'戴尔 灵越燃7000 15.6英寸','拉丝铝合金工艺','￥','5888.00','￥5999.00','剩余13件','去抢购','images/limlted/44.jpg','time6'),(91,'洛克车载支架II代','安全行车 不挡视线','￥','19.00','￥29.00','剩余13件','去抢购','images/limlted/06.jpg','time6'),(92,'iPhone 8Puls 全网通版 【金色 64GB】','官网直降 特价热销','￥','4780.00','￥4899.00','剩余13件','去抢购','images/limlted/45.jpg','time6'),(93,'苹果 AirPods 硅胶保护壳','硅胶材质','￥','29.00','￥59.00','剩余13件','去抢购','images/limlted/46.jpg','time6'),(94,'华为畅享9 全网通高配版 【极光蓝 4+64GB】','大电池 强劲续航','￥','1199.00','￥1299.00','剩余13件','去抢购','images/limlted/25.jpg','time6'),(95,'全汉 双口 充电器','小巧便携 双口输出','￥','29.00','￥39.00','剩余13件','去抢购','images/limlted/31.jpg','time6'),(96,'荣耀8X 全网通版 【幻夜黑 4+64GB】','霸屏实力 随身影院','￥','1380.00','￥1430.00','剩余13件','去抢购','images/limlted/35.jpg','time6'),(97,'洛克车载手机支架','安全便携 十拿十稳','￥','38.00','￥49.00','剩余13件','去抢购','images/limlted/33.jpg','time6'),(98,'iPhone 8 全网通版 【金色 64GB】','无线充电 A11芯片','￥','3899.00','￥3999.00','剩余13件','去抢购','images/limlted/45.jpg','time6');
/*!40000 ALTER TABLE `limlted` ENABLE KEYS */;

#
# Structure for table "mess"
#

DROP TABLE IF EXISTS `mess`;
CREATE TABLE `mess` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `picsrc` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `pic2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

#
# Data for table "mess"
#

/*!40000 ALTER TABLE `mess` DISABLE KEYS */;
INSERT INTO `mess` VALUES (1,'images/sec/sec32.jpg','136****3689','Apple iPhone 7 Plus(机型)、亮黑色(颜色)、128G(内存)、不限(成色)','images/sec/sec39.png'),(2,'images/sec/sec33.jpg','155****7754','Apple iPhone XS Max(机型)、深空灰(颜色)、256G(内存)、99成新(成色)','images/sec/sec22.png'),(3,'images/sec/sec34.jpg','136****8558','荣耀 play(机型)、蓝色(颜色)、4G+64G(内存)、不限(成色)','images/sec/sec22.png'),(4,'images/sec/sec35.jpg','最嗨的放肆','Apple iPad 2018新款 9.7英寸（A1893/A1954）(机型)、不限(颜色)、128G(内存)、9成新(成色)','images/sec/sec22.png'),(5,'images/sec/sec36.jpg','幸福每一天','苹果 18年 15寸 MacBook Pro(机型)、不限(颜色)、不限(内存)、95成新(成色)','images/sec/sec22.png'),(6,'images/sec/sec37.jpg','浪么浪打浪','华为 nova 2s(机型)、曜石黑(颜色)、6G+64G(内存)、不限(成色)','images/sec/sec22.png'),(7,'images/sec/sec38.jpg','178****3665','Apple iPhone X(机型)、银色(颜色)、不限(内存)、不限(成色)','images/sec/sec22.png'),(8,'images/sec/sec10.jpg','188****5543','Apple iPhone X(机型)、不限(颜色)、不限(内存)、8成新(成色)','images/sec/sec22.png'),(9,'images/sec/sec20.png','156****4556','Apple iPhone X(机型)、银色(颜色)、不限(内存)、不限(成色)','images/sec/sec22.png'),(10,'images/sec/sec38.jpg','嗨起来','Apple iPad 2018新款 9.7英寸（A1893/A1954）(机型)、不限(颜色)、128G(内存)、9成新(成色)','images/sec/sec39.png');
/*!40000 ALTER TABLE `mess` ENABLE KEYS */;

#
# Structure for table "newo"
#

DROP TABLE IF EXISTS `newo`;
CREATE TABLE `newo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nesrc` varchar(255) DEFAULT NULL,
  `nename` varchar(255) DEFAULT NULL,
  `neprice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "newo"
#

/*!40000 ALTER TABLE `newo` DISABLE KEYS */;
INSERT INTO `newo` VALUES (1,'images/newo/newo20.jpg','苹果 17年 13寸 MacBook Pro','3540.00'),(2,'images/newo/newo24.jpg','Apple iPad 2018新款 9.7英寸(A1893/A1954)','2070.00'),(3,'images/newo/newo18.jpg','Apple iPhone 6','850.00'),(4,'images/newo/newo23.jpg','华为 P20','2350.00'),(5,'images/newo/newo26.jpg','Apple iPhone XS Max','7600.00'),(6,'images/newo/newo22.jpg','大疆无人机 Phantom 4 Pro','4200.00'),(7,'images/newo/newo17.jpg','华为 Mate20','2970.00'),(8,'images/newo/newo25.jpg','苹果（Apple）AirPods蓝牙耳机(含充电底座)','500.00'),(9,'images/newo/newo10.jpg','小米笔记本Air 12.5寸 4G版','2000.00'),(10,'images/newo/newo16.jpg','大疆无人机 “御” Mavic Pro','2550.00');
/*!40000 ALTER TABLE `newo` ENABLE KEYS */;

#
# Structure for table "quick"
#

DROP TABLE IF EXISTS `quick`;
CREATE TABLE `quick` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `lt` varchar(255) DEFAULT NULL,
  `rt` varchar(255) DEFAULT NULL,
  `left` varchar(255) DEFAULT NULL,
  `right` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pictures` varchar(255) DEFAULT NULL,
  `picturess` varchar(255) DEFAULT NULL,
  `titles` varchar(255) DEFAULT NULL,
  `titless` varchar(255) DEFAULT NULL,
  `titlesss` varchar(255) DEFAULT NULL,
  `titlessss` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "quick"
#

/*!40000 ALTER TABLE `quick` DISABLE KEYS */;
INSERT INTO `quick` VALUES (1,'images/img-buttom/iPhone 6S_.jpg','images/img-buttom/iPhone 7.jpg','images/img-buttom/054.jpg','images/img-buttom/053.jpg','images/img-buttom/chose.jpg','images/img-buttom/submit.jpg','images/img-buttom/050.png','images/img-buttom/049.png','images/img-buttom/018.png','images/img-buttom/052.jpg','images/img-buttom/051.jpg','images/img-buttom/much.png','images/img-buttom/666.png','images/img-buttom/relax.png','images/img-buttom/youshi.png'),(2,'images/img-buttom/iPhone 6 Plus.png','images/img-buttom/iPhone X.jpg','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'images/img-buttom/iPhone 6s Plus.jpg','images/img-buttom/hw Mate9.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `quick` ENABLE KEYS */;

#
# Structure for table "second"
#

DROP TABLE IF EXISTS `second`;
CREATE TABLE `second` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `picsrc` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sto` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `newprice` varchar(255) DEFAULT NULL,
  `new` varchar(255) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "second"
#

/*!40000 ALTER TABLE `second` DISABLE KEYS */;
INSERT INTO `second` VALUES (3,'images/sec/sec05.jpg','Apple MacBook Air 13寸 2017版 银色','固态硬盘128GB','3999','5950','九成新','2019-02-16  09:30'),(4,'images/sec/sec01.jpg','Apple iPad Pro 9.7寸 玫瑰金','2016.8.7出厂 容量32G','2399','3750','九成新','2019-02-16  09:30'),(5,'images/sec/sec08.jpg','Apple iPhone 6 Plus  银色','2015.5.31出厂 容量16G','1299','3600','九成新','2019-02-16  09:30'),(6,'images/sec/sec04.jpg','Apple iPhone 6s Plus  金色','2015.10.11出厂 容量16G','1399','3699','九成新','2019-02-16  09:30'),(7,'images/sec/sec02.jpg','Apple iPhone 7  黑色','2016.12.18出厂 容量128G','2299','4399','八成新','2019-02-16  09:30'),(8,'images/sec/sec03.jpg','Apple MacBook Air 13寸 2017版 银色','固态硬盘128GB','4199','5950','九成新','2019-02-16  09:30'),(9,'images/sec/sec05.jpg','Apple MacBook Air 13寸 2017版 银色','固态硬盘128GB','4199','5950','九成新','2019-02-16  09:30'),(10,'images/sec/sec09.jpg','Apple iPhone XR  黑色','2016.12.18出厂 容量128G','5499','5699','九成新','2019-02-16  09:30');
/*!40000 ALTER TABLE `second` ENABLE KEYS */;

#
# Structure for table "tomtr"
#

DROP TABLE IF EXISTS `tomtr`;
CREATE TABLE `tomtr` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `ppai` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=205 DEFAULT CHARSET=utf8;

#
# Data for table "tomtr"
#

/*!40000 ALTER TABLE `tomtr` DISABLE KEYS */;
INSERT INTO `tomtr` VALUES (1,'images/tomtr/1.jpg','Apple iPhone 6','type1','苹果','time'),(2,'images/tomtr/2.jpg','Apple iPhone 6s','type1','苹果','time'),(3,'images/tomtr/3.jpg','Apple iPhone 6 Plus','type1','苹果','time'),(4,'images/tomtr/4.jpg','Apple iPhone 6s Plus','type1','苹果','time'),(5,'images/tomtr/5.jpg','Apple iPhone 7','type1','苹果','time'),(6,'images/tomtr/6.jpg','Apple iPhone 7 Plus','type1','苹果','time'),(7,'images/tomtr/7.jpg','Apple iPhone X','type1','苹果','time'),(8,'images/tomtr/8.jpg','Apple iPhone 5s','type1','苹果','time'),(9,'images/tomtr/9.jpg','Apple iPhone 8 Plus','type1','苹果','time'),(10,'images/tomtr/10.jpg','Apple iPhone 8','type1','苹果','time'),(11,'images/tomtr/11.jpg','Apple iPhone SE','type1','苹果','time'),(12,'images/tomtr/12.jpg','Apple iPhone XS Max','type1','苹果','time'),(13,'images/tomtr/13.jpg','Apple iPhone 5','type1','苹果','time'),(14,'images/tomtr/14.jpg','Apple iPhone XR','type1','苹果','time'),(15,'images/tomtr/15.jpg','Apple iPhone 4S','type1','苹果','time'),(16,'images/tomtr/16.jpg','Apple iPhone 4','type1','苹果','time'),(17,'images/tomtr/17.jpg','Apple iPhone XS','type1','苹果','time'),(18,'images/tomtr/18.jpg','Apple iPhone 5c','type1','苹果','time'),(19,'images/tomtr/19.jpg','Apple iPhone 3GS','type1','苹果','time'),(20,'images/tomtr/22.jpg','Apple iPad mini 2','pb','苹果',''),(21,'images/tomtr/22.jpg','Apple iPad mini','pb','苹果',''),(22,'images/tomtr/22.jpg','Apple iPad 2018新款 9.7英寸（A1893/A1954）','pb','苹果',NULL),(23,'images/tomtr/22.jpg','Apple iPad Air (iPad5) wifi版','pb','苹果',NULL),(24,'images/tomtr/22.jpg','Apple iPad Air 2 wifi版','pb','苹果',NULL),(25,'images/tomtr/22.jpg','Apple iPad 2017 9.7寸（A1822）','pb','苹果',NULL),(26,'images/tomtr/22.jpg','Apple iPad2','pb','苹果',NULL),(27,'images/tomtr/22.jpg','Apple iPad mini4','pb','苹果',NULL),(28,'images/tomtr/22.jpg','Apple iPad4 (iPad with Retina)','pb','苹果',NULL),(29,'images/tomtr/22.jpg','Apple The new iPad (iPad3)','pb','苹果',NULL),(30,'images/tomtr/22.jpg','Apple iPad Pro （10.5英寸）','pb','苹果',NULL),(31,'images/tomtr/22.jpg','Apple iPad','pb','苹果',NULL),(32,'images/tomtr/22.jpg','Apple iPad mini3','pb','苹果',NULL),(33,'images/tomtr/22.jpg','Apple iPad Pro (9.7英寸)','pb','苹果',NULL),(34,'images/tomtr/22.jpg','Apple iPad Air (iPad5) 4G版','pb','苹果',NULL),(35,'images/tomtr/22.jpg','Apple iPad Air 2 4G版','pb','苹果',NULL),(36,'images/tomtr/23.jpg','苹果 17年 13寸 MacBook Air','bj','苹果',NULL),(37,'images/tomtr/23.jpg','苹果 17年 13寸 MacBook Pro','bj','苹果',NULL),(38,'images/tomtr/23.jpg','苹果 11年 13寸 MacBook Air','bj','苹果',NULL),(39,'images/tomtr/23.jpg','苹果 15年 13寸 MacBook Air','bj','苹果',NULL),(40,'images/tomtr/23.jpg','苹果 15年 13寸 MacBook Pro','bj','苹果',NULL),(41,'images/tomtr/23.jpg','苹果 15年 11寸 MacBook Air','bj','苹果',NULL),(42,'images/tomtr/23.jpg','苹果 13年 11寸 MacBook Air','bj','苹果',NULL),(43,'images/tomtr/23.jpg','苹果 18年 13寸 MacBook Pro','bj','苹果',NULL),(44,'images/tomtr/23.jpg','苹果 13年 13寸 MacBook Air','bj','苹果',NULL),(45,'images/tomtr/23.jpg','苹果 17年 13寸 MacBookAir','bj','苹果',NULL),(46,'images/tomtr/23.jpg','苹果 11年 11寸 MacBook Air','bj','苹果',NULL),(47,'images/tomtr/23.jpg','苹果 10年 11寸 MacBook Air','bj','苹果',NULL),(48,'images/tomtr/23.jpg','苹果 16年 13寸 MacBook Pro','bj','苹果',NULL),(49,'images/tomtr/23.jpg','苹果 15年 12寸 MacBook','bj','苹果',NULL),(50,'images/tomtr/23.jpg','苹果 15年 15寸 MacBook Pro','bj','苹果',NULL),(51,'images/tomtr/23.jpg','苹果 10年 15寸 MacBook Pro','bj','苹果',NULL),(52,'images/tomtr/24.jpg','Apple Watch Series3','zm','苹果',NULL),(53,'images/tomtr/24.jpg','Apple Watch Series2','zm','苹果',NULL),(54,'images/tomtr/24.jpg','Apple Watch Series 1','zm','苹果',NULL),(55,'images/tomtr/24.jpg','苹果（Apple）AirPods蓝牙耳机(含充电底座)','zm','苹果',NULL),(56,'images/tomtr/24.jpg','Apple Watch Series 4','zm','苹果',NULL),(57,'images/tomtr/24.jpg','iPod touch 6代','zm','苹果',NULL),(58,'images/tomtr/24.jpg','苹果 Magic Mouse 2 苹果二代蓝牙鼠标','zm','苹果',NULL),(59,'images/tomtr/24.jpg','Apple Watch Series2 Nike+','zm','苹果',NULL),(60,'images/tomtr/24.jpg','Apple Watch Series3 Nike+','zm','苹果',NULL),(61,'images/tomtr/24.jpg','Apple Watch Series 4 Nike+','zm','苹果',NULL),(62,'images/tomtr/24.jpg','苹果 Apple Pencil 触控手写笔','zm','苹果',NULL),(63,'images/tomtr/24.jpg','Apple Pencil 第二代 触控手写笔','zm','苹果',NULL),(64,'','','','',NULL),(65,'','','','',NULL),(66,'','','','',NULL),(67,'images/tomtr/25.jpg','GoPrp Hero 6Black','sx','GoPro',NULL),(68,'images/tomtr/25.jpg','GoPro Hero 5 Black','sx','GoPro',NULL),(69,'images/tomtr/25.jpg','GoPro Hero 5 Session','sx','GoPro',NULL),(70,'images/tomtr/25.jpg','GoPro Hero（2018款）','sx','GoPro',NULL),(71,'images/tomtr/25.jpg','GoPro Hero 4 Silver','sx','GoPro',NULL),(72,'images/tomtr/25.jpg','GoPro Hero 4 Black','sx','GoPro',NULL),(73,'images/tomtr/25.jpg','GoPro Hero 4 Session','sx','GoPro',NULL),(74,'images/tomtr/20.jpg','华为 Mate8','type2','华为',NULL),(75,'images/tomtr/21.jpg','华为 P9 全网通','type2','华为',NULL),(76,'images/tomtr/26.jpg','华为 Mate7','type2','华为',NULL),(77,'images/tomtr/27.jpg','华为 P10 全网通版','type2','华为',NULL),(78,'images/tomtr/28.jpg','华为 Mate9 全网通','type2','华为',NULL),(79,'images/tomtr/29.jpg','华为 畅享5s','type2','华为',NULL),(80,'images/tomtr/30.jpg','华为 麦芒4','type2','华为',NULL),(81,'images/tomtr/31.jpg','华为 Nova 2s','type2','华为',NULL),(82,'images/tomtr/32.jpg','荣耀畅玩6X','type3','荣耀',NULL),(83,'images/tomtr/33.jpg','荣耀畅玩5X','type3','荣耀',NULL),(84,'images/tomtr/34.jpg','荣耀畅玩7X','type3','荣耀',NULL),(85,'images/tomtr/35.jpg','荣耀8 青春版','type3','荣耀',NULL),(86,'images/tomtr/36.jpg','荣耀8','type3','荣耀',NULL),(87,'images/tomtr/37.jpg','荣耀9','type3','荣耀',NULL),(88,'images/tomtr/38.jpg','荣耀10','type3','荣耀',NULL),(89,'images/tomtr/39.jpg','荣耀6','type3','荣耀',NULL),(90,'images/tomtr/40.jpg','小米手机4','type4','小米',NULL),(91,'images/tomtr/41.jpg','红米手机4A','type4','小米',NULL),(92,'images/tomtr/42.jpg','红米Note','type4','小米',NULL),(93,'images/tomtr/43.jpg','小米手机5','type4','小米',NULL),(94,'images/tomtr/44.jpg','红米Note3','type4','小米',NULL),(95,'images/tomtr/45.jpg','小米手机8','type4','小米',NULL),(96,'images/tomtr/46.jpg','小米手机6','type4','小米',NULL),(97,'images/tomtr/47.jpg','红米 Note4','type4','小米',NULL),(98,'images/tomtr/48.jpg','三星 Galaxy S7 edge','type5','三星',NULL),(99,'images/tomtr/49.jpg','三星 Galaxy Note 3','type5','三星',NULL),(100,'images/tomtr/50.jpg','三星 Galaxy S8','type5','三星',NULL),(101,'images/tomtr/51.jpg','三星 Galaxy S5','type5','三星',NULL),(102,'images/tomtr/52.jpg','三星 Galaxy S8+','type5','三星',NULL),(103,'images/tomtr/53.jpg','三星 Galaxy C7','type5','三星',NULL),(104,'images/tomtr/54.jpg','三星 Galaxy Note4','type5','三星',NULL),(105,'images/tomtr/55.jpg','三星 Galaxy A8 公开版','type5','三星',NULL),(106,'images/tomtr/56.jpg','OPPO R9s 全网通','type6','oppo',NULL),(107,'images/tomtr/57.jpg','OPPO R9 ( R9m/r9tm)','type6','oppo',NULL),(108,'images/tomtr/58.jpg','OPPO A57','type6','oppo',NULL),(109,'images/tomtr/59.jpg','vivo X9','type7','vivo',NULL),(110,'images/tomtr/60.jpg','vivo Y67 全网通','type7','vivo',NULL),(111,'images/tomtr/61.jpg','vivo X20','type7','vivo',NULL),(112,'images/tomtr/62.jpg','美图手机 T8','type8','美图手机',NULL),(113,'images/tomtr/63.jpg','美图手机 M8','type8','美图手机',NULL),(114,'images/tomtr/64.jpg','锤子 坚果 Pro 2','type9','锤子',NULL),(115,'images/tomtr/65.jpg','锤子 坚果 Pro ','type9','锤子',NULL),(116,'images/tomtr/66.jpg','魅族 魅蓝note5','type10','魅族',NULL),(117,'images/tomtr/67.jpg','魅族 魅蓝note3','type10','魅族',NULL),(118,'images/tomtr/68.jpg','一加手机6','type11','一加',NULL),(119,'images/tomtr/69.jpg','一加手机5','type11','一加',NULL),(120,'images/tomtr/70.jpg','360手机 N4s','type12','360手机',NULL),(121,'images/tomtr/71.jpg','360手机 N5','type12','360手机',NULL),(122,'images/tomtr/72.jpg','金立 s6（GN9010）','type13','金立',NULL),(123,'images/tomtr/73.jpg','金立 F100 （F100S）','type13','金立',NULL),(124,'images/tomtr/74.jpg','努比亚 Z11','type14','努比亚',NULL),(125,'images/tomtr/75.jpg','努比亚 Z17S','type14','努比亚',NULL),(126,'images/tomtr/76.jpg','索尼 Xreria Z5 （E6683/E6653）','type15','索尼',NULL),(127,'images/tomtr/77.jpg','索尼 Xreria XZ Premium','type15','索尼',NULL),(128,'images/tomtr/78.jpg','微软 Lumia 950','type16','微软',NULL),(129,'images/tomtr/79.jpg','微软 Lumia 640','type16','微软',NULL),(130,'images/tomtr/80.jpg','HTC10','type17','HTC',NULL),(131,'images/tomtr/81.jpg','HTC Desire 7088','type17','HTC',NULL),(132,'images/tomtr/82.jpg','联想z5','type18','联想',NULL),(133,'images/tomtr/83.jpg','联想ZUK Z2 Pro','type18','联想',NULL),(134,'images/tomtr/84.jpg','酷派 大神F1','type19','酷派',NULL),(135,'images/tomtr/85.jpg','酷派S6（9190/9190L）','type19','酷派',NULL),(136,'images/tomtr/86.jpg','诺基亚 X6','type20','诺基亚',NULL),(137,'images/tomtr/87.jpg','诺基亚 6','type20','诺基亚',NULL),(138,'images/tomtr/88.jpg','朵唯 L8 Plus','type21','朵唯',NULL),(139,'images/tomtr/89.jpg','朵唯 L9','type21','朵唯',NULL),(140,'images/tomtr/90.jpg','黑莓 KEYone','type22','黑莓',NULL),(141,'images/tomtr/91.jpg','黑莓 Q20','type22','黑莓',NULL),(142,'images/tomtr/92.jpg','酷派ivvi 小骨Max（CK3-01）','type23','ivvi',NULL),(143,'images/tomtr/93.jpg','ivvi 小i（SS1-01）','type23','ivvi',NULL),(144,'images/tomtr/94.jpg','摩托罗拉 Moto Z','type24','摩托罗拉',NULL),(145,'images/tomtr/95.jpg','摩托罗拉 Moto G （XT1079）','type24','摩托罗拉',NULL),(146,'images/tomtr/96.jpg','乐视 超级手机2','type25','乐视',NULL),(147,'images/tomtr/97.jpg','乐视 超级手机1s','type25','乐视',NULL),(148,'images/tomtr/98.jpg','中兴 BV0710','type26','中兴',NULL),(149,'images/tomtr/99.jpg','中兴 AXON 天机 mini 全网通','type26','中兴',NULL),(150,'images/tomtr/100.jpg','LG G3','type27','LG',NULL),(151,'images/tomtr/101.jpg','LG G4','type27','LG',NULL),(152,'images/tomtr/102.jpg','华硕飞马手机','type28','其他',NULL),(153,'images/tomtr/103.jpg','YOTA3','type28','其他',NULL),(154,'images/tomtr/22.jpg','华为平板MS','pb1',NULL,NULL),(155,'images/tomtr/22.jpg','华为揽阅 M2 青春版','pb1',NULL,NULL),(156,'images/tomtr/22.jpg','荣耀X2','pb2',NULL,NULL),(157,'images/tomtr/22.jpg','荣耀X1','pb2',NULL,NULL),(158,'images/tomtr/22.jpg','小米平板','pb3',NULL,NULL),(159,'images/tomtr/22.jpg','小米平板3','pb3',NULL,NULL),(160,'images/tomtr/22.jpg','三星 N欧特8.0 NS100','pb4',NULL,NULL),(161,'images/tomtr/22.jpg','三星GALAXY Tab 3 10.1','pb4',NULL,NULL),(162,'images/tomtr/22.jpg','联想Yoga Tab3 Plus','pb5',NULL,NULL),(163,'images/tomtr/22.jpg','台电 Tbook 16 Powr','pb6',NULL,NULL),(164,'images/tomtr/22.jpg','诺基亚 N1','pb7',NULL,NULL),(165,'images/tomtr/22.jpg','华硕 （ASUS）ZenPad10 Z300C','pb8',NULL,NULL),(166,'images/tomtr/23.jpg','华硕 XSSS 系列','bj1',NULL,NULL),(167,'images/tomtr/23.jpg','华硕 KSS','bj1',NULL,NULL),(168,'images/tomtr/23.jpg','华硕 K42','bj1',NULL,NULL),(169,'images/tomtr/23.jpg','华为 MateBook D 15寸系列','bj2',NULL,NULL),(170,'images/tomtr/23.jpg','华为 MateBook 系列','bj2',NULL,NULL),(171,'images/tomtr/23.jpg','联想 拯救者Y7000系列','bj3',NULL,NULL),(172,'images/tomtr/23.jpg','联想 ThinkPad E450','bj3',NULL,NULL),(173,'images/tomtr/23.jpg','联想 拯救者R720系列','bj3',NULL,NULL),(174,'images/tomtr/23.jpg','小米游戏本 15.6寸','bj4',NULL,NULL),(175,'images/tomtr/23.jpg','小米笔记本Air 12.5寸经典版','bj4',NULL,NULL),(176,'images/tomtr/23.jpg','戴尔 lnspiron灵越 15R5537 系列','bj5',NULL,NULL),(177,'images/tomtr/23.jpg','戴尔 N4030','bj5',NULL,NULL),(178,'images/tomtr/23.jpg','微软 （Microsoft）Surface GO','bj6',NULL,NULL),(179,'images/tomtr/23.jpg','微软（microsoft）Surface Pro 4','bj6',NULL,NULL),(180,'images/tomtr/23.jpg','三星300E4X','bj7',NULL,NULL),(181,'images/tomtr/23.jpg','三星 500R5H 系列','bj7',NULL,NULL),(182,'images/tomtr/23.jpg','神舟 战神 Z8','bj8',NULL,NULL),(183,'images/tomtr/23.jpg','神舟 战神ZX7 系列','bj8',NULL,NULL),(184,'images/tomtr/23.jpg','惠普 ENVY 14-j102TX','bj9',NULL,NULL),(185,'images/tomtr/23.jpg','惠普 ENVY 13（ah1002TU）','bj9',NULL,NULL),(186,'images/tomtr/23.jpg','索尼svf14系列','bj10',NULL,NULL),(187,'images/tomtr/23.jpg','索尼VPCS系列','bj10',NULL,NULL),(188,'images/tomtr/23.jpg','Acer E5-572G','bj11',NULL,NULL),(189,'images/tomtr/23.jpg','Acer 4752','bj11',NULL,NULL),(190,'images/tomtr/23.jpg','联想 扬天V310 14寸 系列','bj12',NULL,NULL),(191,'images/tomtr/23.jpg','Alienware 17(触控版)','bj13',NULL,NULL),(192,'images/tomtr/23.jpg','机械师 F117 系列','bj13',NULL,NULL),(193,'images/tomtr/24.jpg','大疆无人机 “御” Mavic Pro','zm1',NULL,NULL),(194,'images/tomtr/24.jpg','大疆无人机 Phantom 4 Pro','zm1',NULL,NULL),(195,'images/tomtr/24.jpg','华为 Watch2','zm2',NULL,NULL),(196,'images/tomtr/24.jpg','华为 Watch2 Pro','zm2',NULL,NULL),(197,'images/tomtr/24.jpg','Kindle Oasis','zm3',NULL,NULL),(198,'images/tomtr/24.jpg','Kindle Fire','zm3',NULL,NULL),(199,'images/tomtr/24.jpg','三星 Gear S3 经典版','zm4',NULL,NULL),(200,'images/tomtr/24.jpg','三星 Gear S3 先锋版','zm4',NULL,NULL),(201,'images/tomtr/24.jpg','Ticwatch 2 悦动版','zm5',NULL,NULL),(202,'images/tomtr/24.jpg','TicwatchS运动表','zm5',NULL,NULL),(203,'images/tomtr/24.jpg','AMAZFIT 运动手表2','zm6',NULL,NULL),(204,'images/tomtr/24.jpg','任天堂 Switch NS 游戏机/掌机','zm6',NULL,NULL);
/*!40000 ALTER TABLE `tomtr` ENABLE KEYS */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `mesage` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
INSERT INTO `vip` VALUES (1,'images/img-buttom/113.png','十分惊喜','100%有奖拿','images/img-buttom/135.jpg'),(2,'images/img-buttom/108.png','领券中心','领券购物更优惠','images/img-buttom/132.jpg'),(3,'images/img-buttom/114.png','试用中心','体验新潮好物','images/img-buttom/123.jpg'),(4,'images/img-buttom/109.png','最佳手气王','小积分 赢大奖','images/img-buttom/137.jpg');
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;

#
# Structure for table "viptab"
#

DROP TABLE IF EXISTS `viptab`;
CREATE TABLE `viptab` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `detailss` varchar(255) DEFAULT NULL,
  `detailsss` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `pirce` varchar(255) DEFAULT NULL,
  `mon` varchar(255) DEFAULT NULL,
  `pir` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Data for table "viptab"
#

/*!40000 ALTER TABLE `viptab` DISABLE KEYS */;
INSERT INTO `viptab` VALUES (1,'images/img-buttom/135.jpg','images/img-buttom/132.jpg','images/img-buttom/123.jpg','images/img-buttom/137.jpg','车轮 指尖陀螺 银黑色 静音轴承持久旋转指尖陀螺','雷柏 M100 蓝牙多模无线鼠标','快美特出风口车载香薰 哑光银','华为小天鹅蓝牙音箱 白色 蓝牙通话钢琴烤漆外观环绕音效','￥30<br>+积分300','￥35<br>+积分2000','￥45<br>+积分400','￥85<br>+积分400','去看看'),(2,'images/img-buttom/bf.jpg','images/img-buttom/ctd.jpg','images/img-buttom/yxj.jpg','images/img-buttom/wrj.jpg','蝙蝠侠打火机 炫彩指尖陀螺静音防风USB充电无明火','小米Yeelight床头灯','索尼PlayStation 4 游戏手柄 白色','米兔迷你四轴无人机 720P航拍远程遥控特技表演','￥35<br>+积分200','￥230<br>+积分200','￥345<br>+积分200','￥400<br>+积分200','去看看'),(3,'images/img-buttom/hrj.jpg','images/img-buttom/wwj.jpg','images/img-buttom/yyc.jpg','images/img-buttom/kx.jpg','摩米士 MFI认证苹果+安卓mirco+Type-C三合一','南国婴宝抓娃娃机 一键智能演示红外线感应仿真倒计时','美致1:10越野车 四驱动力双引擎','小熊多士炉煮蛋器','￥100<br>+积分100','￥160<br>+积分200','￥160<br>+积分200','￥189<br>+积分100','去看看'),(4,'images/img-buttom/hzj.jpg','images/img-buttom/phd.jpg','images/img-buttom/dzq.jpg','images/img-buttom/dog.jpg','冇心 3000mAh 移动电源 化妆镜+LED美颜补光灯+移动电源','Heng Balance智能平衡灯 榉木款','美科MK-8618智能版电子琴','斗牛犬CROSS HUMANITY音箱 黑色','￥110<br>+积分100','￥199<br>+积分100','￥280<br>+积分100','￥489<br>+积分100','去看看');
/*!40000 ALTER TABLE `viptab` ENABLE KEYS */;

#
# Structure for table "youpin"
#

DROP TABLE IF EXISTS `youpin`;
CREATE TABLE `youpin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

#
# Data for table "youpin"
#

/*!40000 ALTER TABLE `youpin` DISABLE KEYS */;
INSERT INTO `youpin` VALUES (1,'images/good/35.png'),(2,'images/good/19.jpg'),(3,'images/good/23.jpg'),(4,'images/good/27.jpg'),(5,'images/good/31.png'),(7,'images/good/36.png'),(8,'images/good/20.jpg'),(9,'images/good/20.jpg'),(10,'images/good/24.jpg'),(11,'images/good/28.png'),(12,'images/good/32.png'),(13,'images/good/37.jpg'),(14,'images/good/21.jpg'),(15,'images/good/25.jpg'),(16,'imags/good/29.png'),(17,'images/good/33.png'),(18,'images/good/38.jpg'),(19,'images/good/22.jpg'),(20,'images/good/26.jpg'),(21,'images/good/30.png'),(22,'images/good/34.png');
/*!40000 ALTER TABLE `youpin` ENABLE KEYS */;
