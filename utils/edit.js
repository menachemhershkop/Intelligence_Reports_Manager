import { db } from "../db/database.js";

export default function edit(id, db, key, update){
    let results= null
    const keys = Object.keys(db[0]);
    for(let i=0; i<db.length; i++) {
        if (db[i].id == id){
            results =  db[i]
            if (keys.includes(key)){
                db[i][key] = update
                                }
            else {
                throw new Error("key not found");
            }
        }
         
    }
        if (results == null) {
            throw new Error("ID not fuond");
            
        }
    return 
}
