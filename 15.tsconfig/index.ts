/* to create tsconfig file -----> 
tsc --init */

/*get Output file (i.e js file)  to a  director ( i.e public) --->
 tsconfig => rootDir : "./src"  , outDir : "./public" */

/*If ts file at root dir ----> tsconfig  "include" : ["src"]*/

/*tsc -w  || tsc --watch */

/*Code quality improvement --->
--"noUnusedLocals": true, 
--"noUnusedParameters": true,   
--"noImplicitReturns": true, 


/*-- "noImplicitReturns": true, 


function apple(data :string | number){
    let item = 10 ; 
    if(data== 20){
        return true
    }
    else{
        console.log('else')
    }
} 

apple('fruit')*/

/*"noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements.
function apple (data){
    case "fruit":
        console.log("fruit");
        // break /*Missing here break

    case "color":
        console.log("color")
}

*/
