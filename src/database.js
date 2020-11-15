
var database = firebase.database();
var dbTestRef = database.ref('test/')
dbTestRef.on('child_added', function(data){
	console.log(data.val())
})

function writeUserData() {
    database.ref('user/').set();
  }