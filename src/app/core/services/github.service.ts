import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GithubService {
  repos: any;

  constructor(private httpClient: HttpClient) {}

  getRepos() {
    return this.httpClient.get(
      'https://api.github.com/users/filippo-brigati/repos'
    );
  }
}
