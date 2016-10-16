$(document).ready(function() {

  $('select').on('change', function() {
    var city= $('input').val();
    user.city = city;
    var state= $(this)[0].value;
    user.state = state;
  });

  $('button').on('click', function() {
    sunrise();
  });

  var user = {
    apiKey: 'c3a8e8342446539e',
    state: null,
    city: null
  };

  function sunrise() {
    $.ajax({
      url: "http://api.wunderground.com/api/"+user.apiKey+"/astronomy/q/"+user.state+"/"+user.city+".json",
      dataType: "jsonp",
      success: function(data) {
        var source = $('#template').html();
        var template = Handlebars.compile(source);
        var context = {
      state: user.state,
      city: user.city,
      sunrise: data.sun_phase.sunrise.hour + ":" + data.sun_phase.sunrise.minute ,
      sunset: data.sun_phase.sunset.hour + ":" + data.sun_phase.sunset.minute
      };
      var html = template(context);
      $('.content-container').prepend(html).fadeIn('slow');
      console.log(data.sun_phase.sunrise);
      console.log(data.sun_phase.sunset);
      console.log(data);
      }
    });
  }
});
