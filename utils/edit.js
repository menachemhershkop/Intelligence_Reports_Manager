import { db } from "../db/database.js";

export default function edit(id, db, key, update){
    let results= null
    const keys = Object.keys(db[0]);
    for(let i=0; i<db.length; i++) {
        if (db[i].id == id){
            results =  db[i]
            if (keys.includes(key)){
                db[i][key] = update
                console.log("Updting: \n", db[i]);
                                }
            else {
                console.log("key not found");
            }
        }
         
    }
        if (results == null) {
            console.log("ID not fuond");
            
        }
    
    
    return 
}
