import { Component, EventEmitter, ViewChild, Input, Renderer2, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NdEzSignitureComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.width = 200;
        this.height = 200;
        this.ndStrokeColor = '#000';
        this.ndLineWidth = 3;
        this.dataSigniture = new EventEmitter();
        this.mouseIsDown = false;
        this.blankCanvas = document.createElement('canvas');
        this.dataReturn = {
            isEmptyCanvas: true,
            image: null
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setAttribute(this.canvasElement, 'width', this.width + 'px');
        this.renderer.setAttribute(this.canvasElement, 'height', this.height + 'px');
        this.renderer.setAttribute(this.ndContainer.nativeElement, 'style', 'width:' + this.width + 'px');
        this.blankCanvas.height = this.height;
        this.blankCanvas.width = this.width;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.dataSigniture.emit(this.dataReturn);
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    mouseUp(ev) {
        this.mouseIsDown = false;
        this.ndGetDataSigniture();
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    mouseDown(ev) {
        this.mouseIsDown = true;
        this.lastX = ev.layerX;
        this.lastY = ev.layerY;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    mouseMove(ev) {
        /** @type {?} */
        let ctx = this.canvasElement.getContext("2d");
        if (this.mouseIsDown) {
            ctx.beginPath();
            ctx.moveTo(this.lastX, this.lastY);
            ctx.lineTo(ev.layerX, ev.layerY);
            ctx.closePath();
            ctx.strokeStyle = this.ndStrokeColor;
            ctx.lineWidth = this.ndLineWidth;
            ctx.stroke();
            this.lastX = ev.layerX;
            this.lastY = ev.layerY;
        }
    }
    /**
     * @return {?}
     */
    mouseLeave() {
        this.mouseIsDown = false;
        this.ndGetDataSigniture();
    }
    /**
     * @return {?}
     */
    ndClearCanvas() {
        this.canvasElement.getContext("2d").clearRect(0, 0, this.height, this.width);
        this.ndGetDataSigniture();
    }
    /**
     * @return {?}
     */
    ndGetDataSigniture() {
        this.dataReturn.isEmptyCanvas = this.canvasElement.toDataURL() == this.blankCanvas.toDataURL();
        this.dataReturn.image = this.canvasElement.toDataURL();
        this.dataSigniture.emit(this.dataReturn);
    }
}
NdEzSignitureComponent.decorators = [
    { type: Component, args: [{
                selector: 'nd-ez-signiture',
                template: `<div class='nd-container' #ndContainer>
    <canvas class='nd-canvas' (mousedown)='mouseDown($event)' (mousemove)='mouseMove($event)' (mouseup)='mouseUp($event)' (mouseout)='mouseLeave()' #ndcanvas></canvas>
    <span (click)="ndClearCanvas()" class="close warp"></span>
</div>`,
                styles: [`.nd-canvas{border:1px solid #000}.nd-container{position:relative}.nd-cancel-button{top:2px;right:0;position:absolute}.close{cursor:pointer;display:inline-block;width:20px;height:20px;overflow:hidden;border:1px solid #000;top:2px;right:0;position:absolute}.close:hover::after,.close:hover::before{background:red}.close::after,.close::before{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#000}.close::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}`]
            },] },
];
/** @nocollapse */
NdEzSignitureComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NdEzSignitureComponent.propDecorators = {
    canvas: [{ type: ViewChild, args: ['ndcanvas',] }],
    ndContainer: [{ type: ViewChild, args: ['ndContainer',] }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    ndStrokeColor: [{ type: Input }],
    ndLineWidth: [{ type: Input }],
    dataSigniture: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NdEzSignitureModule {
}
NdEzSignitureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NdEzSignitureComponent],
                exports: [
                    NdEzSignitureComponent
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NdEzSignitureModule, NdEzSignitureComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmQtZXotc2lnbml0dXJlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZC1lei1zaWduaXR1cmUvc3JjL2FwcC9tb2R1bGVzL25kLWV6LXNpZ25pdHVyZS9uZC1lei1zaWduaXR1cmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZC1lei1zaWduaXR1cmUvc3JjL2FwcC9tb2R1bGVzL25kLWV6LXNpZ25pdHVyZS9uZC1lei1zaWduaXR1cmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgSW5wdXQsIFJlbmRlcmVyMiwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25kLWV6LXNpZ25pdHVyZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nbmQtY29udGFpbmVyJyAjbmRDb250YWluZXI+XG4gICAgPGNhbnZhcyBjbGFzcz0nbmQtY2FudmFzJyAobW91c2Vkb3duKT0nbW91c2VEb3duKCRldmVudCknIChtb3VzZW1vdmUpPSdtb3VzZU1vdmUoJGV2ZW50KScgKG1vdXNldXApPSdtb3VzZVVwKCRldmVudCknIChtb3VzZW91dCk9J21vdXNlTGVhdmUoKScgI25kY2FudmFzPjwvY2FudmFzPlxuICAgIDxzcGFuIChjbGljayk9XCJuZENsZWFyQ2FudmFzKClcIiBjbGFzcz1cImNsb3NlIHdhcnBcIj48L3NwYW4+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm5kLWNhbnZhc3tib3JkZXI6MXB4IHNvbGlkICMwMDB9Lm5kLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0ubmQtY2FuY2VsLWJ1dHRvbnt0b3A6MnB4O3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGV9LmNsb3Nle2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjoxcHggc29saWQgIzAwMDt0b3A6MnB4O3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGV9LmNsb3NlOmhvdmVyOjphZnRlciwuY2xvc2U6aG92ZXI6OmJlZm9yZXtiYWNrZ3JvdW5kOnJlZH0uY2xvc2U6OmFmdGVyLC5jbG9zZTo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMDAlO3RvcDo1MCU7bGVmdDowO21hcmdpbi10b3A6LTFweDtiYWNrZ3JvdW5kOiMwMDB9LmNsb3NlOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uY2xvc2U6OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZEV6U2lnbml0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbmRjYW52YXMnKSBwdWJsaWMgY2FudmFzO1xuICBAVmlld0NoaWxkKCduZENvbnRhaW5lcicpIHB1YmxpYyBuZENvbnRhaW5lcjtcblxuICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDIwMDtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyID0gMjAwO1xuICBASW5wdXQoKSBwdWJsaWMgbmRTdHJva2VDb2xvcjogc3RyaW5nID0gJyMwMDAnO1xuICBASW5wdXQoKSBwdWJsaWMgbmRMaW5lV2lkdGg6IG51bWJlciA9IDM7XG4gIEBPdXRwdXQoKSBwdWJsaWMgZGF0YVNpZ25pdHVyZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYW52YXNFbGVtZW50OiBhbnk7XG4gIGxhc3RYOiBudW1iZXI7XG4gIGxhc3RZOiBudW1iZXI7XG4gIG1vdXNlSXNEb3duOiBib29sZWFuID0gZmFsc2U7XG4gIGJsYW5rQ2FudmFzOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgZGF0YVJldHVybjogYW55ID0ge1xuICAgIGlzRW1wdHlDYW52YXM6IHRydWUsXG4gICAgaW1hZ2U6IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYW52YXNFbGVtZW50ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNhbnZhc0VsZW1lbnQsICd3aWR0aCcsIHRoaXMud2lkdGggKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNhbnZhc0VsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubmRDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgJ3dpZHRoOicgKyB0aGlzLndpZHRoICsgJ3B4Jyk7XG4gICAgdGhpcy5ibGFua0NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmJsYW5rQ2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcblxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTaWduaXR1cmUuZW1pdCh0aGlzLmRhdGFSZXR1cm4pO1xuICB9XG4gIG1vdXNlVXAoZXYpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBtb3VzZURvd24oZXYpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gdHJ1ZTtcbiAgICB0aGlzLmxhc3RYID0gZXYubGF5ZXJYO1xuICAgIHRoaXMubGFzdFkgPSBldi5sYXllclk7XG4gIH1cbiAgbW91c2VNb3ZlKGV2KSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKHRoaXMubW91c2VJc0Rvd24pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5sYXN0WCwgdGhpcy5sYXN0WSk7XG4gICAgICBjdHgubGluZVRvKGV2LmxheWVyWCwgZXYubGF5ZXJZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMubmRTdHJva2VDb2xvcjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLm5kTGluZVdpZHRoO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgdGhpcy5sYXN0WCA9IGV2LmxheWVyWDtcbiAgICAgIHRoaXMubGFzdFkgPSBldi5sYXllclk7XG4gICAgfVxuICB9XG4gIG1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuICAgIHRoaXMubmRHZXREYXRhU2lnbml0dXJlKCk7XG4gIH1cbiAgbmRDbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBuZEdldERhdGFTaWduaXR1cmUoKSB7XG4gICAgdGhpcy5kYXRhUmV0dXJuLmlzRW1wdHlDYW52YXMgPSB0aGlzLmNhbnZhc0VsZW1lbnQudG9EYXRhVVJMKCkgPT0gdGhpcy5ibGFua0NhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB0aGlzLmRhdGFSZXR1cm4uaW1hZ2UgPSB0aGlzLmNhbnZhc0VsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5kYXRhU2lnbml0dXJlLmVtaXQodGhpcy5kYXRhUmV0dXJuKTtcbiAgfVxuXG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmRFelNpZ25pdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vbmQtZXotc2lnbml0dXJlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmRFelNpZ25pdHVyZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZEV6U2lnbml0dXJlQ29tcG9uZW50IFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5kRXpTaWduaXR1cmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBOEJFLFlBQW1CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7cUJBaEJOLEdBQUc7c0JBQ0YsR0FBRzs2QkFDSSxNQUFNOzJCQUNSLENBQUM7NkJBQ04sSUFBSSxZQUFZLEVBQUU7MkJBSzVCLEtBQUs7MkJBQ1QsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7MEJBQ2pDO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FFMEM7Ozs7SUFFM0MsUUFBUTtLQUVQOzs7O0lBQ00sZUFBZTtRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7OztJQUd0QyxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzFDOzs7OztJQUNELE9BQU8sQ0FBQyxFQUFFO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7Ozs7O0lBQ0QsU0FBUyxDQUFDLEVBQUU7UUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0tBQ3hCOzs7OztJQUNELFNBQVMsQ0FBQyxFQUFFOztRQUNWLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDckMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDeEI7S0FDRjs7OztJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUNELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDMUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7T0FHTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyx1a0JBQXVrQixDQUFDO2FBQ2xsQjs7OztZQVQyRCxTQUFTOzs7cUJBV2xFLFNBQVMsU0FBQyxVQUFVOzBCQUNwQixTQUFTLFNBQUMsYUFBYTtvQkFFdkIsS0FBSztxQkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxNQUFNOzs7Ozs7O0FDbEJUOzs7WUFJQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7aUJBQ3ZCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7OzsifQ==