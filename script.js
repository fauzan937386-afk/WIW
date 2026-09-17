var webData = [
  // ================= TOOLS & PRODUKTIVITAS (BERGUNA) =================
  { id: "1", title: "Remove.bg", url: "https://www.remove.bg", category: "useful", description: "Hapus background foto otomatis berbasis AI." },
  { id: "2", title: "Photopea", url: "https://www.photopea.com", category: "useful", description: "Editor Photoshop gratis langsung di browser." },
  { id: "3", title: "VirusTotal", url: "https://www.virustotal.com", category: "useful", description: "Scan file dan link dari virus atau malware." },
  { id: "4", title: "TinyPNG", url: "https://tinypng.com", category: "useful", description: "Kompres gambar PNG dan JPG tanpa merusak kualitas." },
  { id: "5", title: "Convertio", url: "https://convertio.co", category: "useful", description: "Konversi segala format file secara online." },
  { id: "6", title: "iLovePDF", url: "https://www.ilovepdf.com", category: "useful", description: "Gabungkan, pisahkan, dan konversi file PDF." },
  { id: "7", title: "PDF24 Tools", url: "https://tools.pdf24.org", category: "useful", description: "Kumpulan alat pengolah PDF gratis tanpa batasan." },
  { id: "8", title: "Temp Mail", url: "https://temp-mail.org", category: "useful", description: "Email sementara gratis pencegah spam." },
  { id: "9", title: "Excalidraw", url: "https://excalidraw.com", category: "useful", description: "Papan tulis virtual gaya sketsa tangan." },
  { id: "10", title: "Carbon", url: "https://carbon.now.sh", category: "useful", description: "Buat gambar potongan kodingan yang indah." },
  { id: "11", title: "Unsplash", url: "https://unsplash.com", category: "useful", description: "Download stok foto resolusi tinggi gratis." },
  { id: "12", title: "Pexels", url: "https://www.pexels.com", category: "useful", description: "Stok foto dan video HD bebas royalti." },
  { id: "13", title: "Flaticon", url: "https://www.flaticon.com", category: "useful", description: "Koleksi jutaan ikon vektor gratis." },
  { id: "14", title: "Squoosh", url: "https://squoosh.app", category: "useful", description: "Pengompres gambar mutakhir buatan Google." },
  { id: "15", title: "TinyWoW", url: "https://tinywow.com", category: "useful", description: "Ratusan alat PDF, gambar, dan video gratis." },
  { id: "16", title: "Speedtest", url: "https://www.speedtest.net", category: "useful", description: "Uji kecepatan koneksi internetmu." },
  { id: "17", title: "Fast.com", url: "https://fast.com", category: "useful", description: "Cek kecepatan internet simpel dari Netflix." },
  { id: "18", title: "DeepL Translate", url: "https://www.deepl.com", category: "useful", description: "Penerjemah bahasa berteknologi AI akurat." },
  { id: "19", title: "AlternativesTo", url: "https://alternativeto.net", category: "useful", description: "Temukan aplikasi pengganti software mahal." },
  { id: "20", title: "Coolors", url: "https://coolors.co", category: "useful", description: "Generator kombinasi palet warna otomatis." },
  { id: "21", title: "Color Hunt", url: "https://colorhunt.co", category: "useful", description: "Inspirasi palet warna kurasi desainer." },
  { id: "22", title: "Canva", url: "https://www.canva.com", category: "useful", description: "Desain poster, slide, dan grafik instan." },
  { id: "23", title: "Wayback Machine", url: "https://archive.org/web/", category: "useful", description: "Lihat tampilan lama website di masa lalu." },
  { id: "24", title: "Hemingway App", url: "https://hemingwayapp.com", category: "useful", description: "Koreksi tulisan bahasa Inggris agar efektif." },
  { id: "25", title: "WolframAlpha", url: "https://www.wolframalpha.com", category: "useful", description: "Mesin pencari fakta, sains, dan data." },
  { id: "26", title: "Cleanup.pictures", url: "https://cleanup.pictures", category: "useful", description: "Hapus objek yang mengganggu dalam foto." },
  { id: "27", title: "Dictation.io", url: "https://dictation.io", category: "useful", description: "Ubah suara menjadi teks ketikan otomatis." },
  { id: "28", title: "Ventusky", url: "https://www.ventusky.com", category: "useful", description: "Peta animasi cuaca dan angin real-time." },
  { id: "29", title: "Flightradar24", url: "https://www.flightradar24.com", category: "useful", description: "Lacak posisi pesawat penerbangan di bumi." },
  { id: "30", title: "MarineTraffic", url: "https://www.marinetraffic.com", category: "useful", description: "Lacak lalu lintas kapal laut secara langsung." },
  { id: "31", title: "Have I Been Pwned", url: "https://haveibeenpwned.com", category: "useful", description: "Cek apakah emailmu pernah mengalami kebocoran." },
  { id: "32", title: "PairDrop", url: "https://pairdrop.net", category: "useful", description: "Kirim file antar perangkat lokal di browser." },
  { id: "33", title: "ToffeeShare", url: "https://toffeeshare.com", category: "useful", description: "Kirim file besar peer-to-peer tanpa batas." },
  { id: "34", title: "PrintFriendly", url: "https://www.printfriendly.com", category: "useful", description: "Ubah halaman artikel web jadi PDF bersih." },
  { id: "35", title: "MuscleWiki", url: "https://musclewiki.com", category: "useful", description: "Panduan gerakan olahraga fitnes target otot." },
  { id: "36", title: "Monkeytype", url: "https://monkeytype.com", category: "useful", description: "Tes kecepatan mengetik tampilan bersih." },
  { id: "37", title: "A Soft Murmur", url: "https://asoftmurmur.com", category: "useful", description: "Suara latar relaksasi hujan dan angin." },
  { id: "38", title: "JustWatch", url: "https://www.justwatch.com", category: "useful", description: "Cek tayangan film di platform streaming." },

  // ================= PROGRAMMING & DEV TOOLS =================
  { id: "39", title: "DevDocs", url: "https://devdocs.io", category: "useful", description: "Dokumentasi bahasa koding lengkap satu tempat." },
  { id: "40", title: "CodePen", url: "https://codepen.io", category: "useful", description: "Playground HTML, CSS, dan JS interaktif." },
  { id: "41", title: "Roadmap.sh", url: "https://roadmap.sh", category: "useful", description: "Panduan alur belajar karir dunia IT." },
  { id: "42", title: "Regex101", url: "https://regex101.com", category: "useful", description: "Uji coba dan pelajari aturan Regular Expression." },
  { id: "43", title: "StackBlitz", url: "https://stackblitz.com", category: "useful", description: "IDE Fullstack cepat langsung di browser." },
  { id: "44", title: "Replit", url: "https://replit.com", category: "useful", description: "Koding dan jalankan berbagai bahasa pemrograman." },
  { id: "45", title: "JSON Formatter", url: "https://jsonformatter.org", category: "useful", description: "Rapikan dan validasi format file JSON." },
  { id: "46", title: "JWT.io", url: "https://jwt.io", category: "useful", description: "Decode dan validasi JSON Web Tokens." },
  { id: "47", title: "Diffchecker", url: "https://www.diffchecker.com", category: "useful", description: "Bandingkan perbedaan teks atau kodingan." },
  { id: "48", title: "Crontab.guru", url: "https://crontab.guru", category: "useful", description: "Kalkulator dan editor format cron job." },
  { id: "49", title: "ExplainShell", url: "https://explainshell.com", category: "useful", description: "Penjelasan perintah terminal/bash Linux." },
  { id: "50", title: "CyberChef", url: "https://gchq.github.io/CyberChef/", category: "useful", description: "Alat enkripsi, dekripsi, dan manipulasi data." },

  // ================= HIBURAN, GAME & UNIK =================
  { id: "51", title: "Slither.io", url: "https://slither.io", category: "fun", description: "Game cacing multiplayer adiktif." },
  { id: "52", title: "Neal.fun", url: "https://neal.fun", category: "fun", description: "Kumpulan web eksperimen interaktif yang keren." },
  { id: "53", title: "Pointer Pointer", url: "https://pointerpointer.com", category: "fun", description: "Foto orang menunjuk tepat ke lokasi kursormu." },
  { id: "54", title: "Window Swap", url: "https://www.window-swap.com", category: "fun", description: "Lihat pemandangan dari jendela rumah orang lain." },
  { id: "55", title: "Quick, Draw!", url: "https://quickdraw.withgoogle.com", category: "fun", description: "Tebak gambar buatanmu pakai kecerdasan AI." },
  { id: "56", title: "Radio Garden", url: "https://radio.garden", category: "fun", description: "Putar bola dunia untuk dengar siaran radio lokal." },
  { id: "57", title: "RadioOOOO", url: "https://radiooooo.com", category: "fun", description: "Dengarkan musik dunia berdasarkan dekade tahun." },
  { id: "58", title: "Hacker Typer", url: "https://hackertyper.net", category: "fun", description: "Ketik keyboard acak berakting seperti peretas." },
  { id: "59", title: "Little Alchemy 2", url: "https://littlealchemy2.com", category: "fun", description: "Gabungkan 4 elemen bumi jadi benda baru." },
  { id: "60", title: "GeoGuessr", url: "https://www.geoguessr.com", category: "fun", description: "Tebak lokasi belahan bumi lewat Street View." },
  { id: "61", title: "Chess.com", url: "https://www.chess.com", category: "fun", description: "Main catur online lawan pemain seluruh dunia." },
  { id: "62", title: "Lichess", url: "https://lichess.org", category: "fun", description: "Main catur online 100% gratis tanpa iklan." },
  { id: "63", title: "Skribbl.io", url: "https://skribbl.io", category: "fun", description: "Game tebak gambar ramai-ramai bersama teman." },
  { id: "64", title: "Gartic Phone", url: "https://garticphone.com", category: "fun", description: "Game bisik gambar berantai yang bikin kocak." },
  { id: "65", title: "Incredibox", url: "https://www.incredibox.com", category: "fun", description: "Buat ritme musik beatbox unik dengan mudah." },
  { id: "66", title: "Drive & Listen", url: "https://driveandlisten.herokuapp.com", category: "fun", description: "Jalan-jalan keliling kota dunia naik mobil." },
  { id: "67", title: "EarthCam", url: "https://www.earthcam.com", category: "fun", description: "Nonton siaran langsung CCTV publik perkotaan." },
  { id: "68", title: "Zoomquilt", url: "https://zoomquilt.org", category: "fun", description: "Lukisan ilusi tanpa akhir yang di-zoom terus." },
  { id: "69", title: "Stellarium Web", url: "https://stellarium-web.org", category: "fun", description: "Peta luar angkasa dan rasi bintang 3D." },
  { id: "70", title: "Bored Button", url: "https://www.boredbutton.com", category: "fun", description: "Tekan tombol untuk buka website acak pereda bosan." },
  { id: "71", title: "The Useless Web", url: "https://theuselessweb.com", category: "fun", description: "Portal menuju situs-situs paling tidak berguna." },
  { id: "72", title: "Spend Bill Gates Money", url: "https://neal.fun/spend/", category: "fun", description: "Simulasi menghabiskan harta Bill Gates." },
  { id: "73", title: "Scale of the Universe", url: "https://htwins.net/scale2/", category: "fun", description: "Jelajahi skala benda dari kuark hingga galaksi." },
  { id: "74", title: "Worldometers", url: "https://www.worldometers.info", category: "fun", description: "Statistik live populasi dan data dunia." },
  { id: "75", title: "Weavesilk", url: "http://weavesilk.com", category: "fun", description: "Lukis seni cahaya simetris yang memukau." },
  { id: "76", title: "FutureMe", url: "https://www.futureme.org", category: "fun", description: "Kirim email untuk dirimu sendiri di masa depan." },
  { id: "77", title: "Staggering Beauty", url: "http://www.staggeringbeauty.com", category: "fun", description: "Belut menari mengikuti gerakan kursor secara liar." },
  { id: "78", title: "Endless Horse", url: "http://endless.horse", category: "fun", description: "Gambar kuda dengan kaki tak terhingga." },
  { id: "79", title: "Agar.io", url: "https://agar.io", category: "fun", description: "Game makan sel kecil agar menjadi sel raksasa." },
  { id: "80", title: "TypeRacer", url: "https://typeracer.com", category: "fun", description: "Balapan adu cepat mengetik lawan orang lain." },
  { id: "81", title: "My 90s TV", url: "https://www.my90stv.com", category: "fun", description: "Sensasi menonton TV acara era tahun 1990-an." },
  { id: "82", title: "Supercook", url: "https://www.supercook.com", category: "fun", description: "Cari resep berdasarkan sisa bahan di kulkas." },
  { id: "83", title: "Windows 93", http: "http://www.windows93.net", category: "fun", description: "Sistem operasi parodi Windows era 90-an." }
];

var currentCategory = "all";
var favorites = [];

function loadFavorites() {
  try {
    var stored = localStorage.getItem("wiw_favorites");
    if (stored) {
      favorites = JSON.parse(stored);
    }
  } catch(e) {
    favorites = [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("wiw_favorites", JSON.stringify(favorites));
  } catch(e) {}
}

function toggleFavorite(id) {
  var index = favorites.indexOf(id);
  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }
  saveFavorites();
  updateCounts();
  renderWebsites();
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    alert("URL berhasil disalin!");
  } else {
    var input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("URL berhasil disalin!");
  }
}

function openRandomSite() {
  if (webData.length === 0) return;
  var randomIndex = Math.floor(Math.random() * webData.length);
  var randomSite = webData[randomIndex];
  window.open(randomSite.url, "_blank");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderWebsites() {
  var grid = document.getElementById("webGrid");
  var searchInput = document.getElementById("searchInput");
  var query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  var filtered = [];
  for (var i = 0; i < webData.length; i++) {
    var item = webData[i];
    var isFav = favorites.indexOf(item.id) !== -1;

    var matchCat = false;
    if (currentCategory === "all") matchCat = true;
    else if (currentCategory === "fav") matchCat = isFav;
    else if (currentCategory === item.category) matchCat = true;

    var matchSearch = (item.title.toLowerCase().indexOf(query) !== -1) || 
                      (item.description.toLowerCase().indexOf(query) !== -1);
    
    if (matchCat && matchSearch) {
      filtered.push(item);
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">Website tidak ditemukan...</div>';
    return;
  }

  var html = "";
  for (var j = 0; j < filtered.length; j++) {
    var data = filtered[j];
    var isUseful = data.category === "useful";
    var badgeClass = isUseful ? "badge-useful" : "badge-fun";
    var badgeText = isUseful ? "Berguna" : "Hiburan";
    var isStarred = favorites.indexOf(data.id) !== -1;
    var starClass = isStarred ? "icon-btn active-fav" : "icon-btn";
    var starIcon = isStarred ? "★" : "☆";

    html += '<div class="card">' +
              '<div class="card-info">' +
                '<div class="card-title-row">' +
                  '<a href="' + data.url + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(data.title) + '</a>' +
                '</div>' +
                '<p>' + escapeHtml(data.description) + '</p>' +
              '</div>' +
              '<div class="card-right">' +
                '<span class="card-badge ' + badgeClass + '">' + badgeText + '</span>' +
                '<button class="' + starClass + '" onclick="toggleFavorite(\'' + data.id + '\')" title="Favorit">' + starIcon + '</button>' +
                '<button class="icon-btn" onclick="copyToClipboard(\'' + data.url + '\')" title="Salin Link">📋</button>' +
              '</div>' +
            '</div>';
  }

  grid.innerHTML = html;
}

function updateCounts() {
  var useful = 0;
  var fun = 0;

  for (var i = 0; i < webData.length; i++) {
    if (webData[i].category === "useful") useful++;
    if (webData[i].category === "fun") fun++;
  }

  document.getElementById("count-all").textContent = webData.length;
  document.getElementById("count-fav").textContent = favorites.length;
  document.getElementById("count-useful").textContent = useful;
  document.getElementById("count-fun").textContent = fun;
}

function setActiveButton(activeId) {
  var buttons = document.querySelectorAll(".category-btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  document.getElementById(activeId).classList.add("active");
}

function initEvents() {
  document.getElementById("btn-all").addEventListener("click", function() {
    currentCategory = "all";
    setActiveButton("btn-all");
    renderWebsites();
  });

  document.getElementById("btn-fav").addEventListener("click", function() {
    currentCategory = "fav";
    setActiveButton("btn-fav");
    renderWebsites();
  });

  document.getElementById("btn-useful").addEventListener("click", function() {
    currentCategory = "useful";
    setActiveButton("btn-useful");
    renderWebsites();
  });

  document.getElementById("btn-fun").addEventListener("click", function() {
    currentCategory = "fun";
    setActiveButton("btn-fun");
    renderWebsites();
  });

  document.getElementById("btnRandom").addEventListener("click", openRandomSite);

  document.getElementById("searchInput").addEventListener("input", renderWebsites);

  document.getElementById("themeSelect").addEventListener("change", function(e) {
    document.documentElement.setAttribute("data-theme", e.target.value);
  });
}

window.onload = function() {
  loadFavorites();
  updateCounts();
  renderWebsites();
  initEvents();
};
