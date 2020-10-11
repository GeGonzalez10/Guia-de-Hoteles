$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  $('.carousel').carousel({
    interval: 2000
  });
  $('#contacto').on('show.bs.modal', function (e){
    console.log('el modal se está mostrando');

    $('#contactoBtn').removeClass('btn-outline-success');
    $('#contactoBtn').addClass("btm-primary");
    $('#contactoBtn').prop("disabled", true);
  });
  $('#contacto').on('show.bs.modal', function (e){
    console.log("el modal se mostró");
  });
  $('#contacto').on('hide.bs.modal' , function (e){
    console.log("el modal contacto se oculta");
  });
  $('#contacto').on('show.bs.modal', function (e){
    console.log("el modal contacto se ocultó");
    $('#contactoBtn').prop("disabled", false);
  });

});
