$(document).ready(function(){
  
  function uploadcsv(file, header){
    //disable the button during upload
    $("#submitbutton").attr("disabled", "disabled");        
    
    //perform the request
    var req = opencpu.r_fun_call("readcsvnew", {
      file : file,
      header : header
    }, function(session){
      //on success call printsummary()
      printsummary(session);
    });
    
    //if R returns an error, alert the error message
    req.fail(function(){
      alert("Server error: " + req.responseText);
    });
    
    //after request complete, re-enable the button 
    req.always(function(){
      $("#submitbutton").removeAttr("disabled")
    });        
  }    
  
  
  function printsummary(mydata){
    //perform the request
    var req = opencpu.r_fun_call("printsummary", {
      mydata : mydata
    }, function(session){
      var url = session.getLoc() +  "console/text";
      downloadfile(url);
    }).fail(function(){
      alert("Server error: " + req.responseText);
    });        
  }
  
  //standard jQuery stuff
  function downloadfile(url){
    $.get(url, function(output){
      $("#output code").text(output)
    });
  }
  
  $("#submitbutton").on("click", function(){
    
    //arguments
    var myheader = $("#header").val() == "true";
    var myfile = $("#csvfile")[0].files[0];
    
    if(!myfile){
      alert("No file selected.");
      return;
    }
    
    uploadcsv(myfile, myheader);        
  });    

  //this is only needed when using CORS (i.e. web pages hosted outside opencpu)
  if(!location.pathname.match("^/ocpu/.*/appdemo/www")){
    opencpu.seturl("//public.opencpu.org/ocpu/library/appdemo/R");
  }  
});