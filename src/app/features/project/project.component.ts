import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  isLoading = true;

  constructor(
    public githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.githubService.getRepos().subscribe((d) => {
      this.githubService.repos = d;
      this.isLoading = false;
    }, (err) => {
      alert("Error: "+err);
    });
  }

}
