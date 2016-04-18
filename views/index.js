function changedescription(ip, text) {
  var description = prompt("Enter new description for IP " + ip, text);
  if (description != null) {
 $.ajax({
   url: "/changedesc",
   type: "POST",
   data: {
     "computerip": ip,
     "description": description,
   },
   success: function(data) {
     location.reload();
  }
 });
  }
}
