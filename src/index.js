module.exports = function solveEquation(equation) {
  for (var i=0; i<equation.length; i++){
    if (equation.substr(i,1)==' '){
      equation=equation.substring(0,i)+equation.substring(i+1);
    }
  }
  
    var n=equation.indexOf('*x^2');
    var a=equation.substring(0,n);
   
var m=equation.indexOf('*x', (n+1));
var b=equation.substring((n+4),m);

var c=equation.substring((m+2));

var D=Math.pow(b,2)-4*a*c;
var x1=Math.round((-b+Math.sqrt(D))/(2*a));
var x2=Math.round((-b-Math.sqrt(D))/(2*a));

var arr=[];
arr.push(x1);
arr.push(x2);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

return arr.sort(compareNumeric);

    
  
}
