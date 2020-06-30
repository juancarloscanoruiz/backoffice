@extends('layaout.app')

@section('scripts')
    <script src="{{ asset('/js/lib/easyXDM.min.js')  }}"></script>
    <script>
        new easyXDM.Socket({
            remote: "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-canal-edi.php",
            container: "navbar-prev-canal-claro",
            onMessage: function(message, origin) {
                console.log(message);
                this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
                this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
                this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

            }
        });
    </script>
@endsection
@section('content')

@endsection
