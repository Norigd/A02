console.log("hello world");
    var client = contentful.createClient({
        space: 'rtjgjqro74cv',
        accessToken: '0Dg3ndckcmn0d7bG8kN8Glf3d409KGWsMcmpxH1hjIk',
    });

    var allProducts = document.getElementById('all-products');

    client.getEntries({ content_type: 'homePage', }).then(function (entries) {
    entries.items.forEach(function (entry) {

        var productDiv = document.createElement('div');
        var name = document.createElement('h2');
        name.innerHTML = entry.fields.name;
        productDiv.append(name);
        allProducts.append(productDiv);



        console.log(entry.fields.imageProduct.fields.file.url);
        var imageProduct = document.createElement('img');
        imageProduct.classList.add('image-prduct');
        if (entry.fields.imageProduct) {
        imageProduct.src = entry.fields.imageProduct.fields.file.url;
        productDiv.append(imageProduct);
        }


  });
});

var productDescriptions = document.getElementById('product-descriptions');

client.getEntries({ content_type: 'homePage', }).then(function (entries) {
  entries.items.forEach(function (entry) {

    var productDiv = document.createElement('div');
    var description = document.createElement('h3');
    description.innerHTML = entry.fields.description;
    productDiv.append(description);
    productDescriptions.append(productDiv);
  });
});

var productPrices = document.getElementById('product-prices');

client.getEntries({ content_type: 'homePage', }).then(function (entries) {
  entries.items.forEach(function (entry) {

    var productDiv = document.createElement('div');
    var price = document.createElement('h3');
    price.innerHTML = entry.fields.price;
    productDiv.append(price);
    productPrices.append(productDiv);
  });
});