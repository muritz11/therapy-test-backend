## Built backend with Nodejs/express + mongoDb
For the database i created a single userSchema, then separated users based on the userType  

### app base url: 
localhost:300/api  

### session endpoints:
/session/fetch => fetch all sessions | method: get  
/session/create => create a new session | method: post  
/session/update => update a session | method: put  
/session/delete => delete a new session | method: delete  

### user endpoints:
/user/therapists => fetch all therapists | method: get  
/user/clients => fetch all clients | method: get  
/user/create-client => create new client | method: post  
/user/create-therapist => create new therapist | method: post  
/user/delete => delete therapist/client | method: delete  


