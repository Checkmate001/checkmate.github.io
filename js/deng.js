/**
 * File deng.js.
 *
 * Deng custom jquery file. 
 *
 * Contains logo spin and other custom js interaction
 **/

$(document).ready(function() 
{	
	
    function set_element(i) 
    {
        var distance_check = true;
        var x = Math.floor(Math.random() * 94) + 1;
        //var y = Math.floor(Math.random() * 52) + 19;
        //var x = Math.floor(Math.random() * 51) + 50;
        var y = Math.floor(Math.random() * 52) + 50;
        var speed = Math.random() * 6;
        if (i != 1) 
        {
            for (z = 0; z <= i; z++) 
            {
                var distance = Math.sqrt(((x_list[z] - x) ^ 2) + ((y_list[z] - y) ^ 2));
                if (distance < 2) 
                {
                    set_element(i);
                    distance_check = false;
                }
            }
        }
        if (distance_check) 
        {
            x_list.push(x);
            y_list.push(y);
        }

        $('.el-' + i).css('left', x + '%');
        $('.el-' + i).css('bottom', y + '%');
        
        $('.el-' + i).attr('left', x + '%');
        $('.el-' + i).attr('bottom', y + '%');
        $('.el-' + i).attr('speed', speed);
    }

    var x_list = new Array();
    var y_list = new Array();
    for (i = 0; i <= 8; i++) 
    {
        $('#page-header').append('<div class="logo_elements el-' + i + '"></div>');
        set_element(i);
    }	   

    $(document).mousemove(function(evt) 
    {
        $('.logo_elements').each(function() 
        {
            var calc_x = evt.clientX / 25 * $(this).attr("speed");
            var calc_y = evt.clientY / 25 * $(this).attr("speed");
            $(this).css('left', 'calc(' + $(this).attr("left") + ' - ' + calc_x + 'px)');
            $(this).css('bottom', 'calc(' + $(this).attr("bottom") + ' + ' + calc_y + 'px)');
        });
    });


    /*$(window).scroll(function(event) {
        $('.spinner_logo').css('transform', 'rotate(' + $(this).scrollTop() + 'deg)');
    });*/
    
});