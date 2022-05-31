export class ProductService {

    // getProductsSmall() {
    //     return fetch('fdata.json').then(res => res.json()).then(d => d.data);
    // }
  
    
    async getProducts() {
        const res = await fetch('http://127.0.0.1:8000/product_type_list/');
        const d = await res.json();
        return d.data;
    }
}
    