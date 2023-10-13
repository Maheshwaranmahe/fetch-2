fetch('https://fakestoreapi.com/products/category/jewelery')
.then((res) => res.json())
.then((data) => {
  let text = '';
  data.forEach((values) => {
    text += `
      <div class="product">
        <h2>${values.title}</h2>
        <p>ID: ${values.id}</p>
        <p>Price: $${values.price}</p>
        <p>Description: ${values.description}</p>
        <img src="${values.image}">
      </div>
    `;
  });
  document.getElementById('result').innerHTML = text;
})