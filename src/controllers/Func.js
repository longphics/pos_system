const Menu = require('../models/Menu.js')

class Func {
    createMenu() {
        Menu.create({
            name: "Cơm chiên hải sản",
            type: "Rice",
            price: 25000,
            url: "https://shipdoandemff.com/wp-content/uploads/2017/06/com-chien-hai-san-nha-hang-shipdoandemFF.png"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });
        Menu.create({
            name: "Cơm chiên dương châu",
            type: "Rice",
            price: 25000,
            url: "https://ameovat.com/wp-content/uploads/2016/05/cach-lam-com-chien-duong-chau-600x481.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Cơm chiên cá mặn",
            type: "Rice",
            price: 25000,
            url: "https://monngonmoingay.com/wp-content/uploads/2015/08/3_CQC9663_ComChienCaManChay.png"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Cơm bò xào",
            type: "Rice",
            price: 25000,
            url: "https://foodparadise.vn/uploads/Product/LMNC/Com_chien/com_bo_KT.png"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Cơm sườn nướng",
            type: "Rice",
            price: 25000,
            url: "https://www.disneycooking.com/wp-content/uploads/2019/11/com-tam-suon-nuong.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Cơm cà ri bò",
            type: "Rice",
            price: 25000,
            url: "https://vtv1.mediacdn.vn/thumb_w/650/2017/com-ca-ri-bo-nhat-ban-1507597407630.png"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Bò bít tết",
            type: "Beef",
            price: 25000,
            url: "https://cdn.tgdd.vn/Files/2018/12/16/1138609/cach-lam-bo-bit-tet-don-gian-nhung-ngon-tuyet-cu-meo-202201041019494331.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Bò lúc lắc",
            type: "Beef",
            price: 25000,
            url: "https://www.thatlangon.com/wp-content/uploads/2020/09/bo-luc-lac-1.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Bò cuộn nấm nướng",
            type: "Beef",
            price: 25000,
            url: "http://baokhanhhoa.vn/dataimages/201503/original/images1044969_thit_bo.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Bò xào sả ớt",
            type: "Beef",
            price: 25000,
            url: "https://cdn.tgdd.vn/2020/06/CookRecipe/GalleryStep/thanh-pham-175.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Bò nướng ngũ vị",
            type: "Beef",
            price: 25000,
            url: "https://cdn.baogiaothong.vn/files/news/2017/11/16/102938-30a28279b37818c2632f5f8000c7a326-cach-lam-thit-bo-nuong.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Bò sốt tiêu đen",
            type: "Beef",
            price: 25000,
            url: "https://img-global.cpcdn.com/recipes/ed6366463f4d65e6/680x482cq70/bo-s%E1%BB%91t-tieu-den-recipe-main-photo.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Pizza thập cẩm",
            type: "Pizza",
            price: 25000,
            url: "https://yersin.edu.vn/images/images/yersin/News/Uploads/2014/02/PIZZA.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Pizza hải sản",
            type: "Pizza",
            price: 25000,
            url: "https://doiduavang.vn/wp-content/uploads/2021/01/pizza-nhan-hai-san-doi-dua-vang-scaled.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Pizza gà nướng nấm",
            type: "Pizza",
            price: 25000,
            url: "https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYTYDFVYNKAVC2-CZL3EYMAEKA1TJ/photo/a2a1636c41d3427b94f62123db699db5_1605520803879714506.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Pizza xúc xích",
            type: "Pizza",
            price: 25000,
            url: "https://www.huongnghiepaau.com/wp-content/uploads/2019/04/banh-pizza-thom-ngon.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Pizza bò bằm",
            type: "Pizza",
            price: 25000,
            url: "https://debanhpizza.files.wordpress.com/2013/10/331968176meat-lover.png"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Pizza rau củ",
            type: "Pizza",
            price: 25000,
            url: "https://shipdoandemff.com/wp-content/uploads/2017/06/Pizza-rau-c%E1%BB%A7.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Tôm chiên xù",
            type: "Fried",
            price: 25000,
            url: "https://haisanxanh.com/uploads/images/cach-lam-mon-tom-chien-xu%281%29.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Mực chiên",
            type: "Fried",
            price: 25000,
            url: "https://img.chebienmonngon.net/2020/02/recipe7146-prepare-step4-636420344184519577.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Cá viên chiên",
            type: "Fried",
            price: 25000,
            url: "https://vietpat.vn/wp-content/uploads/2015/12/ca-vien.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Xúc xích chiên",
            type: "Fried",
            price: 25000,
            url: "https://cf.shopee.vn/file/1bf258f5f68198a5f23634e12a16b0b5_tn"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Phô mai que",
            type: "Fried",
            price: 25000,
            url: "https://abar.vn/wp-content/uploads/2021/08/cach-lam-pho-mai-que.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Khoai tây chiên",
            type: "Fried",
            price: 25000,
            url: "http://norangtongdak.com/upload/product/khoai-tay-chien33030.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Sữa tươi trân châu đường đen",
            type: "Drink",
            price: 25000,
            url: "https://cdn.cet.edu.vn/wp-content/uploads/2020/02/sua-tuoi-tran-chau-duong-den.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà sữa truyền thống",
            type: "Drink",
            price: 25000,
            url: "https://ngonaz.com/wp-content/uploads/2021/10/cach-lam-tra-sua-truyen-thong-1.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà sữa socola",
            type: "Drink",
            price: 25000,
            url: "https://cf.shopee.vn/file/007fa89a30a19f04429c0fdff7682c85"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà sữa matcha",
            type: "Drink",
            price: 25000,
            url: "https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/n%E1%BA%A5u%20%C4%83n/tra-sua-matcha-tran-chau-den.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà chanh",
            type: "Drink",
            price: 25000,
            url: "https://cdn.tgdd.vn/Files/2021/08/23/1377290/cach-lam-tra-chanh-hong-kong-ngon-chuan-vi-ngoai-quan-202201210008425468.jpeg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà đào",
            type: "Drink",
            price: 25000,
            url: "https://www.huongnghiepaau.com/wp-content/uploads/2017/07/tra-dao.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà vải hoa hồng",
            type: "Drink",
            price: 25000,
            url: "https://i.pinimg.com/474x/ae/6f/35/ae6f35ee771bd41bb034048b1c81bb0a.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Trà chanh dây",
            type: "Drink",
            price: 25000,
            url: "https://vn-live-05.slatic.net/p/bfd46dc4728b72d95bf67d34a7c779f5.jpg_525x525q80.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Cam vắt",
            type: "Drink",
            price: 25000,
            url: "https://smoothiedays.com/wp-content/uploads/2021/02/nuoc-ep-cam-3.png"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });

        Menu.create({
            name: "Rau má sữa dừa",
            type: "Drink",
            price: 25000,
            url: "https://cdn.bepcuoi.com/media/720-rau-ma-sua-dua-bepcuoi-111.jpg"
        }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        });
    }
}

module.exports = new Func()