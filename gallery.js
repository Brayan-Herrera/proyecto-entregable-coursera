function changeImage(previewPic) {

    let displayArea = document.getElementById("image-container");
    displayArea.style.backgroundImage = "url('" + previewPic.src + "')";
    displayArea.textContent = previewPic.alt;  // Cambia el texto del contenedor
}

function resetImage() {
    
    let displayArea = document.getElementById("image-container");
    displayArea.style.backgroundImage = "url('')";
    displayArea.textContent = "Pasa el cursor sobre una imagen para verla aquí.";
}
