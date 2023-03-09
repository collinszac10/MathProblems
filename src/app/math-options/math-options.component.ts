import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { problemTypes } from '../problem-types';
import { MathOptions } from '../math-options';

@Component({
  selector: '[app-math-options]',
  templateUrl: './math-options.component.html',
  styleUrls: ['./math-options.component.css'],
})
export class MathOptionsComponent implements OnInit {
  sidebarVisible: boolean;
  rightToLeftInput: boolean;
  numOfProblems: number;
  numeratorLength: number;
  denominatorLength: number;
  disableNegativeAnswers: boolean;
  problemTypes = [];
  selectedProblemTypes: string[];
  @Output('mathOptions') mathOptions: EventEmitter<MathOptions> =
    new EventEmitter();

  ngOnInit() {
    this.problemTypes = problemTypes;
    this.sidebarVisible = false;
    this.rightToLeftInput = true;
    this.numOfProblems = 25;
    this.numeratorLength = 2;
    this.denominatorLength = 2;
    this.disableNegativeAnswers = true;
    this.selectedProblemTypes = [
      'Addition',
      'Subtraction',
      'Multiply',
      'Division',
    ];
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  onChange($event) {
    console.log('On Change');
    var options = this.buildMathOptions();
    this.mathOptions.emit(options);
  }

  buildMathOptions(): MathOptions {
    return {
      problemTypes: this.problemTypes,
      rightToLeftInput: this.rightToLeftInput,
      numeratorLength: this.numeratorLength,
      denominatorLength: this.denominatorLength,
      numOfProblems: this.numOfProblems,
      disableNegativeAnswers: this.disableNegativeAnswers,
    } as MathOptions;
  }
}
