import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-extrato',
    templateUrl: './extrato.component.html',
    styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
    /* @Input -> DECORATOR: permite criar uma propriedade PROPERTY_BUINDING para o COMPONENT_APP-EXTRATO */
    @Input() transferencias: any[];

    constructor() {}

    ngOnInit(): void {
        
    }
}
