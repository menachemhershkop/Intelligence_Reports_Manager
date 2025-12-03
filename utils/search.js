import { db } from "../db/database.js";
export default function search(db, id){
    let results= null
    for(let i=0; i<db.length; i++) {
        if (db[i].id == id){
            results =  db[i]
        }
         
    }
        if (results == null) {
            console.log("ID not fuond");
            
        }
    return results
}




