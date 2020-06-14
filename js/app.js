//==========================
//======= Alert banner =====
//==========================

const banner = document.getElementById("alert");

banner.innerHTML = `
<p><strong>Alert:</strong> You have got <strong>over 9000</strong> new notifications</p>
<p class="close-banner">x</p>
`;

banner.addEventListener("click", (e) => {
  const close = e.target;
  if (close.classList.contains("close-banner")) {
    setTimeout(() => {
      banner.style.display = "none";
    }, 300);
    banner.style.transform = "scale(0) ";
  }
});

//==========================
//====== Traffic Chart =====
//==========================

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(18,119, 129, .4)",
      borderWidth: 1,
    },
  ],
};

let trafficOptions = {
  aspectRatio: 2.5,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficOptions,
});

//==========================
//====== Daily Chart =======
//==========================

const dailyCanvas = document.getElementById("daily-chart");

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: "rgba(18,119, 129, .4)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
// let dailyChart = new Chart(dailyCanvas, {
//   type: "bar",
//   data: {
//     labels: [
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ],
//     dataSets: [
//       {
//         data: [75, 115, 175, 125, 225, 200, 100],
//         backgroundColor: "rgba(18,119, 129, .4)",
//         borderWidth: 1,
//       },
//     ],
//   },
// });
