const express = require("express");
const router = express.Router();


router.post('/groupProductByCategory', (req, res) => {
    console.log('hello from groupProductByCategory page')
    const data = req.body;
    const finalArr = [];
    data.forEach((item)=> {
        if(finalArr.some((oldCategory) => oldCategory.category_id == item.category_id)){
            let newCategory = finalArr.find(category => category.category_id == item.category_id)
            let index = finalArr.indexOf(newCategory)
            finalArr[index].products.push({
                product_id: item.product_id,
                product_name: item.product_name,
                product_cost: item.product_cost
            })
        }else{
            finalArr.push({
                category_id: item.category_id,
                category_name: item.category_name,
                products: [{
                    product_id: item.product_id,
                    product_name: item.product_name,
                    product_cost: item.product_cost
                }]
            })
        }
    })
    
    res.status(200).send(finalArr)
});


router.post('/changeTheFormat', (req, res) => {
    console.log('hello from changeTheFormat page')
    const data = req.body;
    const finalArr = [];

    const decimals = (num) =>{
        return (num < 10) ? '0' + num : num;
    }

    data.forEach((input) => {
        if(input.length == 8) {
            let date = `${input.slice(0,2)}/${input.slice(2,4)}/${input.slice(4,8)}`
            finalArr.push(date)
        } else{
            let date = new Date(input)
            finalArr.push([decimals(date.getDate()), decimals(date.getMonth()+1), date.getFullYear()].join('/'));
        }
    })
    
    const sorted = finalArr.sort((a,b) => new Date(a) - new Date(b));
    res.status(200).send(sorted)
});

module.exports = router;
