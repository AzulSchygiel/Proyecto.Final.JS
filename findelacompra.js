const botonComprar = document.querySelector("button#procesar-pedido.btn.btn-danger.btn-block");

botonComprar.addEventListener("click",() => {
    const sweetAlert = swal.fire({

    title: 'REALIZAR COMPRA',
    html: '<label class="formulario" for="cliente">Cliente :</label><input type="text" id="cliente" placeholder="Ingresa tu nombre/s y apellido/s" name="destinatario"><label class="formulario" for="email">Correo :</label><input type="text" id="correo" placeholder="Ingresa tu correo electrónico" name="cc_to"><label class="formulario" for="number">Celular :</label><input type="number" id="numerotel" placeholder="Ingresa tu número de teléfono">',
    confirmButtonText: 'comprar',
    confirmButtonAriaLabel: 'comprar',
    showConfirmButton: true,
    confirmButtonColor: '#32cd32',
    width: '80%',
    padding: '11rem',
    showCancelButton: true,
    cancelButtonColor: '#ff6347',
    cancelButtonText: 'cancelar',
    cancelButtonAriaLabel: 'cancelar',
    backdrop: true,
    position: 'bottom',

}).then ((results) => {
if (results.isConfirmed){
    swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La compra se realizó exitosamente',
        showConfirmButton: false,
        timer: 3000
    })
}})

})