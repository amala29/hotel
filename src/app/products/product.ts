export class Product {
    constructor(
        public _id?: string,
        public categoryId?:string,
        public title?: string,
        public imageUrl?: string,
        public price?: number) {
    }

    getId() {
        return this._id;
    }
    getCategoryId(){
        return this.categoryId;
    }

    getTitle() {
        return this.title;
    }
    getImageUrl() {
        return this.imageUrl;
    }
    getPrice() {
        return this.price;
    }
}
