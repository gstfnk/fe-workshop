"use strict";
exports.__esModule = true;
exports.GitHubUser = void 0;
var GitHubUser = /** @class */ (function () {
    function GitHubUser(_a) {
        var _b;
        var _c = _a === void 0 ? {} : _a, _d = _c.avatar_url, img = _d === void 0 ? '' : _d, _e = _c.bio, bio = _e === void 0 ? 'Cannot get a biography.' : _e;
        _b = [img, bio], this.img = _b[0], this.bio = _b[1];
    }
    GitHubUser.prototype.toString = function () {
        return this.bio;
    };
    return GitHubUser;
}());
exports.GitHubUser = GitHubUser;
