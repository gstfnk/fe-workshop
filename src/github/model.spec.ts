import {GitHubUser} from './model'
const assert = require('assert');

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
        assert.strictEqual(result.img, givenUrl);
        assert.strictEqual(result.bio, givenBio);
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
        assert.strictEqual(`${result}`, givenBio);
    })
});