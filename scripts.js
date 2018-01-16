
function popBalloon() {
  document.getElementsByTagName("img")[Math.floor(Math.random() * 5)].style.display = "block";
}
document.getElementById("button").addEventListener("click", popBalloon);

      var start = new Date().getTime();


			//Array of all the images in the folder
			var imageArray = ["images/chuckiecheese.gif", "images/ajayi.jpg", "images/exorcist.jpg", "images/fletcher.jpg", "images/flyeaglefly.jpg", "images/hwhpt.gif", "images/it.gif", "images/opera.png", "images/trump1.gif", "images/trumpface.gif", "images/trumpnochance.gif", "images/trumpnuke.gif", "images/wentz.jpg", "images/explorer.png"];


            function makeShapeAppear() {
                //These variables store random numbers for the top, left, and width
                var top = Math.random() * 200;

                var left = Math.random() * 1000;

                var width = (Math.random() * 400 + 100);

                document.getElementById("balloon").style.borderRadius = "50%";
				//Sets image source to a random number rounded and selects that from the imageArray array
				document.getElementById("balloon-image").src=imageArray[Math.round(Math.random() * 12)];

                //These set the attributes width, height, top, left and display to the selected amounts in the variables
                document.getElementById("balloon-image").style.width = width + "px";
				document.getElementById("balloon").style.width = width + "px";

                document.getElementById("balloon-image").style.height = width + "px";
				document.getElementById("balloon").style.height = width + "px";

                document.getElementById("balloon-image").style.top = top + "px";
				document.getElementById("balloon").style.top = top + "px";

                document.getElementById("balloon-image").style.left = left + "px";
				document.getElementById("balloon").style.left = left + "px";

                document.getElementById("balloon").style.display = "block";

				//Starts timer
                start = new Date().getTime();

            }

            function appearAfterDelay() {
                //activates makeShapeAppear function after random amount of time
                setTimeout(makeShapeAppear, Math.random() * 2000);

            }

            appearAfterDelay();

            document.getElementById("balloon").onclick = function() {

                document.getElementById("balloon").style.display = "none";

                var end = new Date().getTime();

                var timeTaken = (end - start) / 1000;

//				if (timeTaken > 10) {
//					window.location = "gameover.html";
//				}

                document.getElementById("timeTaken").innerHTML = timeTaken + "s";

                appearAfterDelay();

            }
