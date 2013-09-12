#' Read CSV file
#' 
#' Simple wrapper for read.csv
#' 
#' @export
#' @param file a csv file.
#' @param ... arguments passed to read.csv
readcsvnew <- function(file, ...){
  if(!grepl(".csv$", file)){
    stop("Uploaded file must be a .csv file!")
  }
  read.csv(file, ...);
}
