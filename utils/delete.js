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
            console.log("ID not fuond");
            
        }
    return db
}
