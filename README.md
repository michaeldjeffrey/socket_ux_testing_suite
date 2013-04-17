socket_ux_testing_suite
=======================

##BY NEXT WEEK
---Collect Client info
---Capture Events
---Capture Mouse Movement
---Send to Server
Store in Database


---capture mouse movement
---capture mouse clicks
---log resolution and other schtuff

SessionID:
{
  movement : [ 
{ 
sessionID, url, position : 
[ 
{ x, y, time }
] 
} ],
	clicks : [
		{
		sessionID, url, x, y, time 
		} ],
	screens : [ { url, screenshots } ],
	misc : {
		screen resolution, ip, browser
		}
	}

index Session Ids

index urls

index of browsers

index of ip
