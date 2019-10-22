import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager } from 'ng-jhipster';

import { IProject } from 'app/shared/model/project.model';
import { AccountService } from 'app/core/auth/account.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'jhi-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit, OnDestroy {
  projects: IProject[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected projectService: ProjectService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.projectService
      .query()
      .pipe(
        filter((res: HttpResponse<IProject[]>) => res.ok),
        map((res: HttpResponse<IProject[]>) => res.body)
      )
      .subscribe((res: IProject[]) => {
        this.projects = res;
      });
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
    });
    this.registerChangeInProjects();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IProject) {
    return item.id;
  }

  registerChangeInProjects() {
    this.eventSubscriber = this.eventManager.subscribe('projectListModification', response => this.loadAll());
  }
}
