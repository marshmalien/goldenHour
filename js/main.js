// key: c3a8e8342446539e
$(document).ready(function() {

  $.ajax({
   url : "http://api.wunderground.com/api/c3a8e8342446539e/astronomy/q/NC/Durham.json",
   dataType : "jsonp",
   success : function(data) {
    console.log(data.sun_phase.sunrise);
    console.log(data.sun_phase.sunset);
    console.log(data);
    console.log("It's the weather man");
   }
 });
});
