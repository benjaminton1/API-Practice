//Fetching data from API
//Then adding parameters to request
fetch("https://hplussport.com/api/products?order=price")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {

    // Pulling first instance of data

    // console.log(jsonData);
    // var name = jsonData[0].name;
    // console.log(name);

    //Adding data to HTML page

    // var product = document.createElement("li");
    // product.innerHTML = name;
    // document.body.appendChild(product)

    //For Loop to Iterate Through Data
    for(items in jsonData) {
        var productName = jsonData[items].name;
        var products = document.createElement("h1");
        products.innerHTML = productName;
        document.body.appendChild(products);

        //Getting images for product
        var productImg = jsonData[items].image;
        var image = document.createElement("img");
        image.setAttribute("src", productImg);
        document.body.appendChild(image);
    

        //Display the price of each product
        var productPrice = jsonData[items].price;
        var prices = document.createElement("h2");
        prices.innerHTML = "$" + productPrice + ".00";
        document.body.appendChild(prices);
    }


})

