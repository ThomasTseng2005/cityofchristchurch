document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['list', 'dayGrid', 'googleCalendar'],
    locale: 'zh-tw',
    defaultView: 'dayGridMonth',
    header: {
      left:   'listMonth, dayGridMonth',
      center: 'title',
      right:  'today prev,next'
    },
    googleCalendarApiKey: 'AIzaSyCY8xsT3Sj_yxcv3ctx-Gum8gBe1kr1n6c',
    events: {
      googleCalendarId: 'church.cityofchrist@gmail.com',
      className: 'gcal-event',
      title: 'hello'
    }
  });

  calendar.render();
});
