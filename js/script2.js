var vimg;
var html = '<div class="col-md-12">';
html += '<div class="card">';
html += '<div class="row">';
html += '<div class="col-md-4 userimg"> </div>';
html += '<div class="col-md-8 px-3">';
html += '<div class="card-block px-3">';
html += '<h4 class="card-title">sometitle</h4>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '</div>';



$(document).ready(function(){   
    $.ajax({ 
    type: 'POST', 
    url: 'https://nodeserver-292320.nw.r.appspot.com/users', 
    'data':JSON.stringify({"age":18,
    "luggage":"",
    "financeLoss":"",
    "group":false,
    "travelDays":300,
    "moreTravel":false
    }),
    dataType: 'json',
    processData: false,
    contentType: 'application/json',

    success: function (data) {    /* Here data length is 5*/

        for (var i = 0; i < data.length; i++) {
            $('#printcard').append(html);
          
            uimg = data[i].image_link;
            

            
            var $img = $("<img/>");
            $img.width('200px');
            $img.height('220px');
            $img.attr("src", "" + uimg);
            $(".userimg:eq("+i+")").append($img);
          }  

    },
    error: function(errMsg) {
        console.log(errMsg)
     }
});
});