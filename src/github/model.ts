export class GitHubUser {
    private img: string;
    private readonly bio: string;

    constructor({avatar_url: img = '', bio = 'Cannot get a biography.'} = {}) {
        [this.img, this.bio] = [img, bio];
    }

    toString() {
        return this.bio;
    }
}