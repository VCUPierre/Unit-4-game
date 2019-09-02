//var ashChar = "<div class='center character' id='Ash' value='0'><p>Ash</p><img src='assets/imgs/ash2.png' alt='Ash'><p>120</p></div>";
//var mistyChar = "<div class='center character' id='Misty' value='1'><p>Misty</p><img src='assets/imgs/Misty.png' alt='Ash'><p>100</p></div>";
//var brockChar = "<div class='center character' id='Brock' value='2'><p>Brock</p><img src='assets/imgs/brock.jpg' alt='Ash'><p>150</p></div>";
//var garyChar = "<div class='center character' id='Gary' value='3'><p>Gary</p><img src='assets/imgs/Gary_Oak.png' alt='Ash'><p>180</p></div>";
var ashChar = new Character("Ash",120,14,8,0,"assets/imgs/ash2.png");
var mistyChar = new Character("Misty",150,12,10,1,"assets/imgs/Misty.png");
var brockChar = new Character("Brock",100,10,12,2,"assets/imgs/brock.jpg");
var garyChar = new Character("Gary",180,8,14,3,"assets/imgs/Gary_Oak.png");

var charArray = [ashChar,mistyChar,brockChar,garyChar];

for (let i = 0; i < charArray.length; i++){
    //let characterVal = 
    $("#mainCharacterRowID").append(charArray[i].createElement());
}

$(".character").on("click", function(){
    //alert("Hello World");
    //alert($(this).attr('value'));
    $("#mainCharacterRowID").empty();
    for (var i = 0; i < 4; i++){
        if ($(this).attr('value') == i){
            //$(this).appendTo("#mainCharacterRowID");
            $("#mainCharacterRowID").append(charArray[i].createElement());
            console.log("main character - " + JSON.stringify(charArray[i]));
        } else {
            //$('div[value]').appendTo("#enemiesCharacterRowID");
            $("#enemiesCharacterRowID").append(charArray[i].createElement());
            $('#'+charArray[i].name).addClass('characterEnemy');
            $('#'+charArray[i].name).removeClass('center');
            console.log("other character - " + JSON.stringify(charArray[i]));
        }
    }
});

$("body").on("click","div.characterEnemy", function(){
    /*$("#enemiesCharacterRowID").empty();
    for (var i = 0; i < 4; i++){
        if ($(this).attr('value') == i){
            //$(this).appendTo("#mainCharacterRowID");
            $("#defenderCharacterRowID").append(charArray[i].createElement());
            $('#'+charArray[i].name).addClass('characterDefender');
            $('#'+charArray[i].name).removeClass('center');
            console.log("defender character - " + JSON.stringify(charArray[i]));
        } else {
            if ($('#mainCharacterRowID > div.character').val() == i){
                alert("made it"+ i);
            } else {
            //$('div[value]').appendTo("#enemiesCharacterRowID");
            $("#enemiesCharacterRowID").append(charArray[i].createElement());
            $('#'+charArray[i].name).addClass('characterEnemy');
            $('#'+charArray[i].name).removeClass('center');
            console.log("2nd other character - " + JSON.stringify(charArray[i]));
            }
        }
    }*/
    var defender = this;
    var defenderId = $(this).attr('id');
    console.log(defender);
    //defender.addClass("d-none");
    $(this.target).remove();
    $('#defenderCharacterRowID').append(defender);
    $('#'+defenderId).removeClass('characterEnemy');
    $('#'+defenderId).addClass('characterDefender');
});


function Character(name,hP,aP,cAP,valueAtt,imgSrc) {
    this.name = name;
    this.hP = hP;
    this.aP = aP;
    this.cAP = cAP;
    this.valueAtt = valueAtt;
    this.imgSrc = imgSrc;
    this.createElement = function(){
        return '<div class="center character" id='+this.name+' value='+this.valueAtt+'><p>'+this.name+'</p><img src='+this.imgSrc+' alt='+this.name+'><p>'+this.hP+'</p></div>';
    }
}
