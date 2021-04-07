# json_xlsx_converter
## This is some helper functions based on xlsx library
### to_json ---> take file name.xlsx 
            ----> create export_json in root folder
### to_xlsx ---> json file  , file name without extension
            ----> create export_xlsx in root folder
## Example 
   p const to_json = require("json_xlsx_convert").to_json;
   p const to_xlsx = require("json_xlsx_convert").to_xlsx;
   
 1. to_json('persons.xlsx')
 2. to_xlsx(jsonfile,'newfilename')
