//JSON FILE

var jsonFile = (function () {
  var json = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'data.json',
      'dataType': "json",
      'success': function (data) {
          json = data;
      }
  });
  return json;
})(); 


// Reading the JSON file and appending it to the dashboard

const dashboard = document.querySelector(".dashboard");

jsonFile.forEach(item => {

  $(".dashboard").append(
    
      `<div class="dashboard_activity ${item.title.toLowerCase().replace(" ", "-")}">

        <div class="dashboard_content">
          <div class="dashboard_details">
            <h3 class="dashboard_details_title">${item.title}</h3>
            <img src="./images/icon-ellipsis.svg" alt="More options">
          </div>

          <div class="dashboard_time_day">
            <h3 class="dashboard_time_current">${item.timeframes.daily.current}hrs</h3>

            <span class="dashboard_time_previous">
              Last Day - ${item.timeframes.daily.previous}hrs
            </span>
          </div>

          <div class="dashboard_time_week">
            <h3 class="dashboard_time_current">${item.timeframes.weekly.current}hrs</h3>

            <span class="dashboard_time_previous">
              Last Week - ${item.timeframes.weekly.previous}hrs
            </span>
          </div>

          <div class="dashboard_time_month">
            <h3 class="dashboard_time_current">${item.timeframes.monthly.current}hrs</h3>

            <span class="dashboard_time_previous">
              Last Month - ${item.timeframes.monthly.previous}hrs
            </span>
          </div>

        </div>
      </div>`
  )
})

// Daily, weekly and monthly stats

// buttons
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
//dashboard timeframes
const dashboardDaily = document.querySelectorAll(".dashboard_time_day");
const dashboardWeekly = document.querySelectorAll(".dashboard_time_week");
const dashboardMonthly = document.querySelectorAll(".dashboard_time_month");

daily.addEventListener("click", function(){
  dashboardDaily.forEach(item=>item.style.display = 'block');
  dashboardWeekly.forEach(item=>item.style.display = 'none');
  dashboardMonthly.forEach(item=>item.style.display = 'none');
})

weekly.addEventListener("click", function(){
  dashboardDaily.forEach(item=>item.style.display = 'none');
  dashboardWeekly.forEach(item=>item.style.display = 'block');
  dashboardMonthly.forEach(item=>item.style.display = 'none');
})

monthly.addEventListener("click", function(){
  dashboardDaily.forEach(item=>item.style.display = 'none');
  dashboardWeekly.forEach(item=>item.style.display = 'none');
  dashboardMonthly.forEach(item=>item.style.display = 'block');
})

/////////////////////////////////////

