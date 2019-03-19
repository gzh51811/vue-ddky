var express = require('express');
var router = express.Router();
var mongodb_gnj = require('../my_modules/mongodb_gnj');

/* GET home page. */
router.get('/mall_banner', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "mall_banner", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/mall_category', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "mall_category", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/home_banner', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "home_banner", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/home_goods', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "home_goods", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});

router.get('/popularSearches', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "popularSearches", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});


router.get('/shoplisttab', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "shoplisttab", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});
router.get('/shoplists', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "shoplists", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});
router.get('/shop', function (req, res, next) {
    mongodb_gnj.cx("ddkysj", "shop", {
    }, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        res.json(result[0])

    });
});
module.exports = router;