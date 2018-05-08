
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";



import { WebsiteComponent } from "./website/website.component";
    import { AstroComponent } from "./website/astro/astro.component";
    import { HoroscopeComponent } from "./website/horoscope/horoscope.component";
    import { AstrologyComponent } from "./website/astrology/astrology.component";
    import { NumerologyComponent } from "./website/numerology/numerology.component";
    import { PalmistryComponent } from "./website/palmistry/palmistry.component";
    import { VasthuComponent } from "./website/vasthu/vasthu.component";
    import { ReikiComponent } from "./website/reiki/reiki.component";
    import { PoojaComponent } from "./website/pooja/pooja.component";
    import { TempleComponent } from "./website/temple/temple.component";
    import { CommmunityComponent } from "./website/commmunity/commmunity.component";
    import { LocationComponent } from "./website/location/location.component";
    import { DevoteeshopComponent } from "./website/devoteeshop/devoteeshop.component";
    import { RudhrakshasComponent } from "./website/rudhrakshas/rudhrakshas.component";
    import { ShaligramComponent } from "./website/shaligram/shaligram.component";
    import { GemstonesComponent } from "./website/gemstones/gemstones.component";
    import { BooksComponent } from "./website/books/books.component";
    import { DairyComponent } from "./website/dairy/dairy.component";
    import { YantrasComponent } from "./website/yantras/yantras.component";
    import { TalktoastrologerComponent } from "./website/talktoastrologer/talktoastrologer.component";
    import { PiligrimageComponent } from "./website/piligrimage/piligrimage.component";
    import { OnlineCoursesComponent } from "./website/online-courses/online-courses.component";
    import { LiveComponent } from "./website/live/live.component";
    import { LearnComponent } from "./website/learn/learn.component";
    import { ContentComponent } from "./website/content/content.component";
    import { LoginComponent } from "./website/login/login.component";
    import { RegisterComponent } from "./website/register/register.component";
    import { ForgetComponent } from "./website/forget/forget.component";
    import { HomeComponent } from "./website/home/home.component";
    import { CalendarComponent } from './website/calendar/calendar.component';
    import { AnxietyComponent } from "./website/anxiety/anxiety.component";
    import { SignsComponent } from "./website/signs/signs.component";
    import { AllComponent } from "./website/all/all.component";
    import { KarnatakaComponent } from "./website/karnataka/karnataka.component";
    import { KeralaComponent } from "./website/kerala/kerala.component";
    import { MaharashtraComponent } from "./website/maharashtra/maharashtra.component";
    import { SubComponent } from "./website/sub/sub.component";
    import { AstrocourseComponent } from "./website/astrocourse/astrocourse.component";
    import { ReikicourseComponent } from "./website/reikicourse/reikicourse.component";
    import { NumercourseComponent } from "./website/numercourse/numercourse.component";
    import { PalmcourseComponent } from "./website/palmcourse/palmcourse.component";
    import { VasthucourseComponent } from "./website/vasthucourse/vasthucourse.component";
    import { AboutComponent } from "./website/about/about.component";
    import { DestinationComponent } from "./website/destination/destination.component";
    import { ContactComponent } from "./website/contact/contact.component";
    import { MysoreComponent } from "./website/destination/mysore";
    import { HubliComponent } from "./website/destination/hubli";
    import { MangaloreComponent } from "./website/destination/mangalore";
    import { BangloreComponent } from "./website/destination/banglore";
    import { BellaryComponent } from "./website/destination/bellary";
    import { VasthuserviceComponent } from './website/vasthuservice/vasthuservice.component';
    import { FormComponent } from './website/vasthuservice/form';

import { AuthGuard } from "./website/gaurds/auth.guard";
import { UserProfileComponent } from "./website/user-profile/user-profile.component";
import { ProfileComponent } from "./website/header/profile/profile.component";
import { ChangePasswordComponent } from "./website/header/change-password/change-password.component";

import { UpdateProfileComponent } from "./website/header/profile/updateprofile.component"
import { EditProfileComponent } from "./website/header/profile/editprofile.component";

const routes: Routes = [
    
    { path: '', component: WebsiteComponent, 
        children: [
            {
                path: '',
                pathMatch: "full",
                redirectTo: "devotee"
            },
            {path: 'devotee', component: HomeComponent},
            {path: 'astroservices', component: AstroComponent},
                {path: 'astroservices/horoscope', component: HoroscopeComponent},
                {path: 'astroservices/astrology', component: AstrologyComponent},
                {path: 'astroservices/numerology', component: NumerologyComponent},
                {path: 'astroservices/palmistry', component: PalmistryComponent},
                {path: 'astroservices/vasthu', component: VasthuComponent},
                {path: 'astroservices/reiki', component: ReikiComponent},
                {path: 'astroservices/reiki/anxiety', component: AnxietyComponent},
                {path: 'astroservices/vasthuservice', component: VasthuserviceComponent},
                {path: 'astroservices/form', component: FormComponent},


                { path: 'sign', component: SignsComponent},

            {path: 'poojaservices', component:PoojaComponent},
                {path: 'poojaservices/temple', component: TempleComponent, canActivate: [AuthGuard]},
                {path: 'poojaservices/commmunity', component: CommmunityComponent, canActivate: [AuthGuard]},
                {path: 'poojaservices/location', component: LocationComponent, canActivate: [AuthGuard],
                    children : [
                        {
                            path: '',
                            pathMatch: "full",
                            redirectTo: "all"
                        },
                        {path:'all', component: AllComponent},
                        {path:'karnataka', component: KarnatakaComponent},
                        {path:'kerala', component: KeralaComponent},
                        {path:'maharashtra', component: MaharashtraComponent},
                        {path:'mizoram', component: AllComponent},
                    ]
                },

            {path: 'devoteeshop', component: DevoteeshopComponent},
                {path: 'devoteeshop/rudhrakshas', component: RudhrakshasComponent},
                {path: 'devoteeshop/shaligram', component: ShaligramComponent},
                {path: 'devoteeshop/gemstones', component: GemstonesComponent},
                {path: 'devoteeshop/books', component: BooksComponent},
                {path: 'devoteeshop/dairy', component: DairyComponent},
                {path: 'devoteeshop/yantras', component: YantrasComponent},
                {path: 'devoteeshop/vasthu', component: VasthuComponent},
                {path: 'devoteeshop/calendars', component: CalendarComponent},

            {path: 'talktoastrologers', component: TalktoastrologerComponent},
            {path: 'piligrimages', component: PiligrimageComponent,
                children : [
                    { 
                        path:'',
                        pathMatch: "full",
                        redirectTo: "about"
                    },
                    { path: 'about', component: AboutComponent},
                    { path: 'destination', component: DestinationComponent,
                        children : [
                            { 
                                path:'',
                                pathMatch: "full",
                                redirectTo: "mysore"
                            },
                            { path: 'mysore', component: MysoreComponent},
                            { path: 'hubli', component: HubliComponent},
                            { path: 'mangalore', component: MangaloreComponent},
                            { path: 'banglore', component: BangloreComponent},
                            { path: 'bellary', component: BellaryComponent},
                        ]
                    },

                    { path: 'contact', component: ContactComponent},
                ]
            },

            {path: 'onlinecourses', component: OnlineCoursesComponent},
                {path: 'onlinecourses/livelecturers', component: LiveComponent, canActivate: [AuthGuard]},
                {path: 'onlinecourses/learnatdevotee', component: LearnComponent, canActivate: [AuthGuard]},
                {path: 'onlinecourses/content', component: ContentComponent, canActivate: [AuthGuard]},
                { path: 'onlinecourses/content/contentaccess', component: SubComponent},
                { path:'onlinecourses/content/contentaccess/astrocourse', component: AstrocourseComponent},
                { path:'onlinecourses/content/contentaccess/vasthucourse',component: VasthucourseComponent},
                { path:'onlinecourses/content/contentaccess/numerocourse', component: NumercourseComponent},
                { path: 'onlinecourses/content/contentaccess/palmcourse', component: PalmcourseComponent},
                { path:'onlinecourses/content/contentaccess/reikicourse', component: ReikicourseComponent},

            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'forget', component: ForgetComponent},
            { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
            { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuard]},
            {path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard]},
            { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
        ]
        
    },

  ];
  
  
  export const routing = RouterModule.forRoot(routes);  