
# ApartmentsWebsite

**Description:** This website is a place to list housing and reviews of the places
<body>
	<p>index.js: Where the server side code is written</p>
<ul>
	<p>*get requests:*</p>
	<li> '/' -> Sends to the home page and renders the home handlebar which is where all the housing is shown
	<li> '/listingData' -> get the housing data from the MongoDB database
	<li> '/description' -> renders the description handlebar which is the about me page
	<li> '/listing' -> renders the add handlebar which is an html form to add a new listing
	<li> '/listing/:id/review' -> renders the addReview handlebar which is an html form to add a review to housing corresponding to the id
	* '/:id/getReview' -> renders the reviews handlebar and shows the reviews for the housing corresponding to the id
</ul>
<ul>
	<p>*post requests:*</p>
	<li> '/listing' -> posts a listing with the parameters specified by the html form
	<li> '/listing/:id/review' -> posts a review with the parameters specified by the html
</ul>
<ul>
	<p>*delete requests:*</p>
	<li> '/listing/:id/deleteid' -> deletes a listing specified by the id parameter
	<li> '/listing/deleteExpensive' -> deletes all expensive housing (over $1200)
</ul>

**handlebars**
*main.handlebars*
	* The navigation bar present in all pages
	* Has a link to home, a page to list housing, and the about page
*home.handlebars*
	* Shows all the available housing
	* Iterates through the data structure and fills out the html through each iteration
*add.handlebars*
	* An html form that asks for all the required information to list housing
	* Posts to '/listing'
*addReview.handlebars*
	* An html form that asks for all the required information to add a review
	* Posts to '/listing/:id/review'
*reviews.handlebars*
	* Shows all the reviews for a specified housing
	* Iterates through every review that is sent in an fills out the html through each iteration
*description.handlebars*
	* A simple about page

**models**
*reviewSchema*
	* Contains stars(rating), name, and comment
*posterSchema*
	* Contains first name, last name, and phone number
*addressSchema*
	* Contains a street name, city, state, and zip code
*listingSchema*
	* Contains a title, monthly rent, rating, poster, and address
</body>



 
