import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugTrackerJHipsterSharedModule } from 'app/shared/shared.module';
import { TicketComponent } from './ticket.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketUpdateComponent } from './ticket-update.component';
import { TicketDeletePopupComponent, TicketDeleteDialogComponent } from './ticket-delete-dialog.component';
import { ticketRoute, ticketPopupRoute } from './ticket.route';

const ENTITY_STATES = [...ticketRoute, ...ticketPopupRoute];

@NgModule({
  imports: [BugTrackerJHipsterSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [TicketComponent, TicketDetailComponent, TicketUpdateComponent, TicketDeleteDialogComponent, TicketDeletePopupComponent],
  entryComponents: [TicketDeleteDialogComponent]
})
export class BugTrackerJHipsterTicketModule {}
