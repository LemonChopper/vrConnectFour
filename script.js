
$(document).ready(function(){

  // ALL THE CODE TO MAKE THE GRID:

  var dimensions = [7, 6] //width, height
  var boardPos = [0, 2, -7]
  var pop = 0.3
  for(var i=1; i <= dimensions[0]; i++){
    $('a-scene').append("<a-box color='black' position='" + (i-4) + " " + boardPos[1] + " " + (boardPos[2]+pop) + "' scale = '0.5 " + dimensions[1] + " 1'></a-box>")
    if(i <= dimensions[0]-1){$('a-scene').append("<a-box color='red' position='" + (i-3.5) + " " + (boardPos[1]+0.5) + " " + (boardPos[2]+ 1) + "' scale='0.5 0.5 0.5'></a-box>")}
    for(var j=1; j<= dimensions[1]; j++){
      $('a-scene').append("<a-box color='black' position='" + boardPos[0] + " " + (j-1) + " " + (boardPos[2]+pop) + "' scale = '" + dimensions[0] + " 0.5 " + "1'></a-box>")
      $('a-scene').append("<a-box color='red' position='" + (boardPos[0] - 0.5) + " " + (j-1.5) + " " + (boardPos[2]+1) + "' scale='0.5 0.5 0.5'></a-box>")
    }

  }

})
