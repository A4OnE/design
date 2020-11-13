var pet={
questions:['what is your pet name?','what  does your pet eat?'],
answer:{
    one:['mickey','jimmy','lucky','fuchey'],
    two:['rice','bread','roti','dogfood']
 },
 correct:{
     ans1:'mickey',
     ans2:'dogfood'
 }

};
document.write(pet.questions[0]);
document.write('<br>');

document.write(pet.answer.one);
document.write('<br>');

document.write(pet.correct.ans1);
document.write('<br>');
document.write(pet.questions[1]);
document.write('<br>');
document.write(pet.answer.two);
document.write('<br>');
document.write(pet.correct.ans2);
document.write('<br>');