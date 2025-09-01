// Sliders
const rojoSlider = document.getElementById('rojo-slider');
const verdeSlider = document.getElementById('verde-slider');
const azulSlider = document.getElementById('azul-slider');

// Inputs numéricos
const rojoInput = document.getElementById('rojo-input');
const verdeInput = document.getElementById('verde-input');
const azulInput = document.getElementById('azul-input');

// Color picker
const colorPicker = document.getElementById('color-picker');

// Otros elementos
const colorPreview = document.getElementById('color-preview');
const hexCode = document.getElementById('hex-code');

// 🔄 Actualiza todo desde valores RGB
function actualizarColorDesdeValores(r, g, b) {
  r = Math.min(255, Math.max(0, parseInt(r)));
  g = Math.min(255, Math.max(0, parseInt(g)));
  b = Math.min(255, Math.max(0, parseInt(b)));

  // Actualizar sliders e inputs
  rojoSlider.value = r;
  verdeSlider.value = g;
  azulSlider.value = b;

  rojoInput.value = r;
  verdeInput.value = g;
  azulInput.value = b;

  // HEX
  const hex = "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

  // Actualizar color picker
  colorPicker.value = hex;

  // Actualizar preview y texto
  colorPreview.style.backgroundColor = hex;
  hexCode.textContent = hex.toUpperCase();
}

// 🔁 Convierte HEX a RGB
function hexA_RGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Eventos sliders
rojoSlider.addEventListener('input', () => actualizarColorDesdeValores(rojoSlider.value, verdeSlider.value, azulSlider.value));
verdeSlider.addEventListener('input', () => actualizarColorDesdeValores(rojoSlider.value, verdeSlider.value, azulSlider.value));
azulSlider.addEventListener('input', () => actualizarColorDesdeValores(rojoSlider.value, verdeSlider.value, azulSlider.value));

// Eventos inputs numéricos
rojoInput.addEventListener('input', () => actualizarColorDesdeValores(rojoInput.value, verdeInput.value, azulInput.value));
verdeInput.addEventListener('input', () => actualizarColorDesdeValores(rojoInput.value, verdeInput.value, azulInput.value));
azulInput.addEventListener('input', () => actualizarColorDesdeValores(rojoInput.value, verdeInput.value, azulInput.value));

// Evento color picker
colorPicker.addEventListener('input', () => {
  const { r, g, b } = hexA_RGB(colorPicker.value);
  actualizarColorDesdeValores(r, g, b);
});

// Inicializar con negro
actualizarColorDesdeValores(0, 0, 0);
