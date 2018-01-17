import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user';
import * as fromRoot from './reducers';
import * as fromSidenav from './actions/sidenav';
import * as fromUser from './actions/user';
import 'rxjs/add/observable/fromEvent';
import { tap, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sidenav$: Observable<boolean>;
  users$: Observable<any>;
  selectedUser$: Observable<any>;
  @ViewChild('search') search: ElementRef;
  searchResult$: Observable<User[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {

    // this.sidenav$ = this.store.select(fromRoot.getSidenavState);
    // setTimeout(() => this.store.dispatch(new fromSidenav.SidenavOpenAction()), 1000);
    // setTimeout(() => this.store.dispatch(new fromSidenav.SidenavCloseAction()), 2000);

    this.users$ = this.store.select(fromRoot.getUserEntities);
    this.selectedUser$ = this.store.select(fromRoot.getSelectedUserId);

    const u1: User = { id: 1, name: 'bob', age: 15 };
    const u2: User = { id: 2, name: 'marco', age: 24 };
    const u3: User = { id: 3, name: 'jack', age: 36 };

    setTimeout(() => this.store.dispatch(new fromUser.UserAddAction(u1)), 1000);
    setTimeout(() => this.store.dispatch(new fromUser.UserAddAction(u2)), 1100);
    setTimeout(() => this.store.dispatch(new fromUser.UserAddAction(u3)), 1200);
    setTimeout(() => this.store.dispatch(new fromUser.UserSelectAction(2)), 1300);
    // setTimeout(() => this.store.dispatch(new fromUser.UserDeleteAction(1)), 2000);

    Observable
      .fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
      map((e: any) => e.target.value),
      debounceTime(300),
      distinctUntilChanged(),
      tap(e => console.log(e))
      )
      .subscribe((e: string) =>
        this.store.dispatch(new fromUser.UserSearchAction(e)));

    this.searchResult$ = this.store.select(fromRoot.getSearchResult);

    setTimeout(() => this.store.dispatch(new fromSidenav.SidenavCloseAction()), 2000);

  }




}
