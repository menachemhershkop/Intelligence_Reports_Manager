import { db } from "../db/database.js";
export default function del(db, id){
    let results= null
    for(let i=0; i<db.length; i++) {
        if (db[i].id == id){
            results = db[i]
            db.splice(i,1)
        }
         
    }
        if (results == null) {
            throw new Error("ID not fuond");
            
        }
    return db
}
// console.log(db);
// del(db,"123456")
// console.log(db);

