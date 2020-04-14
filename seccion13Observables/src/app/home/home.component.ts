import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  numbersObsSubscription:Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // //creamos un observable
    const myNumbers = Observable.interval(1000)
      .map(
        (data:number)=>{
          return data*2; // map transforma un input en este caso al doble de su valor
        }
      );
 //cuando no se usa el rxjx compat
//  const myNumbers = Observable.interval(1000)
//       .pipe(map(
//         (data:number)=>{
//           return data*2; // map transforma un input en este caso al doble de su valor
//         }
//       ));


    this.numbersObsSubscription = myNumbers.subscribe(
      (number:number) => {
        console.log (number);
      }
    )

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      //este ya no se ejecuta porque el observable ya se completo
      setTimeout(() => {
        observer.next('third package');
      }, 6000);

    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy(){
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
