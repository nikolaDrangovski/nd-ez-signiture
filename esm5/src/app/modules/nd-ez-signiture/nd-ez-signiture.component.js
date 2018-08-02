/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, ViewChild, Input, Renderer2, Output } from '@angular/core';
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
export { NdEzSignitureComponent };
function NdEzSignitureComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NdEzSignitureComponent.prototype.canvas;
    /** @type {?} */
    NdEzSignitureComponent.prototype.ndContainer;
    /** @type {?} */
    NdEzSignitureComponent.prototype.width;
    /** @type {?} */
    NdEzSignitureComponent.prototype.height;
    /** @type {?} */
    NdEzSignitureComponent.prototype.ndStrokeColor;
    /** @type {?} */
    NdEzSignitureComponent.prototype.ndLineWidth;
    /** @type {?} */
    NdEzSignitureComponent.prototype.dataSigniture;
    /** @type {?} */
    NdEzSignitureComponent.prototype.canvasElement;
    /** @type {?} */
    NdEzSignitureComponent.prototype.lastX;
    /** @type {?} */
    NdEzSignitureComponent.prototype.lastY;
    /** @type {?} */
    NdEzSignitureComponent.prototype.mouseIsDown;
    /** @type {?} */
    NdEzSignitureComponent.prototype.blankCanvas;
    /** @type {?} */
    NdEzSignitureComponent.prototype.dataReturn;
    /** @type {?} */
    NdEzSignitureComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmQtZXotc2lnbml0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25kLWV6LXNpZ25pdHVyZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZC1lei1zaWduaXR1cmUvbmQtZXotc2lnbml0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQThCbkcsZ0NBQW1CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7cUJBaEJOLEdBQUc7c0JBQ0YsR0FBRzs2QkFDSSxNQUFNOzJCQUNSLENBQUM7NkJBQ04sSUFBSSxZQUFZLEVBQUU7MkJBSzVCLEtBQUs7MkJBQ1QsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7MEJBQ2pDO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FFMEM7Ozs7SUFFM0MseUNBQVE7OztJQUFSO0tBRUM7Ozs7SUFDTSxnREFBZTs7OztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxL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S0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxNQUFNOztpQ0FsQlQ7O1NBVWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBJbnB1dCwgUmVuZGVyZXIyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmQtZXotc2lnbml0dXJlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPSduZC1jb250YWluZXInICNuZENvbnRhaW5lcj5cbiAgICA8Y2FudmFzIGNsYXNzPSduZC1jYW52YXMnIChtb3VzZWRvd24pPSdtb3VzZURvd24oJGV2ZW50KScgKG1vdXNlbW92ZSk9J21vdXNlTW92ZSgkZXZlbnQpJyAobW91c2V1cCk9J21vdXNlVXAoJGV2ZW50KScgKG1vdXNlb3V0KT0nbW91c2VMZWF2ZSgpJyAjbmRjYW52YXM+PC9jYW52YXM+XG4gICAgPHNwYW4gKGNsaWNrKT1cIm5kQ2xlYXJDYW52YXMoKVwiIGNsYXNzPVwiY2xvc2Ugd2FycFwiPjwvc3Bhbj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AubmQtY2FudmFze2JvcmRlcjoxcHggc29saWQgIzAwMH0ubmQtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfS5uZC1jYW5jZWwtYnV0dG9ue3RvcDoycHg7cmlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZX0uY2xvc2V7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjFweCBzb2xpZCAjMDAwO3RvcDoycHg7cmlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZX0uY2xvc2U6aG92ZXI6OmFmdGVyLC5jbG9zZTpob3Zlcjo6YmVmb3Jle2JhY2tncm91bmQ6cmVkfS5jbG9zZTo6YWZ0ZXIsLmNsb3NlOjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3dpZHRoOjEwMCU7dG9wOjUwJTtsZWZ0OjA7bWFyZ2luLXRvcDotMXB4O2JhY2tncm91bmQ6IzAwMH0uY2xvc2U6OmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5jbG9zZTo6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfWBdXG59KVxuZXhwb3J0IGNsYXNzIE5kRXpTaWduaXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCduZGNhbnZhcycpIHB1YmxpYyBjYW52YXM7XG4gIEBWaWV3Q2hpbGQoJ25kQ29udGFpbmVyJykgcHVibGljIG5kQ29udGFpbmVyO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMjAwO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAyMDA7XG4gIEBJbnB1dCgpIHB1YmxpYyBuZFN0cm9rZUNvbG9yOiBzdHJpbmcgPSAnIzAwMCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBuZExpbmVXaWR0aDogbnVtYmVyID0gMztcbiAgQE91dHB1dCgpIHB1YmxpYyBkYXRhU2lnbml0dXJlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNhbnZhc0VsZW1lbnQ6IGFueTtcbiAgbGFzdFg6IG51bWJlcjtcbiAgbGFzdFk6IG51bWJlcjtcbiAgbW91c2VJc0Rvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgYmxhbmtDYW52YXM6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBkYXRhUmV0dXJuOiBhbnkgPSB7XG4gICAgaXNFbXB0eUNhbnZhczogdHJ1ZSxcbiAgICBpbWFnZTogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY2FudmFzRWxlbWVudCwgJ3dpZHRoJywgdGhpcy53aWR0aCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY2FudmFzRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uZENvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCAnd2lkdGg6JyArIHRoaXMud2lkdGggKyAncHgnKTtcbiAgICB0aGlzLmJsYW5rQ2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMuYmxhbmtDYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuXG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZGF0YVNpZ25pdHVyZS5lbWl0KHRoaXMuZGF0YVJldHVybik7XG4gIH1cbiAgbW91c2VVcChldikge1xuICAgIHRoaXMubW91c2VJc0Rvd24gPSBmYWxzZTtcbiAgICB0aGlzLm5kR2V0RGF0YVNpZ25pdHVyZSgpO1xuICB9XG4gIG1vdXNlRG93bihldikge1xuICAgIHRoaXMubW91c2VJc0Rvd24gPSB0cnVlO1xuICAgIHRoaXMubGFzdFggPSBldi5sYXllclg7XG4gICAgdGhpcy5sYXN0WSA9IGV2LmxheWVyWTtcbiAgfVxuICBtb3VzZU1vdmUoZXYpIHtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAodGhpcy5tb3VzZUlzRG93bikge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0aGlzLmxhc3RYLCB0aGlzLmxhc3RZKTtcbiAgICAgIGN0eC5saW5lVG8oZXYubGF5ZXJYLCBldi5sYXllclkpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5uZFN0cm9rZUNvbG9yO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubmRMaW5lV2lkdGg7XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICB0aGlzLmxhc3RYID0gZXYubGF5ZXJYO1xuICAgICAgdGhpcy5sYXN0WSA9IGV2LmxheWVyWTtcbiAgICB9XG4gIH1cbiAgbW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBuZENsZWFyQ2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIikuY2xlYXJSZWN0KDAsIDAsIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKTtcbiAgICB0aGlzLm5kR2V0RGF0YVNpZ25pdHVyZSgpO1xuICB9XG4gIG5kR2V0RGF0YVNpZ25pdHVyZSgpIHtcbiAgICB0aGlzLmRhdGFSZXR1cm4uaXNFbXB0eUNhbnZhcyA9IHRoaXMuY2FudmFzRWxlbWVudC50b0RhdGFVUkwoKSA9PSB0aGlzLmJsYW5rQ2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIHRoaXMuZGF0YVJldHVybi5pbWFnZSA9IHRoaXMuY2FudmFzRWxlbWVudC50b0RhdGFVUkwoKTtcbiAgICB0aGlzLmRhdGFTaWduaXR1cmUuZW1pdCh0aGlzLmRhdGFSZXR1cm4pO1xuICB9XG5cbn1cblxuIl19