const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// console.log(users.length)
// if (users.length === 0){
//     console.log("no one is online");
// }
// if (users.length === 1){
//     console.log("name_user is online");
// }
// if (users.length === 2){
//     console.log("name_user1 and name_user2 are online");
// }
if (users.length > 2){
    console.log("name_user1 and name_user2 and " + (users.length -2) + " more are online");
}