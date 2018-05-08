

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages/module';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
  import { AnxietyComponent } from './website/anxiety/anxiety.component';
  import { AstroComponent } from './website/astro/astro.component';
  import { AstrologyComponent } from './website/astrology/astrology.component';
  // import { BlogComponent } from './website/blog/blog.component';
  import { BooksComponent } from './website/books/books.component';
  import { CommmunityComponent } from './website/commmunity/commmunity.component';
  import { ContentComponent } from './website/content/content.component';
  import { DairyComponent } from './website/dairy/dairy.component';
  import { DevoteeshopComponent } from './website/devoteeshop/devoteeshop.component';
  import { ForgetComponent } from './website/forget/forget.component';
  import { AuthGuard } from './website/gaurds/auth.guard';
  import { NotAuthGuard } from './website/gaurds/notAuth.guard';
  import { GemstonesComponent } from './website/gemstones/gemstones.component';
  import { HomeComponent } from './website/home/home.component';
  import { HoroscopeComponent } from './website/horoscope/horoscope.component';
  import { VasthuserviceComponent } from './website/vasthuservice/vasthuservice.component';
  import { FormComponent } from './website/vasthuservice/form';
  
  import { LearnComponent } from './website/learn/learn.component';
  import { LiveComponent } from './website/live/live.component';
  import { LocationComponent } from './website/location/location.component';
  import { LoginComponent } from './website/login/login.component';
  import { NumerologyComponent } from './website/numerology/numerology.component';
  import { OnlineCoursesComponent } from './website/online-courses/online-courses.component';
  import { PalmistryComponent } from './website/palmistry/palmistry.component';
  import { PiligrimageComponent } from './website/piligrimage/piligrimage.component';
  import { PoojaComponent } from './website/pooja/pooja.component';
  import { RegisterComponent } from './website/register/register.component';
  // import { ProfileComponent } from './website/profile/profile.component';
  import { ReikiComponent } from './website/reiki/reiki.component';
  import { RudhrakshasComponent } from './website/rudhrakshas/rudhrakshas.component';
  import { ShaligramComponent } from './website/shaligram/shaligram.component';
  import { TalktoastrologerComponent } from './website/talktoastrologer/talktoastrologer.component';
  import { TempleComponent } from './website/temple/temple.component';
  import { VasthuComponent } from './website/vasthu/vasthu.component';
  import { YantrasComponent } from './website/yantras/yantras.component';
  import { LoginService } from './website/services/login.service';
  import { BlogService } from './website/services/blog.service';
  import { ProfileService } from './website/services/profile.service';
  import { CalendarComponent } from './website/calendar/calendar.component';
  import { SubComponent } from './website/sub/sub.component';
  import { HeaderComponent } from './website/header/header.component';
  import { SignsComponent } from './website/signs/signs.component';
  import { AllComponent } from './website/all/all.component';
  import { KarnatakaComponent } from './website/karnataka/karnataka.component';
  import { MaharashtraComponent } from './website/maharashtra/maharashtra.component';
  import { MizoramComponent } from './website/mizoram/mizoram.component';
  import { KeralaComponent } from './website/kerala/kerala.component';
  import { AstrocourseComponent } from './website/astrocourse/astrocourse.component';
  import { ReikicourseComponent } from './website/reikicourse/reikicourse.component';
  import { NumercourseComponent } from './website/numercourse/numercourse.component';
  import { PalmcourseComponent } from './website/palmcourse/palmcourse.component';
  import { VasthucourseComponent } from './website/vasthucourse/vasthucourse.component';
  import { DestinationComponent } from './website/destination/destination.component';
  import { AboutComponent } from './website/about/about.component';
  import { ContactComponent } from './website/contact/contact.component';
  import { HubliComponent } from './website/destination/hubli';
  import { MangaloreComponent } from './website/destination/mangalore';
  import { BangloreComponent } from './website/destination/banglore';
  import { BellaryComponent } from './website/destination/bellary';
  import { MysoreComponent } from './website/destination/mysore';


import { UserService } from './website/services/user.service';
import { SharedModule } from './website/shared/shared.module';
import { AuthService } from './website/services/auth.service';
import { routing } from './app.routes';
import { ProfileComponent } from './website/header/profile/profile.component';
import { ChangePasswordComponent } from './website/header/change-password/change-password.component';

import { UpdateProfileComponent } from "./website/header/profile/updateprofile.component";
import { EditProfileComponent } from "./website/header/profile/editprofile.component";

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
      AnxietyComponent,
      AstroComponent,
      AstrologyComponent,
      // BlogComponent,
      BooksComponent,
      CommmunityComponent,
      ContentComponent,
      DairyComponent,
      DevoteeshopComponent,
      ForgetComponent,
      GemstonesComponent,
      HomeComponent,
      HoroscopeComponent,
      LearnComponent,
      LiveComponent,
      LocationComponent,
      LoginComponent,
      NumerologyComponent,
      OnlineCoursesComponent,
      PalmistryComponent,
      PiligrimageComponent,
      PoojaComponent,
      RegisterComponent,
      // ProfileComponent,
      ReikiComponent,
      RudhrakshasComponent,
      ShaligramComponent,
      TalktoastrologerComponent,
      TempleComponent,
      VasthuComponent,
      YantrasComponent,
      CalendarComponent,
      HeaderComponent,
      SignsComponent,
      SubComponent,
      AllComponent,
      KarnatakaComponent,
      KeralaComponent,
      MaharashtraComponent,
      MizoramComponent,
      AstrocourseComponent,
      ReikicourseComponent,
      NumercourseComponent,
      PalmcourseComponent,
      VasthucourseComponent,
      DestinationComponent,
      AboutComponent,
      ContactComponent,
      HubliComponent, 
      MangaloreComponent, 
      BangloreComponent, 
      BellaryComponent, 
      MysoreComponent,
      VasthuserviceComponent,
      FormComponent,
      ProfileComponent,
      ChangePasswordComponent,
      UpdateProfileComponent,
      EditProfileComponent,
      
   

  ],

  imports: [
    BrowserModule, routing, FormsModule, HttpModule, FlashMessagesModule.forRoot(), ReactiveFormsModule,SharedModule
  ],
  
  providers: [ AuthGuard, NotAuthGuard, LoginService,BlogService,ProfileService,UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
