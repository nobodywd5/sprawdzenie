var a = "Liczba znajduje się w przedziale";
var b = "Liczba nie znajduje się w przedziale";
var n = 23;
function myFunction(a, b, n) {
  if (n >= 100 && n <= 200) {
        return (a);
      } else {
        return (b);
    }
            
}

console.log(myFunction(a, b));