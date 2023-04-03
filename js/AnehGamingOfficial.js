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

if (fubo) {
  function Fire() {
    firebase.database().ref('Fubo').once('value').then(function(snapshot) {
      var posts_div = fubo;
      kocak(posts_div, snapshot);
    });
  }}

if (fun) {
  function Fire() {
    firebase.database().ref('Funimation').once('value').then(function(snapshot) {
      var posts_div = fun;
      kocak(posts_div, snapshot);
    });
  }}

if (hbo) {
  function Fire() {
    firebase.database().ref('HBOMax').once('value').then(function(snapshot) {
      var posts_div = hbo;
      kocak(posts_div, snapshot);
    });
  }}

if (hulu) {
  function Fire() {
    firebase.database().ref('Hulu').once('value').then(function(snapshot) {
      var posts_div = hulu;
      kocak(posts_div, snapshot);
    });
  }}

if (ipv) {
  function Fire() {
    firebase.database().ref('IpVanish').once('value').then(function(snapshot) {
      var posts_div = ipv;
      kocak(posts_div, snapshot);
    });
  }}

if (nba) {
  function Fire() {
    firebase.database().ref('NBA').once('value').then(function(snapshot) {
      var posts_div = nba;
      kocak(posts_div, snapshot);
    });
  }}

if (nord) {
  function Fire() {
    firebase.database().ref('Nord').once('value').then(function(snapshot) {
      var posts_div = nord;
      kocak(posts_div, snapshot);
    });
  }}

if (sling) {
  function Fire() {
    firebase.database().ref('SlingTv').once('value').then(function(snapshot) {
      var posts_div = sling;
      kocak(posts_div, snapshot);
    });
  }}

if (steam) {
  function Fire() {
    firebase.database().ref('Steam').once('value').then(function(snapshot) {
      var posts_div = steam;
      kocak(posts_div, snapshot);
    });
  }}

if (tunnel) {
  function Fire() {
    firebase.database().ref('TunnelBear').once('value').then(function(snapshot) {
      var posts_div = tunnel;
      kocak(posts_div, snapshot);
    });
  }}

if (Udemy) {
  function Fire() {
    firebase.database().ref('Udemy').once('value').then(function(snapshot) {
      var posts_div = udemy;
      kocak(posts_div, snapshot);
    });
  }}

if (upl) {
  function Fire() {
    firebase.database().ref('Uplay').once('value').then(function(snapshot) {
      var posts_div = upl;
      kocak(posts_div, snapshot);
    });
  }}

if (valo) {
  function Fire() {
    firebase.database().ref('Valorant').once('value').then(function(snapshot) {
      var posts_div = valo;
      kocak(posts_div, snapshot);
    });
  }}



