const express = require('express');
const router = express.Router();

const axios = require('axios')
var CryptoJS = require("crypto-js");
const uuidv1 = require('uuid/v1');
//Get GET     find: api/user?username=Binh  
router.get('/', async(req, res) => {

        const query = req.query;
        _orderid = uuidv1();
        _pgprice = '99000';

        var mess = 'requestId=test01&amount=99999&orderId=test01&orderInfo=testinfo&returnUrl=http://localhost:8080/admin/mythanhtoan&notifyUrl=http://localhost:8080/admin/mythanhtoan&extraData=name=binh'
        var key = '7OFeEEMd6JZj7xIXndDQw41zie2em3gZ'
            //   res.send(CryptoJS.HmacSHA256(mess, key).toString());
        let taochuky = {
            'partnerCode': process.env.partnerCode,
            'accessKey': process.env.accessKey,
            'requestId': req.query.requestId,
            'amount': _pgprice,
            'orderId': _orderid,
            'orderInfo': req.query.orderInfo,
            'returnUrl': 'http://localhost:8080/momo',
            'notifyUrl': 'http://localhost:8080/momo',
            'extraData': req.query.extraData,
        };
        let chukypara = Object.entries(taochuky).map(e => e.join('=')).join('&');


        CryptoJS.HmacSHA256(chukypara, process.env.secretKey).toString()

        let myParams = {
            'partnerCode': process.env.partnerCode,
            'accessKey': process.env.accessKey,
            'requestId': req.query.requestId,
            'amount': _pgprice,
            'orderId': _orderid,
            'extraData': req.query.extraData,
            'orderInfo': req.query.orderInfo,
            'returnUrl': 'http://localhost:8080/momo',
            'notifyUrl': 'http://localhost:8080/momo',
            'signature': CryptoJS.HmacSHA256(chukypara, process.env.secretKey).toString(),
            'requestType': 'captureMoMoWallet',
        };
        let u = Object.entries(myParams).map(e => e.join('=')).join('&');
        // res.json({ url: myParams });
        console.log(uuidv1());
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

    //message=Success

);
//xu ly thanh toan
router.get('/return', async(req, res) => {
    var result = req.query;
    var a = result + "1";
    console.log(a)
        // if (result.message == 'Success') console.log(result.localMessage)
        // else console.log(result.localMessage)
    res.send("123");
    //message=Success
});


module.exports = router;