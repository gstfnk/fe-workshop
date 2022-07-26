import {getUser} from "../github/service";

const ME_ATTR: string = 'me';

export class AboutMe extends HTMLElement {
    static get observedAttributes(): string[] {
        return [ME_ATTR];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
        if (name === ME_ATTR && oldValue !== newValue) {
            this.render(newValue);
        }
    }

    async render(me: string): Promise<void> {
        const user = await getUser(me);
        this.innerHTML = `
        <img src="${user.img}" alt="">
        <p>${user.bio}</p>
        `;
    }
}