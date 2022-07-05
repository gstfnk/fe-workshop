const assert = require('assert');
const {map} = require("./map"); // assert from Node

describe('map', () => {
    it('should convert input to object with different keys', () => {
        // given
        const givenUrl = 'url';
        const givenBio = 'bio';
        const input = {
            img: givenUrl,
            bio: givenBio
        };

        // when
        // it won't work, because map func return undefined
        const result = map(input)

        // then
        assert.deepEqual(result, {img: givenUrl, bio: givenBio});
    })
});