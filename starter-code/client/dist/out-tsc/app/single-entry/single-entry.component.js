var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../journal-entries.service';
var SingleEntryComponent = (function () {
    function SingleEntryComponent(myRoute, servizzle, myNavigator) {
        this.myRoute = myRoute;
        this.servizzle = servizzle;
        this.myNavigator = myNavigator;
    }
    SingleEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myRoute.params.subscribe(function (params) {
            _this.getDatEntrizzleDizzle(params['id']);
        });
    };
    SingleEntryComponent.prototype.getDatEntrizzleDizzle = function (idizzle) {
        var _this = this;
        this.servizzle.getOneEntrizzle(idizzle)
            .then(function (entrizzle) {
            console.log(entrizzle);
            _this.entry = entrizzle;
        })
            .catch(function (err) {
            console.log("Fizzle on Javi's pizzle", err);
        });
    };
    return SingleEntryComponent;
}());
SingleEntryComponent = __decorate([
    Component({
        selector: 'app-single-entry',
        templateUrl: './single-entry.component.html',
        styleUrls: ['./single-entry.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        JournalEntriesService,
        Router])
], SingleEntryComponent);
export { SingleEntryComponent };
//# sourceMappingURL=../../../../src/app/single-entry/single-entry.component.js.map