var express = require('express');
var router = express.Router();
const shop_controller = require('../controllers/shopController')
// const shop_controller = require('../controllers/newController')
/* GET users listing. */
router.get('/news_list', shop_controller.get_new_list);
// router.get('/', shop_controller.get_shop_list);
router.get('/category_list', shop_controller.get_category_list);
router.get('/banner_list', shop_controller.get_banner_list);
router.get('/video_list', shop_controller.get_video_list);

module.exports = router;
