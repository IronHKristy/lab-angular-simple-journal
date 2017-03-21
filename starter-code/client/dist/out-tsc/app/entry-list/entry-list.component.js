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
import { JournalEntriesService } from '../journal-entries.service';
var EntryListComponent = (function () {
    function EntryListComponent(servizzle) {
        this.servizzle = servizzle;
        this.entries = [];
        this.errorMessage = '';
    }
    EntryListComponent.prototype.ngOnInit = function () {
        this.getListizzle();
    };
    EntryListComponent.prototype.getListizzle = function () {
        var _this = this;
        return this.servizzle.getEntrizzles()
            .then(function (allEntrizzles) {
            _this.entries = allEntrizzles;
        })
            .catch(function (err) {
            console.log('Error in entry-listizzle my nizzle, get on that shizzle');
        });
    };
    return EntryListComponent;
}());
EntryListComponent = __decorate([
    Component({
        selector: 'app-entry-list',
        templateUrl: './entry-list.component.html',
        styleUrls: ['./entry-list.component.css']
    }),
    __metadata("design:paramtypes", [JournalEntriesService])
], EntryListComponent);
export { EntryListComponent };
//# sourceMappingURL=../../../../src/app/entry-list/entry-list.component.js.map