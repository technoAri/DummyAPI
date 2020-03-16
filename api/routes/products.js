const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { 
    res.status(200).json({
        
            "page": 2,
            "per_page": 6,
            "total": 12,
            "total_pages": 2,
            "data": [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
                },
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
                },
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
                },
                {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
                }
            ]
        
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered special ID',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed an ID',
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product'
    });
});

module.exports = router;