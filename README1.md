MyFlix Client React app

![search](https://user-images.githubusercontent.com/116584150/229385576-1f47089c-32cb-4220-9613-d7e903692ff0.png)
![add fave](https://user-images.githubusercontent.com/116584150/229385581-0d96831a-b8a9-484e-97fb-cc72d1598acf.png)
![movieview](https://user-images.githubusercontent.com/116584150/229385583-1240503e-500d-40e0-8b57-ef7f9413144e.png)
![profile](https://user-images.githubusercontent.com/116584150/229385585-15bf6583-e3b1-4842-ae62-e9587a412215.png)

My single page app was coded in React, using components for the moviecards, movieview, faveourites, log-in, sign-up, profile page, user information and update user form. 

This app syncs with my myflix api and contains data for a series of movies and users. 

New users can join the app via the sign-up component and their data is sent to the database. They then can view the movies currently in app via the MainView and the available <br> 
are presented as a series of movie cards. Upon clicking on one of these cards, the user is taken to the movieView component which holds more data about the chosen movies. The user
can then choose to add this to their fave movies list. This list is rendered within the profile view component and there is the option to remove movies from this list/arrya from
the profile page. 

Additionally, users can search for movies via the search bar and a smaller version of the movie cards will appear under the search bar. 

If users need to change their details, they can do so from the ProfileView, and any changes from filling out the update user form will be automatically reflected in the user details 
card. 

Style-wise I originally wanted to go for a futuristic, dark theme but after thinking on what I want the project to become after finishing the achievement, I settled on using soft blues
and pinks and a glassmorphism effect on the card and form components. 

I used the following for this project;

- React
- React Bootstrap
- JavaScript
- HTML
- CSS/SCSS

And if you want to see more, visit the live version here; https://jackocflix.netlify.app/
