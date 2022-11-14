/*Difference between unknown and any  */
/*type:any */
let data: any;

data = 20;
data = "hello";
let item: string;

item = data; /*No Error */

/*type : unknown */

let user: unknown;

user: 20;
user: "name";

let items: string;

// items =user

/*error occurs here */
