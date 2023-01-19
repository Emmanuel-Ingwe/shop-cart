// Sunglasses: price_1MRuSoHTTjgnB8fdMyVucLnI;
// Coffee: price_1MRuUxHTTjgnB8fdNP9qdVca;
// Camera: price_1MRuWKHTTjgnB8fdboMtPlW4;

const productsArray = [
    {
        id: "price_1MRuUxHTTjgnB8fdNP9qdVca",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MRuSoHTTjgnB8fdMyVucLnI",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MRuWKHTTjgnB8fdboMtPlW4",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };