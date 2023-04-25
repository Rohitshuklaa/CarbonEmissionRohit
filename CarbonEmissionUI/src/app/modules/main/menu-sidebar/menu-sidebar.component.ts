import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';




const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})

export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        head: 'Monitoring',
        name: 'Dashboard',
        iconClasses: 'fas fa-table',
        path: ['/']
    },
    {
        name: 'Tracking',
        iconClasses: 'fas fa-star',
        path: ['/blank']
    },
    {
        name: 'Report',
        iconClasses: 'fas fa-folder',        
       
},
{
    head: 'Reporting',
    name: 'BRSR',
    iconClasses: 'fas fa-table',
    path: ['/'],
    children: [
        {
            name: 'Section-A',
            iconClasses: 'far fa-address-book',
            path: ['/sub-menu-1']
        },
        {
            name: 'Section-B',
            iconClasses: 'fas fa-file',
            path: ['/sub-menu-2']
        },
        {
            name: 'Section-C',
            iconClasses: 'fas fa-file',
            path: ['/sub-menu-3']
        }
    ]
},

{
    head: 'Admin Setting',
    name: 'Company Profile',
    iconClasses: 'fas fa-eye',
    path: ['']
},
{
    name: 'Location',
    iconClasses: 'fas fa-search-location',
    path: ['']
    
    
},
{
    name: 'User',
    iconClasses: 'fas fa-folder', 
    path: ['']
           
    
   
},
{
    name: 'Billing',
    iconClasses: 'fas fa-folder',
    path: ['']
            
 
   
},


   
];
