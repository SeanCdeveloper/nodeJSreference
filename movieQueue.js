// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
    queue: [
      "Mr. Nobody",
      "The Matrix",
      "Eternal Sunshine of the Spotless Mind",
      "Fight Club"
    ],
    watchMovie: function() {
      this.queue.pop(); 
    },
    addMovie: function(movie) {
      this.queue.unshift(movie);
    },
    printQueue: function() {
      var list = "";
      for (var i = this.queue.length - 1; i >= 0; i--) {
        var currentMovie = this.queue[i];
        list += (this.queue.length - i) + ". " + currentMovie + "\n";
      }
      console.log(list);
    }
  };
  // we need the "this" in all three properties above.
  console.log("Printing movie queue!\n");
  netflixQueue.printQueue();
  netflixQueue.watchMovie();
  console.log("\nWatched a movie!\n");
  console.log("Printing movie queue!\n");
  netflixQueue.printQueue();
  console.log("\nAdding a movie!\n");
  netflixQueue.addMovie("Black Swan");
  console.log("Printing movie queue!\n");
  netflixQueue.printQueue();