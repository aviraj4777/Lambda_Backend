function Product(n) {
    this.name = n;
}

let d = new Product("Ashish");
console.log(d);
Product.prototype.display = function() {console.log("Name is ", this.name);}
d.display();
