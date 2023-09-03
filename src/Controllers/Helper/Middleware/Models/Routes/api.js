const express = require('express');
const router= express.Router();



const DemoController = require('../Controllers/blogController');
const DemoController = require('../Controllers/blogDetailsController');
const DemoController = require('../Controllers/commentController');
const DemoController = require('../Controllers/messageController');
const DemoController = require('../Controllers/portfolioController');

const DemoController = require('../Controllers/productController');
const DemoController = require('../Controllers/profitController');
const DemoController = require('../Controllers/projectController');
const DemoController = require('../Controllers/serviceController');
const DemoController = require('../Controllers/titleController');


// URL Params
router.get('/demo1/:name/:city',DemoController.demo1);


// Request Body
router.post('/demo2',DemoController.demo2);

// Header
router.post('/demo3',DemoController.demo3);

// Cookies
router.post('/demo4',DemoController.demo4);


module.exports=router;