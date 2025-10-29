document.getElementById("zakatForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const harta = parseFloat(document.getElementById("harta").value);
  const hutang = parseFloat(document.getElementById("hutang").value);
  const hargaEmas = parseFloat(document.getElementById("hargaEmas").value);

  const totalBersih = harta - hutang;
  const nisab = 85 * hargaEmas; // 85 gram emas

  let hasilText = "";

  if (totalBersih >= nisab) {
    const zakat = totalBersih * 0.025;
    hasilText = `
      Total Harta Bersih: Rp ${totalBersih.toLocaleString("id-ID")}<br>
      Nisab: Rp ${nisab.toLocaleString("id-ID")}<br>
      <strong>Wajib Zakat</strong><br>
      Jumlah Zakat yang Harus Dibayar: <strong>Rp ${zakat.toLocaleString("id-ID")}</strong>
    `;
  } else {
    hasilText = `
      Total Harta Bersih: Rp ${totalBersih.toLocaleString("id-ID")}<br>
      Nisab: Rp ${nisab.toLocaleString("id-ID")}<br>
      <strong>Tidak Wajib Zakat</strong> karena belum mencapai nisab.
    `;
  }

  document.getElementById("hasil").innerHTML = hasilText;
});
