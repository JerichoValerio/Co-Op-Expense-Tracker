
// const response = await fetch(`${baseUrl}/posts`);
// const finalOutput = await response.json();




let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [55, 49, 44, 24, 15];
let barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});