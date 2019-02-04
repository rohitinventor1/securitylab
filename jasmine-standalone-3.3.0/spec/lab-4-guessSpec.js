describe("Test guessNum function",function(){

  describe("Test to pass function",function(){

    it("should return 'You guessed it!' when the correct number is entered.",function(){

      var testNumber = 4 ;
      expect(guessNum(testNumber)).toEqual("You guessed it!");

    });


  it("should return Guess again. for any whole number between 1 and 10 (inclusive), except the correct answer.",function(){

      var testNumber = 5 ;
      expect(guessNum(testNumber)).toEqual("Guess again.");

    });



  
      });

describe("Test to fail function",function(){

    it(" should return A number was not input. if the value entered is not a number.",function(){
    var testNumber = "A" ;
      expect(guessNum(testNumber)).toEqual("A number was not input.");

    });

    it(" should return A value was not entered.",function(){
    var testNumber = "" ;
      expect(guessNum(testNumber)).toEqual("A value was not entered.");

    });


  });


describe("Test to Boundry",function(){

    

    it(" should return Way off!!!! Pick between 1 and 10.",function(){
    var testNumber = 11 ;
      expect(guessNum(testNumber)).toEqual("Way off! Pick between 1 and 10.");

    });


  });




});

