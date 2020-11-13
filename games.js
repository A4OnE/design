var message=[  
    ["how old is nischal karki?","23"],
    ["where  do u live?","butwal"],
    ["i am making what game?","quiz game"]];
       
       var correct=0;
       var questions;
       var answers;
       var response;
       var html;
        
        for( var i=0;i<message.length;i++){
            var list="<ol>"
            questions=message[i][0];
            answers=message[i][1];
            response=questions;
            if(response===answers){
                correct+=1;
              list="<li>"+questions+"</li>";

            }
            

            list+="</ol>"

        }


html="you got"+correct+"questions";
print(html);
function print(oupt){
   // document.write(oupt);
   var got =document.getElementById('x');//method of document object.
got.innerHTML=oupt;
}



function log(){
    var game = document.getElementById("x").nodeValue;
  

}
alert(game);




