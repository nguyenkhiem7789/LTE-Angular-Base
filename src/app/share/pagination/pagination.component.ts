import {Component, Input, OnInit, Output, EventEmitter, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaginationComponent),
      multi: true
    }
  ]
})
export class PaginationComponent implements OnInit {
  @Input('ngModel') pageIndex = 0;
  @Input() pageSize = 10;
  @Input() totalRow = 20;
  @Input() isLoading = true;
  @Output() pageChange = new EventEmitter<any>();

  page = 0;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.page = obj + 1;
    console.log(this.page);
  }

  onPageChange(page): void {
    this.pageIndex = page - 1;
    this.pageChange.emit(this.pageIndex);
  }
}
