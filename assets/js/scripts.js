const showModal = () => {
  let modal = document.getElementById("myModal");
  let myModal = new bootstrap.Modal(modal);
  myModal.show();
};

const theModal = () => {
  openModal();
  // putOnModal()
  showModal();
};

function openModal() {
  let modal = `
    <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            MMMMM QUE RICO!!!!
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body"><p> Algo delicioso para comer!!!</p></div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>

    `;

  $("#modal").html(modal);
}

//   const putOnModal =()=>{
//       let putOn = `$('#myModal').on('show.bd.modal',
//       function(event){
//        var a = $(event.relatedTarget)
//        var p = $(event.relatedTarget)
//        var titulo = a.data('whatever')
//        var info = p.data('whatever')
//        var modals = $(this)

//        modals.find('.modal-title').text(titulo)
//        modals.find('.modal-body p')
//            .text('Sed ut perspiciatis unde omnis iste natus error sit .'+info)`

//            $('#modal').html(putOn)
//   }
