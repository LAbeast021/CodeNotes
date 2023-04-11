// How can I change the class of an HTML element in response to an onclick or any other events using JavaScript?
document.getElementById("MyElement").classList.add('MyClass');
document.getElementById("MyElement").classList.remove('MyClass');
if ( document.getElementById("MyElement").classList.contains('MyClass') )
document.getElementById("MyElement").classList.toggle('MyClass');

// To replace all existing classes with one or more new classes, set the className attribute:
document.getElementById("MyElement").className = "MyClass";

// To add a class to an element, without removing/affecting existing values, append a space and the new classname, like so:
document.getElementById("MyElement").className += " MyClass";


// To remove a single class to an element, without affecting other potential classes, a simple regex replace is required:
document.getElementById("MyElement").className =
   document.getElementById("MyElement").className.replace
      ( /(?:^|\s)MyClass(?!\S)/g , '' )
/* Code wrapped for readability - above is all one statement */
// (?:^|\s) # Match the start of the string or any single whitespace character
// MyClass  # The literal text for the classname to remove
// (?!\S)   # Negative lookahead to verify the above is the whole classname
//          # Ensures there is no non-space character following
//          # (i.e. must be the end of the string or space)

// The same regex used above for removing a class can also be used as a check as to whether a particular class exists:
if ( document.getElementById("MyElement").className.match(/(?:^|\s)MyClass(?!\S)/) );

// __________________________ ALSO CAN USE jQUERY _______________________________________________________________ //
$('#MyElement').addClass('MyClass');
$('#MyElement').removeClass('MyClass');
if ( $('#MyElement').hasClass('MyClass') );
$('#MyElement').toggleClass('MyClass');

$('#MyElement').click(changeClass);
$(':button:contains(My Button)').click(changeClass);
// ///// ---------------------------------------------------------------------------------------------- \\\\\ \\

