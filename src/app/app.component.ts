import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [RouterOutlet, MenubarModule]
})
export class AppComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
        this.items = [
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                routerLink: 'events'
            },
            {
                label: 'Home',
                icon: 'pi pi-fw pi-power-off',
                routerLink: '/'
            }
        ];
    }

}