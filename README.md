# json_xlsx_converter
## This is some helper functions based on xlsx library
### to_json ---> take file name.xlsx 
            ----> create export_json in root folder
### to_xlsx ---> json file  , file name without extension
            ----> create export_xlsx in root folder
## Example 
   
to_json('persons.xlsx')
to_xlsx(jsonfile,'newfilename')
