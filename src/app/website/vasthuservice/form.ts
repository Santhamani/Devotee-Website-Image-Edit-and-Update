import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template:`<section>
  <div class="container">
      <div>
          <div class="row">
             <div class="col-md-8" style="margin: auto;float: none;">
                  <div class="uploadform">
                      <form action="#">
                          <h3 class="text-center" id="talk">Talk to Astrologer Now</h3>
                          <div class="row" id="talk">
                              <div class="col-md-6">
                                  <div class="form-group">
                                  <label>Full Name:</label>
                                  <input type="text" class="form-control" required>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label>Place of Birth:</label>
                                      <input type="text" class="form-control" required>
                                  </div>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-md-6">
                                  <label>Date of Birth:</label>
                                  <div class="form-group">
                                      <input type="date" name="x" class="form-control" required>              
                                  </div>
                              </div>
                          
                              <div class="col-md-6">
                                  <label>Time of Birth:</label>
                                  <div class="form-group">
                                      <input type="time" name="x" class="form-control" required>                     
                                  </div>
                              </div>

                          </div>

                          <div class="row">
                              <div class="col-md-6">
                                  <label>Email Id:</label>
                                  <div class="form-group">
                                      <input type="email" class="form-control" required>       
                                  </div>
                              </div>

                              <div class="col-md-6">
                                  <div class="form-group" id="horo">
                                      <label>Predefined Questions:</label>
                                      <select class="single form-control footer_select month">
                                          <option value="">Select Your Questions</option>
                                          <option value="1">Horoscope</option>
                                          <option value="3">Astrology</option>
                                          <option value="2">Numerology</option>
                                          <option value="4">Vasthu</option>
                                          <option value="5">Reiki</option>
                                          <option value="6">Palmistry</option>
                                      </select>
                                        
                                  </div>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-md-6">
                                  <label>Mobile no:</label>
                                  <div class="form-group">
                                      <input type="text" class="form-control" required>       
                                  </div>
                              </div>

                              <div class="col-md-6">
                                  <div class="form-group">
                                      <label>Address:</label>
                                      <input type="text" class="form-control" required>
                                  </div>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-md-12">
                                  <div class="form-group">
                                      <label>Comments:</label>
                                      <textarea class="form-control" rows="3" required></textarea>
                                  </div>
                              </div>  
                          </div>

                          <div class="row">                        
                              <div class="col-md-12">
                                  <div class="form-group">
                                      <label>Attachment:</label>
                                      <input type="file" id="myFile" required>
                                  </div>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-md-12">
                                  
                                  <div class="form-group" id="sub">
                                      <input type="submit" class="btn btn-primary">
                                  </div>
                             
                              </div>
                          </div>
                      </form>
                  </div>
                  </div>
              </div>
          </div>
      </div>
</section>`,

styles :[`


.new{
    margin-left: 45%;
}

#sub{
    text-align:center;
    padding-bottom: 30px;
}
#talk{
    padding-top: 30px;
}


`]

})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}