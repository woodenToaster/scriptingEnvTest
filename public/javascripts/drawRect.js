var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.fillStyle = '#FF0000';
ctx.fillRect(20, 20, 150, 100);
ctx.stroke();
$('#myCanvas').bind('click', function() {
  var script = prompt("enter your script\n");
  function update(data) {
    
    ctx.fillStyle = '#' + data;
    ctx.fillRect(20, 20, 150, 100);
    ctx.stroke();
  };
  $.ajax('/createScript/' + script, {
    success: update,
    type: 'POST'
  });
});