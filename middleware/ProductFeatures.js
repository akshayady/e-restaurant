class ProductFeatures  {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    //filter
    filtering() {
        return this;
    } 

    //sort

    sorting() {
        if(this.queryString.sort) {
            const sortBy = this.queryString.sort.split(' , ').join(' ');
            if(sortBy === 'price dec'){
                this.query = this.query.sort(sortBy).reverse()
            } else{ 
                this.query = this.query.sort(sortBy)
            }
        } else{
            this.query.sort('-createdAt')
        }
        return this;

     }

    //pagination
    pagination() { 
        return this;

    }
}

module.exports = ProductFeatures