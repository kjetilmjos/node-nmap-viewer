function changedescription(ip) {
  var description = prompt("Enter new description for IP " + ip);
  if (description != null) {
    return $.ajax({
   url: "/changedesc",
   type: "POST",
   data: {
     "ip": ip,
     "description": description,
   },
   success: function() {
     location.reload();
   }
 });
  }
}
