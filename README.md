# BlogProject
A blog project for my portfolio site

First goal:

## Page structure

 - Welcome page (/) 
  - Header: "Goats are welcome" 
  - Scrollable stuff, containing posts: only title is shown 
 - Create post (/create)
  - Set title 
  - Write content 
  - button: save 
   - GET: /save 
          title, content 
          server side saves it into a file under the "posts" directory with the title as filename + .txt 
   
          
