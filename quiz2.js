



function games(){


var quiz=[
       ["what is your name?",'nischal'],
         ['hello','world'],
         [' value','23'],
         ['very','nice']
         ];


         
var correct=0;
var questions; 
 var answer;
 var response;
var html;
var correctans=[];



for( var i=0;i<quiz.length;i++){ 

             questions=quiz[i][0];
             answer =quiz[i][1];
         
           
             response=prompt(questions);
                 if(response===answer)  
                 {     
                  correct+=1;
                  correctans+=questions;
                 }

              }
              html=correct;



               smart(html);

              
               function smart(print)
               {
               var Y= document.getElementById('QUIZ');
                Y.innerHTML=print;


               }
              }


              function start(){
                games();
              }
              
             
               
        
               