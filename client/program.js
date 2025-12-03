import { db } from "../db/database.js";
import get_db from "../db/getDB.js";
import sortedByField from "../db/get_by_field.js";
import new_report from "../services/new_report.js";
import saving_reports from "../services/saving_report.js";
import search from "../utils/search.js";
import del from "../utils/delete.js";
import edit from "../utils/edit.js";
import readlineSync from 'readline-sync'
import input from 'analiza-sync'
import { nanoid } from 'nanoid'
let flag = true
while (flag){
let  menu = ['Add a new intelligence report', 'Show all reports', ' Search report by ID', 'Delete report by ID', 'Edit report by ID'],
  index = readlineSync.keyInSelect(menu, 'Your choice?');
    if(index==typeof(undefined)){
        flag= false
        break;
    }
    
        try{
            
            switch(index){
                case -1:
                    console.log("bey");
                    flag = false
                    break;
                case 0:
                let id = input("Enter ID or press 'enter' for  defult: ")
                const terroristName = input('terroristName: ')
                const weapons = input('weapons: ')
                const text = input('massage: ')

                if (id=="")
                    {
                        
                        id = nanoid()
                        console.log("test");
                        
                }
                console.log(id,terroristName,weapons,text);
                
                let report =new new_report(id,terroristName,weapons,text);
                saving_reports(db, report)            
                break;
                case 1:
                console.log(get_db(db))
                    break;
                case 2:
                    let id_search = input("Enter ID for search: ")
                    console.log(search(db,id_search));
                    break;
                case 3:
                    let id_del = input("Enter ID for delete: ")
                    del(db,id_del)
                    console.log("delete secces \n data stored:");
                    console.log(db);
                    break;
                case 4:
                    let id_edit = input("Enter ID for edit: ")
                    let keyForEdit= input("Enter key for edit: ")
                    let update = input("Enter text for update: ")
                    edit(id_edit,db,keyForEdit,update)
                    break;
                case 5:
                    flag = false
                    break
            }
    }
        catch (error){console.log("prublem");
        }
        
    }
    
