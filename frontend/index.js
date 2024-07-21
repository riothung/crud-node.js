const form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postData();
});

const postData = async () => {
  const formData = new FormData(form);
  formData.append("name", document.getElementById("name").value);
  formData.append("age", document.getElementById("age").value);
  formData.append("file", document.getElementById("image").files[0]);
  console.log(formData);
  const d = document.getElementById("data");
  const sendData = await fetch("http://localhost:3000/person-query", {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: formData,
  });
};

const getData = async () => {
  const getData = await fetch("http://localhost:3000/person");
  const result = await getData.json();
  console.log(result);
  const d = document.getElementById("getData");
  result.forEach((user) => {
    d.innerHTML += `
    <div class="wrapper">
    <div class="data">
    <p class="name">Name: ${user.name}</p>
    <p class="age">Age: ${user.age}</p>
    <img src="${user.image}" alt="">
    </div>
    </div>
    `;
  });
};

getData();
