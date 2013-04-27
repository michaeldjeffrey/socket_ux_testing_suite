socket_ux_testing_suite
=======================

##Jake
- [ ] mockup for GUI
- [ ] coded GUI
- [ ] 

##Joe  
- [ ] Initial object store into mongodb on connection  
- [ ] Subsequent storage of objects containing same sessionID 
- [ ] retrieval from database

note: to check the session id, type  

    document.cookie
    
into the console  
to delete the cookie, type

    document.cookie = null
    
unto the console

    SessionID: {   
        movement : [    
    		{ sessionID, url, position : [     
    			{ x, y, time }    
    		] } ],    
    	clicks : [    
    		{ sessionID, url, x, y, time }     
    	],    
    	screens : [   
    		{ url, screenshots }   
    	],    
    	misc : {    
    		screen resolution, ip, browser    
    	}    
    } 

index Session Ids  
index urls  
index of browsers  
index of ip  
