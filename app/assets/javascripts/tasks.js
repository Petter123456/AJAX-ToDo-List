// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function(){
  $('#task_name').focus(); // focuses the keyboardon the search field

  $('.modal-footer .btn-primary').click(function(){ 
        $('.modal-body form').submit(); //targets the html with that class and submits it to database.
  });
});
