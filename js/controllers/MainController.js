app.controller('MainController', ['$scope', function($scope) {
	$scope.tourItems = [
	  {
	  	fromDate: new Date(2017, 06, 09),
	  	toDate: new Date(2017, 06, 11),
	  	venue: "Northside Festival 2017",
	  	location: "Aarhus, Denmark",
	  	ticketLink: "http://www.songkick.com/festivals/1814-northside/id/28409434-northside-festival-2017	"
	  },
	  {
	  	fromDate: new Date(2017, 06, 16),
	  	toDate: new Date(2017, 06, 18),
	  	venue: "Best Kept Secret Festival 2017",
	  	location: "Beekse Bergen, Hilvarenbeek, Netherlands",
	  	ticketLink: "http://www.songkick.com/festivals/600699-best-kept-secret/id/28438709-best-kept-secret-festival-2017"
	  },
	  {
	  	fromDate: new Date(2017, 06, 21),
	  	toDate: new Date(2017, 06, 25),
	  	venue: "Glastonbury Festival 2017",
	  	location: "Worthy Farm, Pilton, UK",
	  	ticketLink: "http://www.songkick.com/festivals/585-glastonbury/id/27082564-glastonbury-festival-2017"
	  },
	  {
	  	fromDate: new Date(2017, 06, 28),
	  	toDate: new Date(2017, 07, 01),
	  	venue: "Opener Festival 2017",
	  	location: "Gdynia-kosakowo Airport, Gdynia, Poland",
	  	ticketLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  }
  ];

  $scope.albums = [
	  {
	    title: "Pablo Honey",
	    albumImg: "images/pablo_honey.jpg",
	    releaseDate: new Date(1993, 02, 22),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },

	  {
	    title: "The Bends",
	    albumImg: "images/the_bends.jpg",
	    releaseDate: new Date(1995, 03, 13),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "OK Computer",
	    albumImg: "images/ok_computer.jpg",
	    releaseDate: new Date(1997, 06, 16),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "Kid A",
	    albumImg: "images/kid_a.jpg",
	    releaseDate: new Date(2000, 10, 02),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "Amnesiac",
	    albumImg: "images/amnesiac.jpg",
	    releaseDate: new Date(2001, 06, 04),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "Hail To The Thief",
	    albumImg: "images/hail_to_the_thief.jpg",
	    releaseDate: new Date(2003, 06, 09),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "In Rainbows",
	    albumImg: "images/in_rainbows.jpg",
	    releaseDate: new Date(2007, 10, 10),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "The King Of Limbs",
	    albumImg: "images/the_king_of_limbs.jpg",
	    releaseDate: new Date(2011, 02, 18),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  },
	  {
	    title: "A Moon Shaped Pool",
	    albumImg: "images/a_moon_shaped_pool.jpg",
	    releaseDate: new Date(2016, 05, 08),
	    itunesLink: "http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017",
	    spotifyLink:"http://www.songkick.com/festivals/156151-opener/id/28378104-opener-festival-2017"
	  }
  ];
}]);