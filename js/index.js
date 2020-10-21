$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
  $('.carousel').carousel({   //para cambiar la velocidad del desplazamiento de las fotos en el carousel
    interval: 2000
  });
  // usamos JQuery para modificar eventos de los componentes en Bootstrap
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
