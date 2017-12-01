import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import { ScreenService } from '../services/screen.servive';
import { Subscription } from 'rxjs/Subscription';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[screenBelowLarge]'})
// tslint:disable-next-line:directive-class-suffix
export class ScreenBelowLarge implements OnDestroy {
    
    private hasView = false;
    private screenSubscription: Subscription;
    constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenService: ScreenService) {
                    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
                }

    @Input()
    set screenLarge(condition){
        condition = this.screenService.screenWidth < this.screenService.largeBreakPoint;
        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }

    }
    ngOnDestroy(): void {
        this.screenSubscription.unsubscribe();
    }
    onResize() {
        this.screenLarge = false;
    }
}
