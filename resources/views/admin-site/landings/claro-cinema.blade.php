<!DOCTYPE html>
<html lang="en">
<head>    
<script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>

<script>
       new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema-backoffice.php",
            container: "navbar-prev-claro-cinema",
            onMessage: function(message, origin) {
                console.log(message);
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

            }
        });
</script> 
</head>

<body>
@include('partials.headers.header-apro')
<div class="centro">
<  <div class=" navbar-prev-claro-cinema mb-5" id="navbar-prev-claro-cinema">
    </div>
</div>
</body>
</html>