import {db} from "./database.js"

export default function get_db(db){
    return db.sort((a,b) => a.id -b.id)
}

