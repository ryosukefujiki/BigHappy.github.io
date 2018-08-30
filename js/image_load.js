var images = document.getElementsByTagName('img');

for (var i = 0; i < images.length; i++) {
  var img = new Image();
  img.onload = function() {
    console.log('画像読み込み完了');
  }
img.src = images[i].src;
};
