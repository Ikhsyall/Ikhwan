// Inisialisasi Feather Icons
feather.replace();

// Membuka Modal
document.getElementById("addUserButton").addEventListener("click", function () {
    openModal("Tambah Pengguna");
});

function openModal(title) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("userForm").reset();
    document.getElementById("userModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("userModal").style.display = "none";
}

// Tambah/Edit Data Pengguna
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const Password = document.getElementById("Password").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${role}</td>
        <td>${email}</td>
        <td>${username}</td>
        <td>${Password}</td>
        <td>
            <button class="edit-btn" onclick="editUser(this)">Edit</button>
            <button class="delete-btn" onclick="deleteUser(this)">Hapus</button>
        </td>
    `;
    document.getElementById("userTable").appendChild(newRow);
    closeModal();
});

// Fungsi Edit Data
function editUser(button) {
    const row = button.parentElement.parentElement;
    const name = row.children[0].innerText;
    const role = row.children[1].innerText;
    const email = row.children[2].innerText;
    const username = row.children[3].innerText;
    const Password = row.children[4].innerText;

    document.getElementById("name").value = name;
    document.getElementById("role").value = role;
    document.getElementById("email").value = email;
    document.getElementById("username").value = username;
    document.getElementById("Password").value = Password;

    openModal("Edit Pengguna");
    row.remove();
}

// Fungsi Hapus Data
function deleteUser(button) {
    if (confirm("Yakin ingin menghapus pengguna ini?")) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
}
