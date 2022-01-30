function pytha( ar, n)
{
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let x = ar[i] * ar[i], y = ar[j] *  ar[j], z = ar[k] * ar[k]; // Complexity will be: O(1)
 
                if (x == y + z || y == x + z ||  z == x + y) // Complexity will be: O(1)
                    return true;
            }
        }
    }
 

    return false;
}
    
let ar = [ 3, 1, 4, 6, 5 ];
let ar_size = ar.length;
if (pytha(ar, ar_size) == true)
    console.log("Yes");
else
    console.log ("No");

//   ** Complexity ( big O) **

//   O(n)*O(n)*O(n)
//   O(n^3)