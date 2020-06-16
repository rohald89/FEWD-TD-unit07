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
//==== Global Chart.js =====
//==========================

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = "#10375C";

//==========================
//====== Traffic Chart =====
//==========================

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = new Chart(trafficCanvas, {
  type: "line",
  data: {
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
        data: [250, 750, 500, 1150, 1000, 1250, 750, 1350, 900, 1200, 1500],
        backgroundColor: "rgba(18,118,128,.4)",
      },
    ],
  },
  options: {
    aspectRatio: 2.8,
    legend: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//==========================
//====== Daily Chart =======
//==========================

const dailyCanvas = document.getElementById("daily-chart");

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [100, 125, 80, 135, 180, 225, 119],
        backgroundColor: "rgba(18,118,129,.4)",
      },
    ],
  },
  options: {
    aspectRatio: 1.9,
    legend: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//==========================
//====== Mobile Chart ======
//==========================

const mobileCanvas = document.getElementById("mobile-chart");

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: {
    labels: ["Phone", "Tablet", "Desktop"],
    datasets: [
      {
        data: [45, 30, 15],
        backgroundColor: ["#F3C623", "#127681", "#E5E9F8"],
        borderWidth: 5,
        borderColor: "#F4F6FF",
        hoverBorderWidth: 1,
        hoverBorderColor: "#E5E9F8",
      },
    ],
  },
  options: {
    title: {
      fontSize: 24,
    },
    legend: {
      position: "right",
    },
    layout: {
      padding: {
        right: 50,
        top: 20,
        bottom: 20,
      },
    },
  },
});

//==============================
//== TODO - Meet Expectations ==
//==============================

// Include an alert icon in the header with a marker to notify the user of new alerts and messages

// Add a CSS transition or animation to the bell icon when the user hovers over instanceof

//==============================
//= TODO - Exceed Expectations =
//==============================

// Display at least 2 notifications alerts icon gets clicked (pop-up window or dropdown menu)

// Traffic chart widget:

//   Includes navigation allowing to switch between hourly, daily, weekly and monthlly chart

//   Hourly, daily, weekly and monthly buttons display a different line chart on click.
