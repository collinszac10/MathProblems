import { Component, OnInit } from '@angular/core';
import { MathOptions } from './math-options';
import { MathProblem } from './math-problem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  items: MathProblem[] = [];
  ngOnInit() {}

  buildProblems(options: MathOptions) {
    console.log(options.numOfProblems);
    this.items = Array.from({ length: options.numOfProblems }, () => {
      const probType =
        options.problemTypes[
          Math.floor(Math.random() * options.problemTypes.length)
        ];
      return {
        numeratorLength: options.numeratorLength,
        denominatorLength: options.denominatorLength,
        problemType: probType,
        rightToLeftText: options.rightToLeftInput,
        disableNegativeAnswers: options.disableNegativeAnswers,
      };
    });
  }
}
