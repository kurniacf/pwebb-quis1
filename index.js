function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["unit"].value;
    let z = document.forms["myForm"]["nomor"].value;
    if (x == "" || y == "" || z == "") {
        alert("Harus diisi semua");
        return false;
    }
}