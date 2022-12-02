$(document).ready(function()
	{
        $("#btnSubmit").click(function () {
           
        let primerNombre=  ($('#primerNombre').val());
        let  segundoNombre = ($("#segundoNombre").val());
        let mail = ($("#mail").val());
        let  celular = ($("#celular").val());
        let  calendario = ($("#calendario").val());
        let  mensaje = ($("#mensaje").val());
        let genero = ($('input:radio[name=genero]:checked').val());
        
            alert(`${primerNombre  + " " + segundoNombre + " " + mail  + " " + celular  + " " + calendario+ " " + genero+ " " +  mensaje }`)
       
	});
});