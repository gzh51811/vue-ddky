var express = require('express');
var router = express.Router();
var mongodb_gnj = require('../my_modules/mongodb_gnj');

/* GET home page. */
router.get('/mall_banner', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "mall_banner", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/mall_category', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "mall_category", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/home_banner', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "home_banner", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/home_goods', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "home_goods", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/popularSearches', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "popularSearches", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});


router.get('/shoplisttab', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "shoplisttab", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});
router.get('/shoplists', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "shoplists", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});
router.get('/shop', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "shop", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/goods', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "goods", {}, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

// dl
router.get('/login', function (req, res, next) {
    console.log("用户开始登陆")
    mongodb_gnj.cx("ddkysj", "user", {
        name: req.query.phoneNum,
        pwd: req.query.pswNum
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }

        if (result.length != 0) {
            // console.log("登陆请求数据库验证成功")
            req.session.name = req.query.phoneNum;
            console.log("session添加成功")
            res.json("ok");
        } else {
            // console.log("登陆请求数据库验证失败")
            res.json("on");
        }

    });
});
// zc
router.get('/zc', function (req, res, next) {
    console.log("用户开始注册")
    mongodb_gnj.cx("ddkysj", "user", {
        name: req.query.phoneNum
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }

        if (result.length == 0) {

            mongodb_gnj.tj("ddkysj", "user", [{
                name: req.query.phoneNum,
                pwd: req.query.pswNum
            }], function (err, result) {
                if (err) {
                    console.log('Error:' + err);
                    return;
                }
                console.log("用户写入成功")
                res.json("ok");
            });

        } else {
            // console.log("登陆请求数据库验证失败")
            res.json("on");
        }

    });
});
router.get('/tc', function (req, res) {
    req.session.name = null; // 删除session
    res.json("ok");
})




module.exports = router;