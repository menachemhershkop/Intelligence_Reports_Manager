import { db } from "../db/database.js";
import saving_reports from "./saving_report.js";

export default  function new_report(id, terroristName, weapons, text){
    this.id = id;
    this.terroristName = terroristName;
    this.weapons = weapons;
    this.text = text;
    if (terroristName == ""){
        this.terroristName ='Muhammad — unknown last name'
        
    }
    if (id == null){
        throw new Error("ID is request");
        
    }
    const report = {id:this.id, terroristName:this.terroristName, weapons:this.weapons,massage:this.text}
    
  
    return report
    
}



