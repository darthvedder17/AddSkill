This Node app on execution performs the following functions : 

1.Create a folder development and production according to the NODE_ENV variable. Default : development
2. Creates a subfolder development/src and development/dest
3. The src subfolder further contains a file according to date provided provided by Moment.js
4. The dest subfolder has a --stream value which follows through file build according to its value
   i.e true or false. Either of them creates the dest subfolder with same file name as src subfolder
5. The only differnce is the creation mechanism of dest sub-folder. One is done through streaming mechanism while 
   the other is done through the fs module.
   
   
   Document Structure 
   ```
   
   [development ? production] 
   
   
   [development--]
              [development/src ------- development/dest(--stream true ? false)]
                    |                       |
                    |                       |
                 11/11/11.txt               11/11/11.txt
                                              
                 Sample Text              Sample Text```      
                
