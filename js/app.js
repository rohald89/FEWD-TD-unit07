//==========================
//=== Bell Notifications ===
//==========================

const bell = document.getElementById("bell");
const notifications = document.getElementById("notifications");
const closeNotification = document.getElementsByClassName("close");

// Show / Hide notifications on bell click
bell.addEventListener("click", () => {
  if (notifications.style.display === "none") {
    notifications.style.display = "block";
  } else {
    notifications.style.display = "none";
  }
});

// close notification when the X is clicked
for (let i = 0; i < closeNotification.length; i++) {
  closeNotification[i].addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      e.target.parentNode.remove();
    }
  });
}

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
//======= Message widget =======
//==============================

const messageForm = document.getElementById("message");
const userSearch = document.getElementById("user-search");
const messageForUser = document.getElementById("message-for-user");
const messageButton = document.getElementById("send-message");

const submitted = document.createElement("P");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  messageForm.onsubmit = () => {
    if (userSearch.value === "" || messageForUser.value === "") {
      submitted.textContent =
        "One or more fields are empty, make sure to fill in everything!";
      messageForm.insertBefore(submitted, messageButton);
    } else {
      submitted.textContent = `Your message has been send to ${userSearch.value}!`;
      messageForm.insertBefore(submitted, messageButton);
      messageForm.reset();
    }
  };
});

//==============================
//== TODO - Meet Expectations ==
//==============================

// NOTIFICATION IN HEADER
// Include an alert icon in the header with a marker to notify the user of new alerts and messages

//==============================
//= TODO - Exceed Expectations =
//==============================

// TRAFFIC CHART WIDGET:
//  - Includes navigation allowing to switch between hourly, daily, weekly and monthlly chart
//  - Hourly, daily, weekly and monthly buttons display a different line chart on click.

// MESSAGE USER WIDGET
// Displays working autocomplete search input field that lets the user search for members

// SETTINGS WIDGET
// Local storage is used to save the setting. When page is reloaded the settings are remembered
