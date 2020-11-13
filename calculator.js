var person={
    name:['nischal','rajiv'],
     country:'nepal',
    home:'butwal',
    study:'ncit'

};

for(ask in person)
    {
        document.write('<br>',ask,';',person[ask],'<br>');
        if(ask==='name'){
          y= person[ask].length;
      
          for(var i=0;i<y;i++){
            document.write(person[ask][i],'<br>');

          }
          
         
         
        }
    }