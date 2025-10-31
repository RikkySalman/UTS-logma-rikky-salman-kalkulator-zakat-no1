document.getElementById("zakatForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // --- Ambil data dari input ---
  const harta = parseFloat(document.getElementById("harta").value);
  const hutang = parseFloat(document.getElementById("hutang").value);
  const hargaEmas = parseFloat(document.getElementById("hargaEmas").value);

  // --- Validasi input ---
  if (isNaN(harta) || isNaN(hutang) || isNaN(hargaEmas)) {
    alert("Pastikan semua kolom diisi dengan angka yang valid.");
    return;
  }

  // --- Perhitungan zakat ---
  const totalBersih = harta - hutang;
  const nisab = 85 * hargaEmas; // Nisab = 85 gram emas
  let zakat = 0;
  let hasilText = "";

  if (totalBersih >= nisab) {
    zakat = totalBersih * 0.025;
    hasilText = `
      <h3>💰 Hasil Perhitungan Zakat:</h3>
      <table class="result-table animated-table slide-in">
        <tr><th>Keterangan</th><th>Nilai (Rp)</th></tr>
        <tr><td>Total Harta</td><td>${harta.toLocaleString("id-ID")}</td></tr>
        <tr><td>Hutang</td><td>${hutang.toLocaleString("id-ID")}</td></tr>
        <tr><td>Harta Bersih</td><td>${totalBersih.toLocaleString("id-ID")}</td></tr>
        <tr><td>Nisab (85 gram emas)</td><td>${nisab.toLocaleString("id-ID")}</td></tr>
        <tr><td><strong>Zakat (2.5%)</strong></td><td><strong>${zakat.toLocaleString("id-ID")}</strong></td></tr>
      </table>
      <p><strong>Status:</strong> Wajib Zakat ✅</p>
    `;
  } else {
    hasilText = `
      <h3>💰 Hasil Perhitungan Zakat:</h3>
      <table class="result-table animated-table slide-in">
        <tr><th>Keterangan</th><th>Nilai (Rp)</th></tr>
        <tr><td>Total Harta</td><td>${harta.toLocaleString("id-ID")}</td></tr>
        <tr><td>Hutang</td><td>${hutang.toLocaleString("id-ID")}</td></tr>
        <tr><td>Harta Bersih</td><td>${totalBersih.toLocaleString("id-ID")}</td></tr>
        <tr><td>Nisab (85 gram emas)</td><td>${nisab.toLocaleString("id-ID")}</td></tr>
      </table>
      <p><strong>Status:</strong> Tidak Wajib Zakat ❌ (karena belum mencapai nisab)</p>
    `;
  }

  // --- Tambahkan hadis ---
  hasilText += `
    <div class="hadist-box" style="margin-top:15px; background:#fff; padding:10px; border-radius:8px;">
      <h3>📜 Hadis Tentang Zakat</h3>
      <p><em>
        Rasulullah SAW bersabda:
        "Islam dibangun atas lima perkara, yaitu bersaksi bahwa tiada Tuhan selain Allah
        dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat,
        berpuasa di bulan Ramadan, dan menunaikan haji bagi yang mampu."
        (HR. Bukhari dan Muslim)
      </em></p>
      <p><strong>Artinya:</strong>
        Zakat adalah salah satu rukun Islam yang wajib bagi setiap muslim yang mampu,
        untuk membersihkan harta dan membantu sesama.
      </p>
    </div>
  `;

  // --- Tambahkan penjelasan hukum logika ---
  hasilText += `
    <div class="logika" style="margin-top:15px; background:#f5f5f5; padding:10px; border-radius:8px;">
      <p>
        🧠 <strong>Hukum logika pada perhitungan zakat di atas</strong> yaitu 
        <em>hukum implikasi</em> dan <em>hukum negasi</em>.
        Hukum implikasi menyatakan bahwa <strong>jika total harta bersih seseorang mencapai
        atau melebihi nisab (P), maka ia wajib membayar zakat (Q)</strong>.
        Sedangkan hukum negasi menyatakan bahwa <strong>jika tidak mencapai nisab (¬P),
        maka tidak wajib zakat (¬Q)</strong>. Secara logika dapat ditulis sebagai:
        <strong>Jika P maka Q</strong>.
      </p>
    </div>
  `;

  // --- Tampilkan hasil di halaman ---
  const hasilEl = document.getElementById("hasil");
  hasilEl.innerHTML = hasilText;

  // --- Trigger ulang animasi setiap kali tombol ditekan ---
  const tableEl = hasilEl.querySelector(".animated-table");
  if (tableEl) {
    tableEl.classList.remove("slide-in");
    void tableEl.offsetWidth; // paksa reflow
    tableEl.classList.add("slide-in");
  }
});
