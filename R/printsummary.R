#' Print Summary
#' 
#' Wrapper for summary
#' 
#' @export
#' @param mydata some object or dataset
printsummary <- function(mydata){
  #override default 
  options(max.print=99999999);
  options(width=120);
  
  #print
  print(summary(mydata))
  invisible()
}