//global javascript here
$('#fishModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var fish = button.data('fish');
  var color = button.data('color');
  var modal = $(this);
  modal.find('#fish-modal-title').removeClass();
  modal.find('#fish-modal-title').addClass('modal-title');
  modal.find('#fish-modal-title').addClass('text-' + color);
  modal.find('#fish-modal-title').text(fish);
})