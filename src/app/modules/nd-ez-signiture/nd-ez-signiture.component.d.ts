import { OnInit, EventEmitter, Renderer2 } from '@angular/core';
export declare class NdEzSignitureComponent implements OnInit {
    renderer: Renderer2;
    canvas: any;
    ndContainer: any;
    width: number;
    height: number;
    ndStrokeColor: string;
    ndLineWidth: number;
    dataSigniture: EventEmitter<{}>;
    canvasElement: any;
    lastX: number;
    lastY: number;
    mouseIsDown: boolean;
    blankCanvas: any;
    dataReturn: any;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    mouseUp(ev: any): void;
    mouseDown(ev: any): void;
    mouseMove(ev: any): void;
    mouseLeave(): void;
    ndClearCanvas(): void;
    ndGetDataSigniture(): void;
}
