function calculateMinCost() {
  
	 const inputValue = document.getElementById("rope-lengths").value;

            // Split the input value into an array using a comma as the delimiter
            const inputArray = inputValue.split(',');
            ropes = inputArray.map(Number)
            // console.log(ropes)
} 
let output;
let result = function minCostOfRopes(ropes) {
  if (ropes.length < 2) {
    return 0; // No ropes or only one rope, no cost to connect.
  }

  ropes.sort((a, b) => a - b);

  let totalCost = 0;
  while (ropes.length > 1) {
    const firstRope = ropes.shift();
    const secondRope = ropes.shift();
    const cost = firstRope + secondRope;
    totalCost += cost;
    ropes.push(cost);
    ropes.sort((a, b) => a - b);
  }
// console.log(totalCost)
	output = totalCost;
  return totalCost;
}
 result(ropes)
document.getElementById("result").innerHTML = output;
}  
