const createbookingDetails = (name,price) => {
    return {
            price:price,
            agent:name,
        };
};

module.exports = { 
    createbookingDetails
};