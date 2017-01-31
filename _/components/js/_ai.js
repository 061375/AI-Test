/**
 * 
 *
 * 
 *
 * */
var Ai = (function() {
  
  "use strict";
  
  var events;
  
  var stop = $('.stop');
  /**
   * bindActions
   * bind events to dom nodes
   * @returns {Void}
   * */ 
  var bindActions = function() {
    stop.on('click', function(){clearInterval(moveMe.runid)});
  };
  /**
   * init
   * initialialize
   * @returns {Void}
   * */ 
  var init = function() {
    //bindActions();
    console.log(distance_to_directions(moveMe,Target));
  };

  return {
    init: init
  };

}());