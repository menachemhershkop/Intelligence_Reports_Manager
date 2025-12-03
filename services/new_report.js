import { db } from "../db/database.js";

export default  function new_report(db, id, terroristName, weapons, text){
    this.id = id;
    this.terroristName = terroristName;
    this.weapons = weapons;
    this.text = text;
    if (terroristName == null){
        this.terroristName ='Muhammad — unknown last name'
        
    }
    if (id == null){
        throw new Error("ID is request");
        
    }
    const report = {id:this.id, terroristName:this.terroristName, weapons:this.weapons,massage:this.text}

    // return db.push(report)
    return report
    
}

const teror = new new_report(db,"123",null,"glok","veary deanger")
const teror2 = new new_report(db,"123","ahmes","glok","veary deanger")

console.log(db);


