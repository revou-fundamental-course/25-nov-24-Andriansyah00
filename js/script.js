document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.querySelector(".bg-cadet-blue.color-antiquewhite");
  const resultElement = document.getElementById("result-calculation");
  const infoResultElement = document.getElementById("info-result");
  const resetButton = document.querySelector(".bg-alice-blue");

  // Fungsi untuk menghitung BMI
  function calculateBMI() {
    const weight = parseFloat(document.getElementById("berat-badan-input").value);
    const heightCm = parseFloat(document.getElementById("tinggi-badan-input").value);

    if (!weight || !heightCm || heightCm <= 0 || weight <= 0) {
      alert("Masukkan berat badan dan tinggi badan yang valid.");
      return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(2);

    resultElement.textContent = bmi;

    if (bmi < 18.5) {
      infoResultElement.textContent = "Anda memiliki berat badan kurang.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      infoResultElement.textContent = "Anda memiliki berat badan normal.";
    } else if (bmi >= 25 && bmi < 29.9) {
      infoResultElement.textContent = "Anda memiliki berat badan berlebih.";
    } else {
      infoResultElement.textContent = "Anda mengalami obesitas.";
    }
  }

  // Fungsi untuk mereset form dan hasil
  function resetForm() {
    document.getElementById("berat-badan-input").value = "";
    document.getElementById("usia-input").value = "";
    document.getElementById("tinggi-badan-input").value = "";
    resultElement.textContent = "0";
    infoResultElement.textContent = "Anda Memiliki Berat Badan";
  }

  // Tambahkan event listener untuk tombol Hitung BMI
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman
    calculateBMI();
  });

  // Tambahkan event listener untuk tombol Reset
  resetButton.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah reload halaman
    resetForm();
  });
});
