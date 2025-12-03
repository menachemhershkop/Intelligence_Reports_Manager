import new_report from "./new_report.js"
import { db } from "../db/database.js"

export default function saving_reports(db, report){
    for (let i= 0; i<db.length; i++){
        if (db[i].id == report.id){
            throw new Error("Unexepded same ID");
            
        }
       
    }
     return db.push(report)
}

// const teror = new new_report(db,"123",null,"glok","veary deanger")
// const teror2 = new new_report(db,"1234","ahmes","glok","veary deanger")
// saving_reports(db,teror)
// saving_reports(db,teror2)
// console.log(db);
