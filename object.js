




var pubg={

  qustions:['what is the latest version?','  what is capital of nepal?   '
    ],

  options:{
      first:['a','b','c','d'],
      second:['ktm','butwal','chitwan','biratnagar']
    
},
  correct:{
      one:'a',
      two:'ktm'
  }

};
 document.write(pubg.qustions[0]);

 document.write('<br>');
document.write('<input type="radio">');
 document.write(pubg.options.first.join('<input type="radio">'));
document.write('<hr><br>');
document.write(pubg.correct.one+"is correct ");
document.write('<br>');
 document.write(pubg.qustions[1]);
 document.write('<br>');
 document.write(pubg.options.second);
 document.write('<br>');
 document.write(pubg.correct.two+"is correct");


 










































         