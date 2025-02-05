function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString('id-ID', options);

  document.getElementById('datetime').textContent = `${date} - ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hide");
    }, 3000); // 3 detik loading sebelum website muncul
});

function startMusic() {
    const audio = document.getElementById("audio-player");
    audio.play();
    closePopup();
}

function closePopup() {
    document.getElementById("music-popup").classList.remove("show");

    // **Hapus class dan kembalikan posisi scroll**
    document.body.classList.remove("no-scroll");
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition); // Kembalikan posisi scroll ke semula
}

function startMusic() {
    const audio = document.getElementById("audio-player");
    audio.play();
    closePopup();
}

function closePopup() {
    document.getElementById("music-popup").classList.remove("show");

    // **Pastikan scroll kembali normal setelah popup ditutup**
    setTimeout(() => {
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
    }, 10); // Jeda 10ms agar langsung terasa
}

window.addEventListener("load", () => {
    document.getElementById("music-popup").classList.add("show"); // Tampilkan popup saat halaman dimuat
});

function startMusic() {
    const audio = document.getElementById("audio-player");
    audio.play();
    closePopup();
}

function closePopup() {
    document.getElementById("music-popup").classList.remove("show");
}

// 📚 Jadwal Mata Pelajaran Otomatis
const jadwal = {
    "Senin": ["PJOK", "Bahasa Inggris", "Bahasa Indonesia"],
    "Selasa": ["PPKn", "Bahasa Inggris", "IPA", "IPS"],
    "Rabu": ["IPS", "Matematika", "Informatika"],
    "Kamis": ["IPA", "BK", "MTK", "Bahasa Indonesia"],
    "Jumat": ["Pendidikan Agama", "Prakarya"]
}; 

function tampilkanJadwal() {
    const hariIni = new Date().toLocaleDateString("id-ID", { weekday: "long" });
    const daftarJadwal = jadwal[hariIni] || ["Libur"];
    const jadwalElement = document.getElementById("jadwal-hari-ini");
    
    jadwalElement.innerHTML = daftarJadwal.map(pelajaran => `<li>${pelajaran}</li>`).join("");
}
tampilkanJadwal(); 

// 🎵 Pemutar Musik
const songs = [
    { title: ".Feast - Tarot", src: "Feast - Tarot (Official Lyric Video).mp3" },
    { title: "KANABOON - Song of The Dead", src: "Zom 100_ Bucket List of the Dead - Opening FULL Song Of The Dead by KANA-BOON (Lyrics).mp3" },
    { title: "Atarayo - Boku Wa...", src: "あたらよ-「僕は...」(Music Video) TVアニメ「僕の心のヤバイやつ」第2期OPテーマ.mp3" },
    { title: ".Feast - o,Tuan", src: "Feast - o Tuan (Official Lyric Video).mp3" },
    { title: ".Feast - Gugatan Rakyat Semesta", src: "Feast - Gugatan Rakyat Semesta (Official Music Video).mp3" },
    { title: "Hindia - Evakuasi", src: "Hindia - Evakuasi (Official Music Video).mp3" },
    { title: "Hindia - Evaluasi", src: "Hindia - Evaluasi (_Official Lyric & Commentary Video).mp3" },
    { title: "Ado - Elf", src: "【Ado】エルフ.mp3" },
    { title: "Hindia - Masalah Masa Depan", src: "Hindia - Masalah Masa Depan (Official Lyric Video).mp3" },
    { title: "Hindia - Berdansalah Karir Tak Ada Artinya", src: "Hindia - Berdansalah Karir Tak Ada Artinya (Official Lyric Video).mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio-player");
const title = document.getElementById("music-title");
const playPauseBtn = document.getElementById("play-pause"); 

function loadSong(index) {
    audio.src = songs[index].src;
    title.textContent = songs[index].title;
} 

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶";
    }
} 

document.getElementById("prev").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
});
document.getElementById("next").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
});
playPauseBtn.addEventListener("click", playPause); 

loadSong(currentSongIndex);