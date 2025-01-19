// Menangani form submit untuk menambahkan data ke tabel
document.getElementById('add-report-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit otomatis

    // Ambil data dari input form
    const nim = document.getElementById('student-nim').value;
    const name = document.getElementById('student-name').value;
    const prodi = document.getElementById('student-Prodi').value;
    const semester = document.getElementById('semester').value;
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;
    const sks = document.getElementById('sks').value;
    const dosen = document.getElementById('dosen').value;
    const kehadiran = document.getElementById('kehadiran').value;
    const absen = document.getElementById('absen').value;
    const status = document.getElementById('status').value;

    // Membuat elemen baru untuk baris tabel
    const table = document.querySelector('.academic-report tbody');
    const newRow = document.createElement('tr');

    // Menambahkan data ke dalam kolom
    newRow.innerHTML = `
        <th>${nim}</th>
        <td>${name}</td>
        <th>${prodi}</th>
        <td>${semester}</td>
        <td>${subject}</td>
        <td>${grade}</td>
        <td>${sks}</td>
        <td>${dosen}</td>
        <th>${kehadiran}</th>
        <th>${absen}</th>
        <th>${status}</th>
        <td><button class="delete-btn">Hapus</button></td>
    `;
    
    // Menambahkan baris ke dalam tabel
    table.appendChild(newRow);

    // Reset form input
    document.getElementById('add-report-form').reset();
});

// Fungsi untuk menghapus data dari tabel
document.querySelector('.academic-report').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        row.remove(); // Menghapus baris yang dipilih
    }
});
