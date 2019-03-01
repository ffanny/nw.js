var image = document.getElementById('image');
var canvas = document.getElementById('canvas');

var ctx = canvas.getContext("2d");
var scale = 1;

image.onload = function() {
  ctx.drawImage(image, 
              0, 0, image.width, image.height,
              0, 0, canvas.width, canvas.height);

  scale = canvas.width / image.width;
};


function detect() {
  if (window.FaceDetector == undefined) {
    console.error('Face Detection not supported');
    return;
  }
  
  var faceDetector = new FaceDetector();
  faceDetector.detect(image)
    .then(faces => {
      // Draw the faces on the <canvas>.
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red";
      for(var i = 0; i < faces.length; i++) {
        ctx.rect(Math.floor(faces[i].x * scale), 
                 Math.floor(faces[i].y * scale),
                 Math.floor(faces[i].width * scale), 
                 Math.floor(faces[i].height * scale));
        ctx.stroke();
      }

      // Add the faces as strings to the <footer>
      var footer = document.getElementsByTagName('footer')[0];
      footer.innerHTML = 
          '<p>Detected ' + faces.length + ' faces</p><ul>';
      for(var i = 0; i < faces.length; i++) {
        footer.innerHTML += 
            '<li>@ (' + faces[i].x + ',' + faces[i].y + '), size ' + 
            faces[i].width + 'x' + faces[i].height + '</li>';
      }
      footer.innerHTML += '</ul>';
  
    })
    .catch((e) => {
      console.error("Boo, Face Detection failed: " + e);
    });
}
