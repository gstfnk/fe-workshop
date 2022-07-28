import * as React from 'react';
import {GitHubRepo} from "./model";

export function RepoTableRow({name, stars, url}: GitHubRepo) {
    return (
        <tr>
            <td>{name}</td>
            <td>{stars > 0 ? `${stars} ⭐` : '-'}</td>
            <td><a href={url}>Link</a></td>
        </tr>
    );
}