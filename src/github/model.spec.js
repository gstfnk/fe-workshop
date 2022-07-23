const assert = require('assert');
const {GitHubUser} = require("./model"); // assert from Node

describe('GitHubUser', () => {
    it('should create with img and bio props', () => {
        // given
        // const givenUrl = 'url';
        // const givenBio = 'bio';
        // destructuring
        const [givenUrl, givenBio] = ['url', 'bio'];
        const input = {
            avatar_url: givenUrl,
            bio: givenBio
        };

        // when
        const result = new GitHubUser(input);

        // then
        assert.equal(result.img, givenUrl);
        assert.equal(result.bio, givenBio);
    })

    it('should return bio from toString implementation', () => {
        // given
        // const givenUrl = 'url';
        // const givenBio = 'bio';
        // destructuring
        const [givenUrl, givenBio] = ['url', 'bio'];
        const input = {
            avatar_url: givenUrl,
            bio: givenBio
        };

        // when
        const result = new GitHubUser(input);

        // then
        assert.equal(`${result}`, givenBio);
    })
});