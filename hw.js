var person={
    name:['kisan','nischal'],
    age:['21','23']
};
for( key in person)
{
    document.write('<br>',key,":",person[key]),'<br>';
    
}if(key=='name'||key=='age'){

for( var i=0;i<person[key].length;i++)
{
    document.write(person['name'][i],person['age'][i]);
}
}