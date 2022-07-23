import {user} from './user';

export class AboutMe extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <img src="${user.avatar_url}" alt="">
        <p>${user.bio}</p>
        `;
    }
}