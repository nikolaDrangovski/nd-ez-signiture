/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, ViewChild, Input, Renderer2, Output } from '@angular/core';
export class NdEzSignitureComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmQtZXotc2lnbml0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25kLWV6LXNpZ25pdHVyZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZC1lei1zaWduaXR1cmUvbmQtZXotc2lnbml0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVXJHLE1BQU07Ozs7SUFvQkosWUFBbUIsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQkFoQk4sR0FBRztzQkFDRixHQUFHOzZCQUNJLE1BQU07MkJBQ1IsQ0FBQzs2QkFDTixJQUFJLFlBQVksRUFBRTsyQkFLNUIsS0FBSzsyQkFDVCxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzswQkFDakM7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUUwQzs7OztJQUUzQyxRQUFRO0tBRVA7Ozs7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtB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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgSW5wdXQsIFJlbmRlcmVyMiwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25kLWV6LXNpZ25pdHVyZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz0nbmQtY29udGFpbmVyJyAjbmRDb250YWluZXI+XG4gICAgPGNhbnZhcyBjbGFzcz0nbmQtY2FudmFzJyAobW91c2Vkb3duKT0nbW91c2VEb3duKCRldmVudCknIChtb3VzZW1vdmUpPSdtb3VzZU1vdmUoJGV2ZW50KScgKG1vdXNldXApPSdtb3VzZVVwKCRldmVudCknIChtb3VzZW91dCk9J21vdXNlTGVhdmUoKScgI25kY2FudmFzPjwvY2FudmFzPlxuICAgIDxzcGFuIChjbGljayk9XCJuZENsZWFyQ2FudmFzKClcIiBjbGFzcz1cImNsb3NlIHdhcnBcIj48L3NwYW4+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLm5kLWNhbnZhc3tib3JkZXI6MXB4IHNvbGlkICMwMDB9Lm5kLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0ubmQtY2FuY2VsLWJ1dHRvbnt0b3A6MnB4O3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGV9LmNsb3Nle2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjoxcHggc29saWQgIzAwMDt0b3A6MnB4O3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGV9LmNsb3NlOmhvdmVyOjphZnRlciwuY2xvc2U6aG92ZXI6OmJlZm9yZXtiYWNrZ3JvdW5kOnJlZH0uY2xvc2U6OmFmdGVyLC5jbG9zZTo6YmVmb3Jle2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt3aWR0aDoxMDAlO3RvcDo1MCU7bGVmdDowO21hcmdpbi10b3A6LTFweDtiYWNrZ3JvdW5kOiMwMDB9LmNsb3NlOjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uY2xvc2U6OmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZEV6U2lnbml0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbmRjYW52YXMnKSBwdWJsaWMgY2FudmFzO1xuICBAVmlld0NoaWxkKCduZENvbnRhaW5lcicpIHB1YmxpYyBuZENvbnRhaW5lcjtcblxuICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDIwMDtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyID0gMjAwO1xuICBASW5wdXQoKSBwdWJsaWMgbmRTdHJva2VDb2xvcjogc3RyaW5nID0gJyMwMDAnO1xuICBASW5wdXQoKSBwdWJsaWMgbmRMaW5lV2lkdGg6IG51bWJlciA9IDM7XG4gIEBPdXRwdXQoKSBwdWJsaWMgZGF0YVNpZ25pdHVyZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYW52YXNFbGVtZW50OiBhbnk7XG4gIGxhc3RYOiBudW1iZXI7XG4gIGxhc3RZOiBudW1iZXI7XG4gIG1vdXNlSXNEb3duOiBib29sZWFuID0gZmFsc2U7XG4gIGJsYW5rQ2FudmFzOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgZGF0YVJldHVybjogYW55ID0ge1xuICAgIGlzRW1wdHlDYW52YXM6IHRydWUsXG4gICAgaW1hZ2U6IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYW52YXNFbGVtZW50ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNhbnZhc0VsZW1lbnQsICd3aWR0aCcsIHRoaXMud2lkdGggKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNhbnZhc0VsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMubmRDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgJ3dpZHRoOicgKyB0aGlzLndpZHRoICsgJ3B4Jyk7XG4gICAgdGhpcy5ibGFua0NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmJsYW5rQ2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcblxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTaWduaXR1cmUuZW1pdCh0aGlzLmRhdGFSZXR1cm4pO1xuICB9XG4gIG1vdXNlVXAoZXYpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gZmFsc2U7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBtb3VzZURvd24oZXYpIHtcbiAgICB0aGlzLm1vdXNlSXNEb3duID0gdHJ1ZTtcbiAgICB0aGlzLmxhc3RYID0gZXYubGF5ZXJYO1xuICAgIHRoaXMubGFzdFkgPSBldi5sYXllclk7XG4gIH1cbiAgbW91c2VNb3ZlKGV2KSB7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKHRoaXMubW91c2VJc0Rvd24pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odGhpcy5sYXN0WCwgdGhpcy5sYXN0WSk7XG4gICAgICBjdHgubGluZVRvKGV2LmxheWVyWCwgZXYubGF5ZXJZKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMubmRTdHJva2VDb2xvcjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLm5kTGluZVdpZHRoO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgdGhpcy5sYXN0WCA9IGV2LmxheWVyWDtcbiAgICAgIHRoaXMubGFzdFkgPSBldi5sYXllclk7XG4gICAgfVxuICB9XG4gIG1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuICAgIHRoaXMubmRHZXREYXRhU2lnbml0dXJlKCk7XG4gIH1cbiAgbmRDbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCk7XG4gICAgdGhpcy5uZEdldERhdGFTaWduaXR1cmUoKTtcbiAgfVxuICBuZEdldERhdGFTaWduaXR1cmUoKSB7XG4gICAgdGhpcy5kYXRhUmV0dXJuLmlzRW1wdHlDYW52YXMgPSB0aGlzLmNhbnZhc0VsZW1lbnQudG9EYXRhVVJMKCkgPT0gdGhpcy5ibGFua0NhbnZhcy50b0RhdGFVUkwoKTtcbiAgICB0aGlzLmRhdGFSZXR1cm4uaW1hZ2UgPSB0aGlzLmNhbnZhc0VsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5kYXRhU2lnbml0dXJlLmVtaXQodGhpcy5kYXRhUmV0dXJuKTtcbiAgfVxuXG59XG5cbiJdfQ==