import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { chain, multiply, add, subtract, divide, smaller } from 'mathjs';

@Component({
  selector: 'app-math-problem',
  templateUrl: './math-problem.component.html',
  styleUrls: ['./math-problem.component.css'],
})
export class MathProblemComponent implements OnInit {
  constructor() {}

  @Input() numeratorLength: number;
  @Input() denominatorLength: number;
  @Input() problemType: string;
  @Input() rightToLeftText: boolean;
  @Input() disableNegativeAnswers: boolean;
  @Output() correctAnswer: EventEmitter<boolean> = new EventEmitter();
  numerator: number;
  denominator: number;
  answer: FormControl = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.buildMathProblem();
  }

  buildMathProblem() {
    this.numerator = this.generateNumber(this.numeratorLength);
    this.denominator = this.generateNumber(this.denominatorLength);
    if (this.problemType == 'Subtaction') {
      while (smaller(this.numerator, this.denominator)) {
        this.numerator = this.generateNumber(this.numeratorLength);
      }
    }
  }

  answerProblem($event) {
    switch (this.problemType) {
      case 'Addition': {
        this.correctAnswer.emit(this.answerAddition());
        break;
      }
      case 'Subtraction': {
        this.correctAnswer.emit(this.answerSubtraction());
        break;
      }
      case 'Multiply': {
        this.correctAnswer.emit(this.answerMultiplication());
        break;
      }
      case 'Division': {
        this.correctAnswer.emit(this.answerDivision());
        break;
      }
    }
  }

  private generateNumber(numberLength: number): number {
    return Math.floor(Math.random() * numberLength);
  }
  private answerAddition(): boolean {
    return this.answer.value == add(this.numerator, this.denominator);
  }
  private answerSubtraction(): boolean {
    return this.answer.value == subtract(this.numerator, this.denominator);
  }
  private answerMultiplication(): boolean {
    return this.answer.value == multiply(this.numerator, this.denominator);
  }
  private answerDivision(): boolean {
    return this.answer.value == divide(this.numerator, this.denominator);
  }
}
