document.oncontextmenu = function() {
        return false
        }
function right(e) {
        var msg = "No puedes usar click Derecho !!! ";
        if (navigator.appName == 'Netscape' && e.which == 3) {
                alert(msg) ;
                return flase;
                }
        return true;
        }
document.onmousedown = right;
