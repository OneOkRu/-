document.getElementById("solar-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const region = document.getElementById("region").value;
  const area = parseFloat(document.getElementById("area").value);
  const resultDiv = document.getElementById("result");
  if (isNaN(area) || area <= 0) {
    resultDiv.innerHTML = "<p style='color:red;'>Введите корректную площадь панели.</p>";
    return;
  }
  const sunlightMap = {
    south: 250 * 4.5,
    central: 170 * 3.5,
    north: 100 * 2.5
  };
  const efficiency = 0.18;
  const annualKWh = area * sunlightMap[region] * efficiency;
  const tariff = 5.5;
  const savedMoney = annualKWh * tariff;
  resultDiv.innerHTML = `
    <h3>Результат расчёта:</h3>
    <p>Годовая генерация энергии: <strong>${annualKWh.toFixed(1)} кВт⋅ч</strong></p>
    <p>Экономия на электроэнергии: <strong>${savedMoney.toFixed(0)} руб./год</strong></p>
    <p>Это примерно ${Math.round(savedMoney / 550)} месяцев оплаты обычной квартиры.</p>
  `;
});

document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const answers = {
    q1: "south",
    q2: "clean",
    q3: "area"
  };
  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }
  const result = document.getElementById("quiz-result");
  result.innerHTML = `Вы набрали <strong>${score} из 3</strong> правильных ответов.`;
  if (score === 3) {
    result.innerHTML += " Отлично!";
  } else if (score === 2) {
    result.innerHTML += " Хороший результат!";
  } else {
    result.innerHTML += " Попробуй ещё раз!";
  }
});
