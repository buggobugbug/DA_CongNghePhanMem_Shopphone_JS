CREATE TABLE KHACHHANG (
	maKH varchar(255) NOT NULL PRIMARY KEY,
	hotenKH varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
	sdt varchar(255),
	diachi VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
	taikhoan varchar(255),
	avatar varchar(255),
	FOREIGN KEY (taikhoan) REFERENCES TAIKHOAN(taikhoan)
);

CREATE TABLE TAIKHOAN(
	taikhoan varchar(255) NOT NULL PRIMARY KEY,
	matkhau varchar(255) NOT NULL
);

INSERT INTO TAIKHOAN(taikhoan, matkhau)
values
('abc', '123');

INSERT INTO KHACHHANG(maKH, hotenKH, sdt, diachi, taikhoan, avatar)
values
('2', 'Nguyễn Thị A', '0987863073', 'Trà Vinh', 'nhan', 'avatar.png');

CREATE TABLE NHASANXUAT(
	tenNSX varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL PRIMARY KEY
);

INSERT INTO NHASANXUAT(tenNSX)
values
('Apple');
INSERT INTO NHASANXUAT(tenNSX)
values
('Oppo');
INSERT INTO NHASANXUAT(tenNSX)
values
('Samsung');
INSERT INTO NHASANXUAT(tenNSX)
values
('Xiaomi');

CREATE TABLE LOAISANPHAM(
	tenloaiSP VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL PRIMARY KEY
);

INSERT INTO LOAISANPHAM(tenloaiSP)
values
('Android'),
('iOS');

CREATE TABLE SANPHAM(
	id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
	tenSP varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	soluong int NOT NULL,
	tenloaiSP VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	tenNSX varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	dungluong varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	ram varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	giatien float NOT NULL,
	manhinh varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	pin varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	ghichu text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
	mota varchar(255),
	FOREIGN KEY (tenloaiSP) REFERENCES LOAISANPHAM(tenloaiSP),
	FOREIGN KEY (tenNSX) REFERENCES NHASANXUAT(tenNSX)				
);

INSERT INTO SANPHAM (id, tenSP, soluong, tenloaiSP, tenNSX, dungluong, ram, giatien, manhinh, pin, ghichu, mota) VALUES
('1', 'iPhone 15 Pro Max', 20, 'iOS', 'Apple', '512 GB', '8 GB', '39690000', 'OLED6.7",Super Retina XDR', '4422 mAh, 20 W', 'Vào tháng 09/2023, cuối cùng Apple cũng đã chính thức giới thiệu iPhone 15 Pro Max 512 GB tại sự kiện ra mắt thường niên với nhiều điểm đáng chú ý, nổi bật trong số đó có thể kể đến như sự góp mặt của chipset Apple A17 Pro có trên máy, thiết kế khung titan hay cổng Type-C lần đầu có mặt trên điện thoại iPhone.', 'phone.jpg');

INSERT INTO SANPHAM (id, tenSP, soluong, tenloaiSP, tenNSX, dungluong, ram, giatien, manhinh, pin, ghichu, mota) VALUES
('2', 'OPPO Reno11 F 5G', 20, 'Android', 'Oppo', '256 GB', '8 GB', '8790000', 'AMOLED, 6.7", Full HD+', '5000 mAh, 67 W', 'OPPO Reno11 F 5G là một chiếc điện thoại tầm trung mới được OPPO ra mắt trong thời gian gần đây. Máy sở hữu nhiều ưu điểm nổi bật như thiết kế trẻ trung, màn hình đẹp, hiệu năng mạnh mẽ nhờ chip Dimensity 7050 5G, hứa hẹn mang đến trải nghiệm tốt khi sử dụng.', 'oppo-reno11-f-purple.webp');

INSERT INTO SANPHAM (id, tenSP, soluong, tenloaiSP, tenNSX, dungluong, ram, giatien, manhinh, pin, ghichu, mota) VALUES
('3', 'Xiaomi Redmi Note 13', 20, 'Android', 'Xiaomi', '128 GB', '8 GB', '4590000', 'AMOLED, 6.67", Full HD+', '5000 mAh, 33 W', 'Vào tháng 01/2024, Xiaomi Redmi Note 13 chính thức ra mắt tại Việt Nam, đánh dấu sự tiếp nối của dòng sản phẩm Redmi Note nổi tiếng. Điện thoại được trang bị cấu hình mạnh mẽ, thiết kế hiện đại, màn hình sắc nét và camera ấn tượng, hứa hẹn sẽ thu hút được sự quan tâm của người dùng Việt.', 'xiaomi-redmi-note-13-gold.jpg');


CREATE TABLE HOADON(
	maHD varchar(255) NOT NULL PRIMARY KEY,
	maKH varchar(255) NOT NULL,
	thoigiandat datetime,
	tenKH varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ,
	diachiKH varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ,
	sdtKH varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ,
	FOREIGN KEY (maKH) REFERENCES KHACHHANG(maKH)
);

CREATE TABLE CHITIETHOADON(
	maHD varchar(255),
	id int AUTO_INCREMENT,
	soluongdat VARCHAR(10) NOT NULL,
	tongtien float NOT NULL,
	PRIMARY KEY(maHD, id),
	FOREIGN KEY (maHD) REFERENCES HOADON(maHD),
	FOREIGN KEY (id) REFERENCES SANPHAM(id)
);