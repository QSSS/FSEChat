'user strict';

angular.module('chatApp').factory('Message', function($resource){
  return $resource('/chat/messages/:id', {
    query: {
      method: 'GET',
    }
  });
});
