const modelViewerColor = document.querySelector("model-viewer#modelo");
const colorInput = document.getElementById('color-control');

colorInput.addEventListener('input', () => {
    const colorString = colorInput.value;
    const [material] = modelViewerColor.model.materials;
    material.pbrMetallicRoughness.setBaseColorFactor(hexToRgb(colorString));
});

// Función para convertir el formato hexadecimal a RGB
function hexToRgb(hex) {
    // Extraer los componentes RGB del formato hexadecimal
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Devolver el color en formato [r, g, b]
    return [r / 255, g / 255, b / 255, 1];
}