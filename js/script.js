function Kevon() {
 var data = $("#Hello").val();
 $.ajax( {
 	url: "http://347e6913.ngrok.com/test",
 	method:"POST",
 	dataType:"json",
 	data: { message: data }
 })
 .done(function (data) {
 	alert(data.message);
  })
 // what to do when you get an error!
 .error(function (error) {
   alert(error.message);
});
}