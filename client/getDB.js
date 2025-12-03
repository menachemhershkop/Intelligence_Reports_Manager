import {db} from "../db/database.js"

export default function get_db(db){
    return db.sort((a,b) => a.id -b.id)
}

console.log(get_db(db));
