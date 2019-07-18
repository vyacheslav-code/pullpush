$( window ).resize(function() {
    calcPositions();
});

$(document).on('input', '#slider', function() {
    calcPositions();
});

$(document).ready(function(){
    calcPositions();
})

function calcPositions(){
    const text1 = $('#text-1');
    const text2 = $('#text-2');
    const text3 = $('#text-3');
    const leftStripe = $("#left-stripe");
    const rightStripe = $("#right-stripe");

    console.log( $("#slider").val() );
    const perc = $("#slider").val()*0.01;
    leftStripe.width(perc*$("#stripes").width());
    rightStripe.width($("#stripes").width()-leftStripe.width() - 80);
    if(perc > 0.31 && perc < 0.6) {
        text1.css('z-index', '0');
        text2.css('z-index', '996');
        text3.css('z-index', '999');
        rightStripe.css('z-index', '998');
        leftStripe.css('z-index', '995');
    } else if(perc >= 0.6) {
        text2.css('z-index', '999');
        text3.css('z-index', '996');
        rightStripe.css('z-index', '994');
        leftStripe.css('z-index', '998');
    } else {
        text1.css('z-index', '');
        text2.css('z-index', '');
        text3.css('z-index', '');
        rightStripe.css('z-index', '');
        leftStripe.css('z-index', '');
    }

}


function updateKnot(page){

    let textLeft, textCenter, textRight, color1, color2;

    switch(page) {

        case 1:
            textLeft = "1.1";
            textCenter = "1.2";
            textRight = "1.3";
            color1 = "#C0D7E9";
            color2 = "#4EBA74";
            break;

        case 2:
            textLeft = "2.1";
            textCenter = "2.2";
            textRight = "2.3";
            color1 = "#1a6dc0";
            color2 = "#ffc29e";
            break;

        case 3:
            textLeft = 3.1;
            textCenter = 3.2;
            textRight = 3.3;
            color1 = "#ff7f5f";
            color2 = "#ddd3df";
            break;

        case 4:
            textLeft = 4.1;
            textCenter = 4.2;
            textRight = 4.3;
            color1 = "#be3098";
            color2 = "#e8ec7a";
            break;

        case 5:
            textLeft = 5.1;
            textCenter = 5.2;
            textRight = 5.3;
            color1 = "#00b677";
            color2 = "#b2d0e7";
            break;

    }

    $(".st0").css("fill",color1);
    $(".st2").css("fill",color2);
    $("#left-fill").css("background",color1);
    $("#right-fill").css("background",color2);
    $("#text-1").text(textLeft); 
    $("#text-2").text(textCenter); 
    $("#text-3").text(textRight); 

}


window.addEventListener( 'keypress', keyboard );

function keyboard( ev ) {

    switch ( ev.key || String.fromCharCode( ev.keyCode || ev.charCode ) ) {

     
        case '1':
            updateKnot(1);
            break;
        case '2':
            updateKnot(2);
            break;
        case '3':
            updateKnot(3);
            break;
        case '4':
            updateKnot(4);
            break;
        case '5':
            updateKnot(5);
            break;

    }

}