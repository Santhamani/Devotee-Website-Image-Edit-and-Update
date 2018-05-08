import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysore',
  template:`<div class="container">
  <div class="row">
  <div class="col-lg-6">
          <img src="assets/images/MANGA.jpg" class="img-fluid">
  </div>
  <div class="col-lg-6" id="new">
        <p>Mysore is yet to, and perhaps will never, get over its past.
         A past that’s made of kings, queens, conquests, rich patrons, 
         extravagant durbars and pearled hallways must be hard to get over.
         The streets in Mysore are old and a good part of history can be traced 
         by following their winding paths. The city that gets its name from Mahishasura, 
         the troublemaker demon who was slain by the Goddess Chamundeshwari: whose 
         temple atop the Chamundi Hill watches all over the city has played host to 
         the reign of a long line of Wadiyars, Tipu Sultan and the British Raj.</p>
        </div>
        </div>
</div>`,
styles :[`
#new{
  margin-top:80px;
  text-align:"justify";
}
  img{
    margin-top:20px;
  }`]

})
export class MangaloreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
