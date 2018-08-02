(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('nd-ez-signiture', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['nd-ez-signiture'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NdEzSignitureComponent = (function () {
        function NdEzSignitureComponent(renderer) {
            this.renderer = renderer;
            this.width = 200;
            this.height = 200;
            this.ndStrokeColor = '#000';
            this.ndLineWidth = 3;
            this.dataSigniture = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'nd-ez-signiture',
                        template: "<div class='nd-container' #ndContainer>\n    <canvas class='nd-canvas' (mousedown)='mouseDown($event)' (mousemove)='mouseMove($event)' (mouseup)='mouseUp($event)' (mouseout)='mouseLeave()' #ndcanvas></canvas>\n    <span (click)=\"ndClearCanvas()\" class=\"close warp\"></span>\n</div>",
                        styles: [".nd-canvas{border:1px solid #000}.nd-container{position:relative}.nd-cancel-button{top:2px;right:0;position:absolute}.close{cursor:pointer;display:inline-block;width:20px;height:20px;overflow:hidden;border:1px solid #000;top:2px;right:0;position:absolute}.close:hover::after,.close:hover::before{background:red}.close::after,.close::before{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#000}.close::before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}"]
                    },] },
        ];
        /** @nocollapse */
        NdEzSignitureComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 }
            ];
        };
        NdEzSignitureComponent.propDecorators = {
            canvas: [{ type: core.ViewChild, args: ['ndcanvas',] }],
            ndContainer: [{ type: core.ViewChild, args: ['ndContainer',] }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            ndStrokeColor: [{ type: core.Input }],
            ndLineWidth: [{ type: core.Input }],
            dataSigniture: [{ type: core.Output }]
        };
        return NdEzSignitureComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NdEzSignitureModule = (function () {
        function NdEzSignitureModule() {
        }
        NdEzSignitureModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.NdEzSignitureModule = NdEzSignitureModule;
    exports.ɵa = NdEzSignitureComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmQtZXotc2lnbml0dXJlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmQtZXotc2lnbml0dXJlL3NyYy9hcHAvbW9kdWxlcy9uZC1lei1zaWduaXR1cmUvbmQtZXotc2lnbml0dXJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmQtZXotc2lnbml0dXJlL3NyYy9hcHAvbW9kdWxlcy9uZC1lei1zaWduaXR1cmUvbmQtZXotc2lnbml0dXJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIElucHV0LCBSZW5kZXJlcjIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZC1lei1zaWduaXR1cmUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9J25kLWNvbnRhaW5lcicgI25kQ29udGFpbmVyPlxuICAgIDxjYW52YXMgY2xhc3M9J25kLWNhbnZhcycgKG1vdXNlZG93bik9J21vdXNlRG93bigkZXZlbnQpJyAobW91c2Vtb3ZlKT0nbW91c2VNb3ZlKCRldmVudCknIChtb3VzZXVwKT0nbW91c2VVcCgkZXZlbnQpJyAobW91c2VvdXQpPSdtb3VzZUxlYXZlKCknICNuZGNhbnZhcz48L2NhbnZhcz5cbiAgICA8c3BhbiAoY2xpY2spPVwibmRDbGVhckNhbnZhcygpXCIgY2xhc3M9XCJjbG9zZSB3YXJwXCI+PC9zcGFuPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5uZC1jYW52YXN7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS5uZC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9Lm5kLWNhbmNlbC1idXR0b257dG9wOjJweDtyaWdodDowO3Bvc2l0aW9uOmFic29sdXRlfS5jbG9zZXtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O292ZXJmbG93OmhpZGRlbjtib3JkZXI6MXB4IHNvbGlkICMwMDA7dG9wOjJweDtyaWdodDowO3Bvc2l0aW9uOmFic29sdXRlfS5jbG9zZTpob3Zlcjo6YWZ0ZXIsLmNsb3NlOmhvdmVyOjpiZWZvcmV7YmFja2dyb3VuZDpyZWR9LmNsb3NlOjphZnRlciwuY2xvc2U6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoycHg7d2lkdGg6MTAwJTt0b3A6NTAlO2xlZnQ6MDttYXJnaW4tdG9wOi0xcHg7YmFja2dyb3VuZDojMDAwfS5jbG9zZTo6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LmNsb3NlOjphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmRFelNpZ25pdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ25kY2FudmFzJykgcHVibGljIGNhbnZhcztcbiAgQFZpZXdDaGlsZCgnbmRDb250YWluZXInKSBwdWJsaWMgbmRDb250YWluZXI7XG5cbiAgQElucHV0KCkgcHVibGljIHdpZHRoOiBudW1iZXIgPSAyMDA7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDIwMDtcbiAgQElucHV0KCkgcHVibGljIG5kU3Ryb2tlQ29sb3I6IHN0cmluZyA9ICcjMDAwJztcbiAgQElucHV0KCkgcHVibGljIG5kTGluZVdpZHRoOiBudW1iZXIgPSAzO1xuICBAT3V0cHV0KCkgcHVibGljIGRhdGFTaWduaXR1cmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2FudmFzRWxlbWVudDogYW55O1xuICBsYXN0WDogbnVtYmVyO1xuICBsYXN0WTogbnVtYmVyO1xuICBtb3VzZUlzRG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICBibGFua0NhbnZhczogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGRhdGFSZXR1cm46IGFueSA9IHtcbiAgICBpc0VtcHR5Q2FudmFzOiB0cnVlLFxuICAgIGltYWdlOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IHRoaXMuY2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jYW52YXNFbGVtZW50LCAnd2lkdGgnLCB0aGlzLndpZHRoICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jYW52YXNFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm5kQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdzdHlsZScsICd3aWR0aDonICsgdGhpcy53aWR0aCArICdweCcpO1xuICAgIHRoaXMuYmxhbmtDYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5ibGFua0NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XG5cbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5kYXRhU2lnbml0dXJlLmVtaXQodGhpcy5kYXRhUmV0dXJuKTtcbiAgfVxuICBtb3VzZVVwKGV2KSB7XG4gICAgdGhpcy5tb3VzZUlzRG93biA9IGZhbHNlO1xuICAgIHRoaXMubmRHZXREYXRhU2lnbml0dXJlKCk7XG4gIH1cbiAgbW91c2VEb3duKGV2KSB7XG4gICAgdGhpcy5tb3VzZUlzRG93biA9IHRydWU7XG4gICAgdGhpcy5sYXN0WCA9IGV2LmxheWVyWDtcbiAgICB0aGlzLmxhc3RZID0gZXYubGF5ZXJZO1xuICB9XG4gIG1vdXNlTW92ZShldikge1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGlmICh0aGlzLm1vdXNlSXNEb3duKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRoaXMubGFzdFgsIHRoaXMubGFzdFkpO1xuICAgICAgY3R4LmxpbmVUbyhldi5sYXllclgsIGV2LmxheWVyWSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm5kU3Ryb2tlQ29sb3I7XG4gICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5uZExpbmVXaWR0aDtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIHRoaXMubGFzdFggPSBldi5sYXllclg7XG4gICAgICB0aGlzLmxhc3RZID0gZXYubGF5ZXJZO1xuICAgIH1cbiAgfVxuICBtb3VzZUxlYXZlKCkge1xuICAgIHRoaXMubW91c2VJc0Rvd24gPSBmYWxzZTtcbiAgICB0aGlzLm5kR2V0RGF0YVNpZ25pdHVyZSgpO1xuICB9XG4gIG5kQ2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKS5jbGVhclJlY3QoMCwgMCwgdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgpO1xuICAgIHRoaXMubmRHZXREYXRhU2lnbml0dXJlKCk7XG4gIH1cbiAgbmRHZXREYXRhU2lnbml0dXJlKCkge1xuICAgIHRoaXMuZGF0YVJldHVybi5pc0VtcHR5Q2FudmFzID0gdGhpcy5jYW52YXNFbGVtZW50LnRvRGF0YVVSTCgpID09IHRoaXMuYmxhbmtDYW52YXMudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5kYXRhUmV0dXJuLmltYWdlID0gdGhpcy5jYW52YXNFbGVtZW50LnRvRGF0YVVSTCgpO1xuICAgIHRoaXMuZGF0YVNpZ25pdHVyZS5lbWl0KHRoaXMuZGF0YVJldHVybik7XG4gIH1cblxufVxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5kRXpTaWduaXR1cmVDb21wb25lbnQgfSBmcm9tICcuL25kLWV6LXNpZ25pdHVyZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05kRXpTaWduaXR1cmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgTmRFelNpZ25pdHVyZUNvbXBvbmVudCBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZEV6U2lnbml0dXJlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIlJlbmRlcmVyMiIsIlZpZXdDaGlsZCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQThCRSxnQ0FBbUIsUUFBbUI7WUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzt5QkFoQk4sR0FBRzswQkFDRixHQUFHO2lDQUNJLE1BQU07K0JBQ1IsQ0FBQztpQ0FDTixJQUFJQSxpQkFBWSxFQUFFOytCQUs1QixLQUFLOytCQUNULFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDOzhCQUNqQztnQkFDaEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FFMEM7Ozs7UUFFM0MseUNBQVE7OztZQUFSO2FBRUM7Ozs7UUFDTSxnREFBZTs7OztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFD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