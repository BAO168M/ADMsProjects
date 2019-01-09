#1:进入swatch数据库中
USE swatch;
#2:创建首页轮播表
CREATE TABLE sw_IdxSwiper(
id    INT PRIMARY KEY AUTO_INCREMENT,
img_url VARCHAR(255),
img_txt VARCHAR(128),
img_href VARCHAR(255)
);
INSERT INTO sw_IdxSwiper VALUES
(null,"http://127.0.0.1:3000/img/Idx-swiper1.jpg","了解更多","#");
INSERT INTO sw_IdxSwiper VALUES
(null,"http://127.0.0.1:3000/img/Idx-swiper2.jpg","DISCOVER","#");
INSERT INTO sw_IdxSwiper VALUES
(null,"http://127.0.0.1:3000/img/Idx-swiper3.jpg","了解更多","#");
INSERT INTO sw_IdxSwiper VALUES
(null,"http://127.0.0.1:3000/img/Idx-swiper4.jpg","DISCOVER","#");


#1:进入swatch数据库中
USE swatch;
#2:创建首页ul列表内容
CREATE TABLE sw_IdxUl(
id    INT PRIMARY KEY AUTO_INCREMENT,
li_href VARCHAR(255),
img_url VARCHAR(255),
li_title VARCHAR(128),
li_desc VARCHAR(255)
);
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner1.jpg",
"斯沃琪百搭女表",
"斯沃琪简约而不简单，来这里购买女士系列腕表。色彩斑斓的创意抑或时髦流行的腕表—适合任何女士的小物");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner2.jpg",
"斯沃琪型格男表",
"在这里可以买到最新的斯沃琪男士腕表。无论你是怎样的风格，总有一款斯沃琪腕表适合你。将经典永恒系于手腕，抑或装点一抹缤纷色彩于腕间");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner3.jpg",
"DEEP WONDER",
"丰富的色彩搭配极优质的欧缔兰面料与闪亮水晶，尽情闪耀吧！");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner4.jpg",
"SWATCH X HACKETT",
"When Swiss made becomes very British: Swatch and Hackett kick off their first collaboration");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner5.jpg",
"SKINIRONY 超薄金属系列",
"标志性的经典系列和现代优雅相碰撞，通过经典永恒的材质打造出优雅和光泽感。Swatch SKIN超薄金属系列腕表的厚度仅5.8毫米，是Swatch推出的首款金属材质超薄腕表");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner6.jpg",
"斯沃琪和平饭店艺术中心",
"一览所有在斯沃琪和平饭店艺术中心 (Swatch Art Peace Hotel) 居住过的艺术家留下的作品");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner7.jpg",
"SISTEM51 IRONY",
"探索 SISTEM51 IRONY 的优雅设计和革命性机械腕表科技。");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner8.jpg",
"SWATCH搜索器",
"探索自 1983 年以来创作的全部 Swatch 腕表。");
INSERT INTO sw_IdxUl VALUES
(null,"#","http://127.0.0.1:3000/img/Index-banner9.jpg",
"SWATCH GLAM",
"坠入Swatch魅惑时空");