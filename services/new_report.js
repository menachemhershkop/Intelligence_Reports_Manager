import { db } from "../db/database.js";

export default  function new_report(db, id, terroristName, weapons, text){
    this.id = db.id;
    this.terroristName = db.terroristName;
    this.weapons = db.weapons;
    this.text = db.text;
    const report = {id:id, terroristName:terroristName, weapons:weapons,massage:text}
    return db.push(report)
    
}

// const teror = new new_report(db,"123","ahmes","glok","veary deanger")
// const teror2 = new new_report(db,"123","ahmes","glok","veary deanger")

console.log(db);
