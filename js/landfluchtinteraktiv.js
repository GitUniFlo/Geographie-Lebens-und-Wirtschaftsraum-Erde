// Principe and Code snippets(https://codepen.io/IPSI/full/cgDbu)  by Institute for Public School Initiatives (https://codepen.io/IPSI)

var objArray = ['#object1', '#object2', '#object3', '#object4', '#object5'];
var targArray = ['#target1', '#target2', '#target3', '#target4', '#target5'];
var startDrag = new String;
var resetter = 0;
//var draggable = ui.draggable;

//for the suggested order
j('#complete').hide();
//j('#main').hide();

//START ONDOC LOAD
var j = jQuery.noConflict();
j(document).ready(function()
{
//draggin
    j('#object1, #object2, #object3, #object4, #object5').draggable
    ({
        start: function(event,ui) { startDrag = ui.position; },
        containment: '#main',
        cursor: 'move',
        revert: function(valid)
        {
            if(!valid)
            {
                j('#feedback').html('<span class="redtext">Nicht ganz versuche es nochmal :) </span>');
                return true;
            }
        },
        stack: 'div',//bring it to the top by adjusting z-index of the element
        drag: clearer,
        stop: function(event,ui)
        {

        }
    });

//droppables
//         <div class="p1">Push- Eine Familie wurde auf Grund ihrer Religion diskriminiert und verfolgt.</div>
//         <div class="p2">Pull- Ein Krieg bricht aus. Viele Leute fürcheten um ihr Leben.</div>
//         <div class="p3">Push-Ein krankes Kind benötigt lebensrettende medizinische Maßnahmen, die nur in großen Städten zur Verfügung stehen.</div>
//         <div class="p4">Push-Ein starkes Erdbeben zerstörte viele Häuser und viele Familien verlieren ihr Zuhause.</div>
//         <div class="p5">Pull- Ein Land erfährt eine lange Friedensperiode.</div>

    j('#target1').droppable
    ({
        drop: right,
        accept: '#object4',
        //tolerance: intersect
    });
    j('#target2').droppable
    ({
        drop: right,
        accept: '#object5'
    });
    j('#target3').droppable
    ({
        drop: right,
        accept: '#object1'
    });
    j('#target4').droppable
    ({
        drop: right,
        accept: '#object3'
    });
    j('#target5').droppable
    ({
        drop: right,
        accept: '#object2'
    });

});


function clearer(event, ui) { j('#feedback').html(''); }

//if the dropTarget is correct
function right(event, ui)
{
    j('#feedback').html('<span class="greentext">Richtig, super gemacht!</span>');
    var draggable = ui.draggable;
    draggable.draggable().removeClass('objectFilter');
    draggable.draggable().addClass('objectLanded');
    draggable.draggable('disable');
    draggable.draggable('option', 'revert', false);//turn revert off
    draggable.offset(j(this).offset());//lock it on top of the targets x and y
    draggable.css('background-color','#416127');

    resetter++;
    if (resetter == 5)
    {
        j('#feedback').html('<span class="greentext">Super alles richtig zugewiesen! <a href="../htlmfiles/3_2_Landflucht%20-%20Interaktiv.html">Neustart!</a></span>');
    }
    else
    {
        //do nothing
    }
};

function completeIt()
{
    j('#main').hide();
    j('#complete').show();
}



//on reset button click
function resetIt() {
    resetter = 0;
    j('#complete').hide();
    j('#main').show();
    j('#feedback').html('');
    for (x = 0; x < objArray.length; x++)
    {
        //j('#object3').css({top : '0px', position : 'relative'});call multiples
        j(objArray[x]).css('left', '0');
        j(objArray[x]).css('top', '0');
        j(objArray[x]).css('background-color', '#000000');
        j(objArray[x]).removeClass('objectLanded');
        j(objArray[x]).addClass('objectFilter');
        j(objArray[x]).draggable('enable');//re-enable the draggable state
        j(objArray[x]).draggable({revert: function(valid) //gotta recall the revert function
            {
                if(!valid)
                {
                    //this.remove();
                    j('#feedback').html('<span class="redtext">Nicht ganz versuche es nochmal :)</span>');
                    return true;
                }
            }
        });
    };
};
