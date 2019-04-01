for ( var i = 1; i < 101; i++) {
  if ( i % 5 === 0 && i % 3 === 0 ) {
    document.write("fizzbuzz<br>");
  } else if ( i % 5 === 0 ) {
    document.write("fizz<br>");
  } else if ( i % 3 === 0 ) {
    document.write("buzz<br>");
  } else {
    document.write(i + "<br>");
  }
}