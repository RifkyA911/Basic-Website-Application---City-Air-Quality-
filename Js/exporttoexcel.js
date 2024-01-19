$(function() {
  $('button').click(function() {
    var url = 'data:application/vnd.ms-excel,' + encodeURIComponent($('#index').html())
    location.href = url
    return false
  })
});