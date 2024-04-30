// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"; // this import first
import "script"; // then your other imports that use `$`

$(document).on('turbolinks:load', function() {
  // $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    console.log('test')
    $(this).closest('.message').transition('fade');
  });
})
