window.onload = function() { this.Fire(); }

var disney = document.getElementById('disney');
var deezer = document.getElementById('deezer');
var crunchy = document.getElementById('crunchy');
var duo = document.getElementById('duo');

function kocak(posts_div, snapshot) {
  var data = snapshot.val();
  var dataArr = Object.values(data);
  var randomIndex = Math.floor(Math.random() * dataArr.length);
  var randomData = dataArr[randomIndex];
  posts_div.innerHTML = "<div class='eka'>" +
    "<div class='crd'>" +
    "<div class='card-body'><p class='txtagung'>Username : <span style='color: red;'>" + randomData.user+ "</span></p><p class='txtagung'>Password : <span style='color: red;'>" + randomData.pw + "</span></p>" +
    "</div></div></div>" ;
}

if (disney) {
  function Fire() {
    firebase.database().ref('Disney').once('value').then(function(snapshot) {
      var posts_div = disney;
      kocak(posts_div, snapshot);
    });
  }
}

if (duo) {
  function Fire() {
    firebase.database().ref('Duolingo').once('value').then(function(snapshot) {
      var posts_div = duo;
      kocak(posts_div, snapshot);
    });
  }
}
      
if (deezer) {
  function Fire() {
    firebase.database().ref('Deezer').once('value').then(function(snapshot) {
      var posts_div = deezer;
      kocak(posts_div, snapshot);
    });
  }
}
 
if (crunchy) {
  function Fire() {
    firebase.database().ref('Chuncyroll').once('value').then(function(snapshot) {
      var posts_div = crunchy;
      kocak(posts_div, snapshot);
    });
  }}
