var count=0;       //To hold the value of number of likes

var isedit=0;      //To toogle between edit and save button


// "postLiked() function will called when we click on Like Button"
function postLiked(){
    count++;
    document.getElementById("likeCount").innerHTML=count+" person likes this!"
    document.getElementById("likeBlog").innerHTML = "Liked!"
}

// "addComments() function is called when click on comment button"
function addComments(id){
    document.getElementById("viewComments").style.visibility = "visible";
    var addEventName = id.value +'<br>';
    var a = document.getElementById('cmntText');
    document.getElementById('addEventNames').innerHTML = '<p style="padding:10px;background-color:white;">'+addEventName+'</p>' +document.getElementById('addEventNames').innerHTML;          
    a.value=a.defaultValue;
}


function editPost(){

    //If current state of toogle button is "Edit"
    if(isedit===0){
        var content = document.getElementById("toBeEdited").innerHTML; 
        var heading = document.getElementById("titleSolid").innerHTML;

        //replacing edit icon with save icon
        document.getElementById("toogleButtonIcon").innerHTML = ' '
        document.getElementById("toogleButtonIcon").innerHTML = '<i id="toogleButtonIcon" class="fa fa-save"></i>'
        document.getElementById("EditAndSave").innerHTML = "Save &nbsp";
        

        //replacing content area with editable area 
        document.getElementById("editablearea").value = content;
        document.getElementById("editablearea").style.visibility = "visible";
        document.getElementById("editablearea").style.display = "block";
        document.getElementById("toBeEdited").style.visibility = "hidden";
        document.getElementById("toBeEdited").style.display = "none";


        // replacing heading area with editable area
        document.getElementById("titleEdit").value = heading;
        document.getElementById("titleEdit").style.visibility = "visible";
        document.getElementById("titleEdit").style.display = "block";
        document.getElementById("titleSolid").style.visibility = "hidden";
        document.getElementById("titleSolid").style.display = "none";

        isedit=1;      //Updating the value
    }

    //If current state of toogle button is "Save"
    else if(isedit===1){
        var content = document.getElementById("editablearea").value;
        var heading = document.getElementById("titleEdit").value;

        //replacing save icon with edit icon
        document.getElementById("toogleButtonIcon").innerHTML = ' '
        document.getElementById("toogleButtonIcon").innerHTML = '<i id="toogleButtonIcon" class="fa fa-edit"></i>'
        document.getElementById("EditAndSave").innerHTML = "Edit &nbsp";


        //replacing editable area of content with non editable area 
        document.getElementById("toBeEdited").innerHTML = content;
        document.getElementById("editablearea").style.visibility = "hidden";
        document.getElementById("editablearea").style.display = "none";
        document.getElementById("toBeEdited").style.visibility = "visible";
        document.getElementById("toBeEdited").style.display = "block";


        //replacing editable area of heading with non editable area
        document.getElementById("titleSolid").innerHTML = heading;
        document.getElementById("titleEdit").style.visibility = "hidden";
        document.getElementById("titleEdit").style.display = "none";
        document.getElementById("titleSolid").style.visibility = "visible";
        document.getElementById("titleSolid").style.display = "block";

        isedit=0;  //updating value
    }

    
}