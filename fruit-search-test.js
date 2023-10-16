describe('#fruitSearch', function() {

    // beforeEach(function () {
    //     // initialization logic
    //     input.addEventListener('keyup', searchHandler);
    //     suggestions.addEventListener('click', useSuggestion);
    //   });

    it('returns a new array of matching string values from an array of strings when given a string', function() {
      expect(search('a')).toEqual(['Apple', 'Apricot', 'Avocado 🥑']);
      expect(search('ST')).toEqual(['Star fruit', 'Strawberry']);
    });

    // afterEach(function() {
    //     // teardown logic
    //   });

});