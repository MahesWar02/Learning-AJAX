let data_users_tag = document.getElementById("data_users");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) => {
      data_users_tag.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${product.thumbnail}" alt="${product.title}" class="img-thumbnail me-3" style="width: 100px;">
              <div>
                <h5>${product.title}</h5>
                <p class="text-muted">
                  ${product.description} <br>
                  <strong>Price:</strong> $${product.price} <br>
                  <strong>Rating:</strong> ${product.rating} <br>
                  <strong>Stock:</strong> ${product.stock} units
                </p>
              </div>
            </div>
          </td>
          <td>
            <button class="btn btn-info mb-2">Detail</button>
            <button class="btn btn-warning mb-2">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>`;
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
