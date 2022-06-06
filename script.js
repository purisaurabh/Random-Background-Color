
const colors = ["Green" , "Red" , "Blue" , "Green" , "Orange" , "Pink" , "Violet" , "Yellow" , "Brown" , "Gray" , "Olive" , "Magenta" , "Mustard" , "Gold" , "Silver"];

var color = document.querySelector('.color');
var button =  document.querySelector('.change');

button.addEventListener('click' , function()
{
    var final_color = colors[random_color()];
    document.body.style.backgroundColor = final_color;
    color.textContent = final_color;
    function random_color()
    {
        return Math.floor(Math.random()*colors.length);
    }
});

