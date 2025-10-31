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

    document.getElementById("hasil").innerHTML = hasilText `
  <div class="hadist>
    <h3>📜 Hadist Tentang Zakat </h3>
    <p><em>
    Rasululullah SAW bersabda:
    "Islam dibangun atas lima perkara, yaitu bersaksi bahwa tiada Tuhan selain Allah
    dan Muhammad adalah utusan Allah, mendirikan sholat, menunaikan zakat, berpuasa di bulan ramadhan,
    dan menunaikan haji bagi yang mampu."
    (HR. Bukhari dan Muslim)
    </em></p>
    <p><strong>Artinya:</strong>
    "Zakat adalah salah satu rukun islam yang wajib bagi setiap muslim yang mampu,
    untuk membersihkan harta dan membantu sesama,"
    </p>
  </div>  
  `;
  document.getElementById("hasil").innerHTML = hasilText;
});

