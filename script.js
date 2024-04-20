function clearSearch() {
    const checkbox = document.getElementById("checkBox");
    if (checkbox.checked) {
       document.getElementById("name").value = '';
        document.getElementById("contacts").value = '';
        document.getElementById("height").value = '';
        document.getElementById("weight").value = ''; 
    }
}