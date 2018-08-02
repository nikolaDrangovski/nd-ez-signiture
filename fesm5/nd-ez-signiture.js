import { Component, EventEmitter, ViewChild, Input, Renderer2, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NdEzSignitureComponent = /** @class */ (function () {
    function NdEzSignitureComponent(renderer) {
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
    NdEzSignitureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NdEzSignitureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setAttribute(this.canvasElement, 'width', this.width + 'px');
        this.renderer.setAttribute(this.canvasElement, 'height', this.height + 'px');
        this.renderer.setAttribute(this.ndContainer.nativeElement, 'style', 'width:' + this.width + 'px');
        this.blankCanvas.height = this.height;
        this.blankCanvas.width = this.width;
    };
    /**
     * @return {?}
     */
    NdEzSignitureComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.dataSigniture.emit(this.dataReturn);
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    NdEzSignitureComponent.prototype.mouseUp = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.mouseIsDown = false;
        this.ndGetDataSigniture();
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    NdEzSignitureComponent.prototype.mouseDown = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.mouseIsDown = true;
        this.lastX = ev.layerX;
        this.lastY = ev.layerY;
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    NdEzSignitureComponent.prototype.mouseMove = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        /** @type {?} */
        var ctx = this.canvasElement.getContext("2d");
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
    };
    /**
     * @return {?}
     */
    NdEzSignitureComponent.prototype.mouseLeave = /**
     * @return {?}
     */
    function () {
        this.mouseIsDown = false;
        this.ndGetDataSigniture();
    };
    /**
     * @return {?}
     */
    NdEzSignitureComponent.prototype.ndClearCanvas = /**
     * @return {?}
     */
    function () {
        this.canvasElement.getContext("2d").clearRect(0, 0, this.height, this.width);
        this.ndGetDataSigniture();
    };
    /**
     * @return {?}
     */
    NdEzSignitureComponent.prototype.ndGetDataSigniture = /**
     * @return {?}
     */
    function () {
        this.dataReturn.isEmptyCanvas = this.canvasElement.toDataURL() == this.blankCanvas.toDataURL();
        this.dataReturn.image = this.canvasElement.toDataURL();
        this.dataSigniture.emit(this.dataReturn);
    };
    NdEzSignitureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nd-ez-signiture',
                    template: "<div class='nd-container' #ndContainer>\n    <canvas class='nd-canvas' (mousedown)='mouseDown($event)' (mousemove)='mouseMove($event)' (mouseup)='mouseUp($event)' (mouseout)='mouseLeave()' #ndcanvas></canvas>\n    <span (click)=\"ndClearCanvas()\" class=\"close warp\"></span>\n</div>",
                    styles: [".nd-canvas{border:1px solid #000}.nd-container{position:relative}.nd-cancel-button{top:2px;right:0;position:absolute}.close{cursor:pointer;display:inline-block;width:20px;height:20px;overflow:hidden;border:1px solid #000;top:2px;right:0;position:absolute}.close:hover::after,.close:hover::before{background:red}.close::after,.close::before{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#000}.close::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}"]
                },] },
    ];
    /** @nocollapse */
    NdEzSignitureComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NdEzSignitureComponent.propDecorators = {
        canvas: [{ type: ViewChild, args: ['ndcanvas',] }],
        ndContainer: [{ type: ViewChild, args: ['ndContainer',] }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        ndStrokeColor: [{ type: Input }],
        ndLineWidth: [{ type: Input }],
        dataSigniture: [{ type: Output }]
    };
    return NdEzSignitureComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NdEzSignitureModule = /** @class */ (function () {
    function NdEzSignitureModule() {
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
    return NdEzSignitureModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NdEzSignitureModule, NdEzSignitureComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmQtZXotc2lnbml0dXJlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZC1lei1zaWduaXR1cmUvc3JjL2FwcC9tb2R1bGVzL25kLWV6LXNpZ25pdHVyZS9uZC1lei1zaWduaXR1cmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZC1lei1zaWduaXR1cmUvc3JjL2FwcC9tb2R1bGVzL25kLWV6LXNpZ25pdHVyZS9uZC1lei1zaWduaXR1cmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgSW5wdXQsIFJlbmRlcmVyMiwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25kLWV6LXNpZ25pdHVyZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nbmQtY29udGFpbmVyJyAjbmRDb250YWluZXI+XG4gICAgPGNhbnZhcyBjbGFzcz0nbmQtY2FudmFzJyAobW91c2Vkb3duKT0nbW91c2VEb3duKCRldmVudCknIChtb3VzZW1vdmUpPSdtb3VzZU1vdmUoJGV2ZW50KScgKG1vdXNldXApPSdtb3VzZVVwKCRldmVudCknIChtb3VzZW91dCk9J21vdXNlTGVhdmUoKScgI25kY2FudmFzPjwvY2FudmFzPlxuICAgIDxzcGFuIChjbGljayk9XCJuZENsZWFyQ2FudmFzKClcIiBjbGFzcz1cImNsb3NlIHdhcnBcIj48L3NwYW4+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm5kLWNhbnZhc3tib3JkZXI6MXB4IHNvbGlkICMwMDB9Lm5kLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0ubmQtY2FuY2VsLWJ1dHRvbnt0b3A6MnB4O3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGV9LmNsb3Nle2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjoxcHggc29saWQgIzAwMDt0b3A6MnB4O3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGV9LmNsb3NlOmhvdmVyOjphZnRlciwuY2xvc2U6aG92ZXI6OmJlZm9yZXtiYWNrZ3JvdW5kOnJlZH0uY2xvc2U6OmFmdGVyLC5jbG9zZTo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMDAlO3RvcDo1MCU7bGVmdDowO21hcmdpbi10b3A6LTFweDtiYWNrZ3JvdW5kOiMwMDB9LmNsb3NlOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uY2xvc2U6OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZEV6U2lnbml0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbmRjYW52YXMnKSBwdWJsaWMgY2FudmFzO1xuICBAVmlld0NoaWxkKCduZENvbnRhaW5lcicpIHB1YmxpYyBuZENvbnRhaW5lcjtcblxuICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDIwMDtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyID0gMjAwO1xuICBASW5wdXQoKSBwdWJsaWMgbmRTdHJva2VDb2xvcjogc3RyaW5nID0gJyMwMDAnO1xuICBASW5wdXQoKSBwdWJsaWMgbmRMaW5lV2lkdGg6IG51bWJlciA9IDM7XG4gIEBPdXRwdXQoKSBwdWJsaWMgZGF0YVNpZ25pdHVyZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYW52YXNFbGVtZW50OiBhbnk7XG4gIGxhc3RYOiBudW1iZXI7XG4gIGxhc3RZOiBudW1iZXI7XG4gIG1vdXNlSXNEb3duOiBib29sZWFuID0gZmFsc2U7XG4gIGJsYW5rQ2FudmFzOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgZGF0YVJldHVybjogYW55ID0ge1xuICAgIGlzRW1wdHlDYW52YXM6IHRydWUsXG4gICAgaW1hZ2U6IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYW52YXNFbGVtZW50ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNhbnZhc0VsZW1lbnQsICd3aWR0aCcsIHRoaXMud2lkdGggKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNhbnZhc0VsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubmRDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgJ3dpZHRoOicgKyB0aGlzLndpZHRoICsgJ3B4Jyk7XG4gICAgdGhpcy5ibGFua0NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmJsYW5rQ2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcblxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTaWduaXR1cmUuZW1pdCh0aGlzLmRhdGFSZXR1cm4pO1xuICB9XG4gIG1vdXNlVXAoZXYpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBtb3VzZURvd24oZXYpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gdHJ1ZTtcbiAgICB0aGlzLmxhc3RYID0gZXYubGF5ZXJYO1xuICAgIHRoaXMubGFzdFkgPSBldi5sYXllclk7XG4gIH1cbiAgbW91c2VNb3ZlKGV2KSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKHRoaXMubW91c2VJc0Rvd24pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5sYXN0WCwgdGhpcy5sYXN0WSk7XG4gICAgICBjdHgubGluZVRvKGV2LmxheWVyWCwgZXYubGF5ZXJZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMubmRTdHJva2VDb2xvcjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLm5kTGluZVdpZHRoO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgdGhpcy5sYXN0WCA9IGV2LmxheWVyWDtcbiAgICAgIHRoaXMubGFzdFkgPSBldi5sYXllclk7XG4gICAgfVxuICB9XG4gIG1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuICAgIHRoaXMubmRHZXREYXRhU2lnbml0dXJlKCk7XG4gIH1cbiAgbmRDbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBuZEdldERhdGFTaWduaXR1cmUoKSB7XG4gICAgdGhpcy5kYXRhUmV0dXJuLmlzRW1wdHlDYW52YXMgPSB0aGlzLmNhbnZhc0VsZW1lbnQudG9EYXRhVVJMKCkgPT0gdGhpcy5ibGFua0NhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB0aGlzLmRhdGFSZXR1cm4uaW1hZ2UgPSB0aGlzLmNhbnZhc0VsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5kYXRhU2lnbml0dXJlLmVtaXQodGhpcy5kYXRhUmV0dXJuKTtcbiAgfVxuXG59XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmRFelNpZ25pdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vbmQtZXotc2lnbml0dXJlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTmRFelNpZ25pdHVyZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZEV6U2lnbml0dXJlQ29tcG9uZW50IFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5kRXpTaWduaXR1cmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBOEJFLGdDQUFtQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3FCQWhCTixHQUFHO3NCQUNGLEdBQUc7NkJBQ0ksTUFBTTsyQkFDUixDQUFDOzZCQUNOLElBQUksWUFBWSxFQUFFOzJCQUs1QixLQUFLOzJCQUNULFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzBCQUNqQztZQUNoQixhQUFhLEVBQUUsSUFBSTtZQUNuQixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBRTBDOzs7O0lBRTNDLHlDQUFROzs7SUFBUjtLQUVDOzs7O0lBQ00sZ0RBQWU7Ozs7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFB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