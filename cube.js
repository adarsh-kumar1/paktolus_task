function cube( arr, n)
{
    for (let i = 0; i < n; i++) {    
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
         
                let x = arr[i] * arr[i] * arr[i], y = arr[j] *  arr[j] * arr[j], z = arr[k] * arr[k] * arr[k]; // Complexity will be: O(1)
 
                if (x == y + z || y == x + z ||   z == x + y) // Complexity will be: O(1)
                    return true;
            }
        }
    }
 

    return false;
}
   

let arr = [ 3, 1, 4, 6, 5,7 ];
let arr_size = arr.length;
if (cube(arr, arr_size) == true)
    console.log("Yes");
else
    console.log ("No");


