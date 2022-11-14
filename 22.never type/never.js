/*void :: function  returns some types (like : undefine )if there has no error  */
// export {};
function tryReturn() {
    //   return true;
}
console.log(tryReturn());
/*never ::: when a function returns nothing  */
/*when your js code execution breaks */
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError("Server side Error", 500));
