OpenCPU APP: appdemo
====================
  
The purpose of this OpenCPU app is to demonstrate how to use the [opencpu.js](http://github.com/jeroenooms/opencpu.js) library for calling R functions from Javascript using OpenCPU.  

Cloud Demo
----------

Try the application online at the OpenCPU apps public demo server: https://public.opencpu.org/apps.html

Use locally
-----------

To run the app in your local R session:

    #install app
    library(devtools)
    install_github("appdemo", "opencpu")
    
    #load in opencpu
    library(opencpu)
    opencpu$browse("/library/appdemo/www")

