$(document).on('turbolinks:load', function() {
  // $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    console.log('test')
    $(this).closest('.message').transition('fade');
  });
})

// $('.ui.dropdown').dropdown();
// $('.message .close').on('click', function() {
//   $(this).closest('.message').transition('fade');
// });
