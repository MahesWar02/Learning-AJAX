let data_users_tag = document.getElementById("data_users");

fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(user => {
      data_users_tag.innerHTML += `
        <tr>
          <td><img src="${user.picture.thumbnail}"></td>
          <td>${user.name.first} ${user.name.last}</td>
          <td>${user.location.street.name} ${user.location.street.number}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
        </tr>`;
    });
  })

// // binding element html yang akan digunakan
// let data_users_tag = document.getElementById("data_users");

// // append data ke element html yang dimaksud
// data_users_tag.innerHTML = `
//         <tr>
//           <td>Foo</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;

// append data LAIN ke element html yang dimaksud
// data_users_tag.innerHTML += `
//         <tr>
//           <td>Bar</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;

// for (let i = 0; i < 10; i++) {
//   data_users_tag.innerHTML += `
//         <tr>
//           <td>Bar</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;
// }

// let i = 0;
// while(i < 10) {
//   data_users_tag.innerHTML += `
//         <tr>
//           <td>Bar</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;

//   i++;
// }

// let a = 1;

// a = a + 2;

// // cara pendek 1 :
// a++;

// // cara pendek 2 :
// a += 2;