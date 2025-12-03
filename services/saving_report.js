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

