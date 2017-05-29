module.exports = function main(String s) {
  // Write your cade here
  var i=s.length();
  var x=parseInt(s);
  var sum=0;
  for(var n=0;n<i;n++){
	  sum+=x%10;
	  x=x/10;
  }
  return sum;
};
