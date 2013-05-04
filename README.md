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
	
into the console

	session_Schema = new Schema({
		sessionID: String,
		movement: [movements_Schema],
		clicks: [clicks_Schema],
		screens: [screens_Schema],
		user_info: {
			sessionID: String,
			screen_size: {
				width: Number,
				height: Number
			},
			ip: String,
			browser: {
				browser: String,
				version: Number,
				os: String
			},
		}
	});

	movements_Schema = new Schema({
		url: String,
		position: [mouse_movements_Schema]
	});
	
	mouse_movements_Schema = new Schema({
		x: Number,
		y: Number,
		dateTime: String
	});

	clicks_Schema = new Schema({
		url: String,
		x: Number,
		y: Number,
		dateTime: String
	});

	screens_Schema = new Schema({
		url: String,
		screenshots_location: String
	});


index Session Ids  
index urls  
index of browsers  
index of ip  
