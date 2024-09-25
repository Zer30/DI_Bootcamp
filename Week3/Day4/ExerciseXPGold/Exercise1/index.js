let language = prompt("Which language do you speak?").toLowerCase();
switch (language) {
case 'french':
  alert("Bonjour");
break;
  
case 'english':
  alert("Hello");
break;
  
case 'hebrew':
    alert("Shalom");
 break;
  
default:
    alert('01110011 01101111 01110010 01110010 01111001');
}
// Switch:
// checks user ('french', 'english', 'hebrew').
// If input matches, alert.
// If none , '01110011 01101111 01110010 01110010 01111001'.