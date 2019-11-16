const express = require('express');
const router = express.Router();



//Get GET     find: api/user?username=Binh  
router.get('/', async(req, res) => {



    const query = req.query;

    const m_partnerCode = query.partnerCode;
    const m_accessKey = query.accessKey;
    const m_requestId = query.requestId;
    const m_orderId = query.orderId;
    const m_requestType = query.requestType;
    const m_amount = query.amount;
    const m_transId = query.transId;
    const m_payType = query.payType;
    const m_errorCode = query.errorCode;
    const m_message = query.message;
    const m_localMessage = query.localMessage;
    const m_extraData = query.extraData;
    const m_signature = query.signature;
    const m_orderInfo = query.orderInfo;

    res.json({
        "confirmation": 'success',
        data: {
            "orderId": m_orderId,
            "requestType": m_requestType,
            "amount": m_amount,
            "transId": m_transId,
            "payType": m_payType,
            "orderInfo": m_orderInfo
        }
    });

});

module.exports = router;