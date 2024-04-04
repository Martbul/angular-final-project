import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCustomFor][appCustomForOf]'
})
export class AppsLoopDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input()
  set appCustomForOf(collection: any[]) {
    this.viewContainer.clear();
    collection.forEach((item, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index
      });
    });
  }
}
