const express = require('express');
const router = express.Router();

const axios = require('axios')
var CryptoJS = require("crypto-js");
//Get GET     find: api/user?username=Binh  
router.get('/', async(req, res) => {

        const query = req.query;

        var mess = 'requestId=test01&amount=99999&orderId=test01&orderInfo=testinfo&returnUrl=https://momo.vn&notifyUrl=https://momo.vn&extraData=name=binh'
        var key = '7OFeEEMd6JZj7xIXndDQw41zie2em3gZ'
            //   res.send(CryptoJS.HmacSHA256(mess, key).toString());
        let taochuky = {
            'partnerCode': process.env.partnerCode,
            'accessKey': process.env.accessKey,
            'requestId': req.query.requestId,
            'amount': req.query.amount,
            'orderId': req.query.orderId,
            'orderInfo': req.query.orderInfo,
            'returnUrl': 'https://momo.vn',
            'notifyUrl': 'https://momo.vn',
            'extraData': req.query.extraData,
        };
        let chukypara = Object.entries(taochuky).map(e => e.join('=')).join('&');


        CryptoJS.HmacSHA256(chukypara, process.env.secretKey).toString()

        let myParams = {
            'partnerCode': process.env.partnerCode,
            'accessKey': process.env.accessKey,
            'requestId': req.query.requestId,
            'amount': req.query.amount,
            'orderId': req.query.orderId,
            'extraData': req.query.extraData,
            'orderInfo': req.query.orderInfo,
            'returnUrl': 'https://momo.vn',
            'notifyUrl': 'https://momo.vn',
            'signature': CryptoJS.HmacSHA256(chukypara, process.env.secretKey).toString(),
            'requestType': 'captureMoMoWallet',
        };
        let u = Object.entries(myParams).map(e => e.join('=')).join('&');
        // res.json({ url: myParams });

        axios
            .post(`https://test-payment.momo.vn/gw_payment/transactionProcessor`, myParams, {
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((response) => {
                var temp = response.data;
                res.json(temp)

            })
            .catch((error) => {
                res.json(error)
            })

    }

);

module.exports = router;