# PROJECT 3 - NEWS POST FRONT-END

https://desolate-hollows-04392.herokuapp.com/

Our goal with this project was to have a site in which users could post news articles of interest to them and have a discussion about those articles.

### Technologies Used:
-express (server)
-node (package manager)
-mongodb (database)
-Auth0 (for user signup/login/authorization)
-React JS
-mongoose (communication between server and database)
-CSS Bootstrap for styling

### Approach Taken:
Ray Hiramatsu created the back-end using express and mogodb, and wrote a separate README about that process. I used react to build a full CRUD front-end that successfully integrated with the express server and mongodb Ray had set up. From there I integrated Auth0 to handle user signup and logins, then added ternary statements to control whether a user would have access to posting/editing/deleting capabilities based on if they were signed in or not. We attempted to integrate comments for each post into the site, however were unsuccessful in doing so before running out of time.

### Unsolved Problems:
As mentioned above, we could not get comments to work and did not push the relevant code up to the final product. However, with more time we should be able to successfully allow commenting on each post.

### Notes for Future Updates:
-Add commenting
-Implement socket.io to create chat rooms.
-Integrate a third-party news API with a button that will randomly generate an article for users to discuss.
-Come up with a better name.
