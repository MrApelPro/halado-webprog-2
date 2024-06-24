
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { AnimateModule } from 'primeng/animate';
import { TreeTableModule } from 'primeng/treetable';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeModule } from 'primeng/tree';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { TimelineModule } from 'primeng/timeline';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TerminalModule } from 'primeng/terminal';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { SpinnerModule } from 'primeng/spinner';
import { SpeedDialModule } from 'primeng/speeddial';
import { SliderModule } from 'primeng/slider';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SkeletonModule } from 'primeng/skeleton';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollerModule } from 'primeng/scroller';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PickListModule } from 'primeng/picklist';
import { PasswordModule } from 'primeng/password';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { ListboxModule } from 'primeng/listbox';
import { KnobModule } from 'primeng/knob';
import { ImageModule } from 'primeng/image';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { InplaceModule } from 'primeng/inplace';
import { GalleriaModule } from 'primeng/galleria';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { EditorModule } from 'primeng/editor';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { DragDropModule } from 'primeng/dragdrop';
import { DockModule } from 'primeng/dock';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BadgeModule } from 'primeng/badge';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { EventCreateComponent } from './app/event-create/event-create.component';
import { EventDetailsComponent } from './app/event-details/event-details.component';
import { EventListComponent } from './app/event-list/event-list.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { withInterceptorsFromDi, provideHttpClient, HttpRequest, HttpHandlerFn, HttpEvent, withInterceptors, HttpResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { EventService } from './app/event.service';
import { RequestService } from './app/request.service';
import { InMemoryEventService } from './app/in-memory-event.service';
import { Observable, finalize, tap } from 'rxjs';
import { loggingInterceptor } from './app/http-interceptors/logging.interceptor';
import { AuthService } from './app/auth.service';
import { EventNameValidator } from './app/validators/event-name.validator';
import { authInterceptor } from './app/http-interceptors/auth.interceptor';
import { matchAuthGuardFunction } from './app/auth/auth.guard';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(
        withInterceptors([loggingInterceptor, authInterceptor])
      ),
        importProvidersFrom(BrowserModule, FormsModule, environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forRoot(InMemoryEventService) : [], ReactiveFormsModule, AvatarModule, AvatarGroupModule, AccordionModule, AutoCompleteModule, BadgeModule, BreadcrumbModule, BlockUIModule, ButtonModule, CalendarModule, CarouselModule, CascadeSelectModule, ChartModule, CheckboxModule, ChipsModule, ChipModule, ColorPickerModule, ConfirmDialogModule, ConfirmPopupModule, ContextMenuModule, VirtualScrollerModule, DataViewModule, DialogModule, DividerModule, DockModule, DragDropModule, DropdownModule, DynamicDialogModule, EditorModule, FieldsetModule, FileUploadModule, GalleriaModule, InplaceModule, InputMaskModule, InputSwitchModule, InputTextModule, InputTextareaModule, InputNumberModule, InputGroupModule, InputGroupAddonModule, ImageModule, KnobModule, ListboxModule, MegaMenuModule, MenuModule, MenubarModule, MessageModule, MessagesModule, MultiSelectModule, OrganizationChartModule, OrderListModule, OverlayPanelModule, PaginatorModule, PanelModule, PanelMenuModule, PasswordModule, PickListModule, ProgressSpinnerModule, ProgressBarModule, RadioButtonModule, RatingModule, SelectButtonModule, SidebarModule, ScrollerModule, ScrollPanelModule, ScrollTopModule, SkeletonModule, SlideMenuModule, SliderModule, SpeedDialModule, SpinnerModule, SplitterModule, SplitButtonModule, StepsModule, TableModule, TabMenuModule, TabViewModule, TagModule, TerminalModule, TieredMenuModule, TimelineModule, ToastModule, ToggleButtonModule, ToolbarModule, TooltipModule, TriStateCheckboxModule, TreeModule, TreeSelectModule, TreeTableModule, AnimateModule, CardModule, RippleModule, StyleClassModule),
        InMemoryEventService,
        RequestService,
        EventService,
        EventNameValidator,
        AuthService,
        provideAnimations(),
        provideRouter([
             {path: 'events', loadChildren: () => import('./app/events/routes').then(mod => mod.EVENT_ROUTES), canMatch: [matchAuthGuardFunction]},
            { path: '', redirectTo: '', pathMatch: 'full' },
        ])
    ]
})
  .catch(err => console.error(err));
