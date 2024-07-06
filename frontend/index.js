async function fetchData(url) {
  const data = await fetch(url);
  const result = await data.json();

  return result;
}

const render = async () => {
  const data = await fetchData("http://localhost:3000/surat-masuk");
  const surat = document.getElementById("surat");
  surat.innerHTML = "";
  data?.forEach((element) => {
    surat.innerHTML += `
    <div class="surat">
      <p>Nomor Surat : ${element.nomor_surat}</p>
      <p>Tanggal Surat : ${element.tanggal_surat}</p>
      <p>Pengirim : ${element.pengirim}</p>
      <p>Penerima : ${element.penerima}</p>
      <p>Tujuan : ${element.tujuan}</p>
      <p>File : ${element.file}</p>
    </div>
    `;
  });
};

render();

console.log("halo");
