function hitungPersegiPanjang() {
    var panjang = document.getElementById('panjang').value;
    var lebar = document.getElementById('lebar').value;
    var luas = panjang * lebar;
    var keliling = 2 * (parseInt(panjang) + parseInt(lebar));
    document.getElementById('luasPersegiPanjang').innerText = luas;
    document.getElementById('kelilingPersegiPanjang').innerText = keliling;
}

function hitungBujurSangkar() {
    var sisi = document.getElementById('sisiBujurSangkar').value;
    var luas = sisi * sisi;
    var keliling = 4 * sisi;
    document.getElementById('luasBujurSangkar').innerText = luas;
    document.getElementById('kelilingBujurSangkar').innerText = keliling;
}

function hitungLingkaran() {
    var jariJari = document.getElementById('jariJari').value;
    var luas = Math.PI * jariJari * jariJari;
    var keliling = 2 * Math.PI * jariJari;
    document.getElementById('luasLingkaran').innerText = luas;
    document.getElementById('kelilingLingkaran').innerText = keliling;
}

function hideAll(bangunDatar) {
    document.getElementById("persegiPanjang").style.display = "none";
    document.getElementById("bujurSangkar").style.display = "none";
    document.getElementById("lingkaran").style.display = "none";
}
