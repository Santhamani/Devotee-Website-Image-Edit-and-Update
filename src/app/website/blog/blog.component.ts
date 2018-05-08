import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  processing = false;
  username;
  blogPosts;

  constructor(
    private formBuilder: FormBuilder,
    private authService: LoginService,
    private blogService: BlogService
  ) {
    this.createNewBlogForm(); // Create new blog form on start up
  }

  // Function to create new blog form
  createNewBlogForm() {
    this.form = this.formBuilder.group({
      // Title field
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        this.alphaNumericValidation
      ])],
      // Name field
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(5)
        // this.nameValidation
      ])],
      // DOB field
      date_of_birth: ['', Validators.compose([
        Validators.required,
        // Validators.maxLength(35),
        // Validators.minLength(5),
        this.dobValidation
      ])],
      // DOB field
      time_of_birth: ['', Validators.compose([
        Validators.required,
        // Validators.maxLength(35),
        // Validators.minLength(5),
        // this.tobValidation
      ])],
      // Raasi field
      raasi: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(3)
        // this.nameValidation
      ])],
      // Nakshatram field
      nakshatram: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(3)
        // this.nameValidation
      ])],
      // Birth Location field
      birth_location: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(35),
        Validators.minLength(3)
        // this.nameValidation
      ])],
      // Gender field
      gender: ['', Validators.compose([
        Validators.required,
        // Validators.maxLength(35),
        // Validators.minLength(3)
        // this.nameValidation
      ])],
      // Gender field
      address: ['', Validators.compose([
        Validators.required,
        // Validators.maxLength(35),
        // Validators.minLength(3)
        // this.nameValidation
      ])],
      // Phone No field
      phoneno: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(10),
        this.phonenoValidation
      ])],
      // Body field
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5)
      ])],
      
    })
  }

  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('title').enable(); // Enable title field
    this.form.get('body').enable(); // Enable body field
    this.form.get('name').enable(); //Enable name field
    this.form.get('date_of_birth').enable(); //Enable dob field
    this.form.get('time_of_birth').enable(); //Eable TOB field
    this.form.get('raasi').enable(); //Enable raasi field
    this.form.get('nakshatram').enable(); //Enable nakshatram field
    this.form.get('birth_location').enable() //Enable Birth Location
    this.form.get('gender').enable(); //Enable gender
    this.form.get('address').enable(); //Enable address
    this.form.get('phoneno').enable(); //Enable phone number
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('title').disable(); // Disable title field
    this.form.get('body').disable(); // Disable body field
    this.form.get('name').disable(); //Disable name field
    this.form.get('date_of_birth').disable(); //Disable DOB field
    this.form.get('time_of_birth').disable(); //Disable TOB field
    this.form.get('raasi').disable(); //Disable raasi field
    this.form.get('nakshatram').disable(); //Disable nakshatram field
    this.form.get('birth_location').disable(); //Disable birth location
    this.form.get('gender').disable(); //Disable Gender
    this.form.get('address').disable(); //Disable address
    this.form.get('phoneno').disable(); //Disable phone number
  }

  // Validation for title
  alphaNumericValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
    // Check if test returns false or true
    if (regExp.test(controls.value)) {
      return null; // Return valid
    } else {
      return { 'alphaNumericValidation': true } // Return error in validation
    }
  }

    // Validation for dob
    dobValidation(controls) {
      const regExp = new RegExp(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/); // Regular expression to perform test
      // Check if test returns false or true
      if (regExp.test(controls.value)) {
        return null; // Return valid
      } else {
        return { 'dobValidation': true } // Return error in validation
      }
    }

    //  // Validation for dob
    //  tobValidation(controls) {
    //   const regExp = new RegExp(/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/); // Regular expression to perform test
    //   // Check if test returns false or true
    //   if (regExp.test(controls.value)) {
    //     return null; // Return valid
    //   } else {
    //     return { 'tobValidation': true } // Return error in validation
    //   }
    // }
     // Function to validate password
     phonenoValidation(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[0-9]|\$/);
    // Test password against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid password
    } else {
      return { 'phonenoValidation': true }; // Return as invalid password
    }
  }
  

  // Function to display new blog form
  newBlogForm() {
    this.newPost = true; // Show new blog form
  }

  // Reload blogs on current page
  reloadBlogs() {
    this.loadingBlogs = true; // Used to lock button
    this.getAllBlogs(); // Add any new blogs to the page
    setTimeout(() => {
      this.loadingBlogs = false; // Release button lock after four seconds
    }, 4000);
  }

  // Function to post a new comment on blog post
  draftComment() {

  }

  // Function to submit a new blog post
  onBlogSubmit() {
    this.processing = true; // Disable submit button
    this.disableFormNewBlogForm(); // Lock form
    // Create blog object from form fields
    const blog = {
      title: this.form.get('title').value, // Title field
      body: this.form.get('body').value, // Body field
      name: this.form.get('name').value, // Name field
      date_of_birth: this.form.get('date_of_birth').value, //DOB field
      time_of_birth: this.form.get('time_of_birth').value, //TOB field
      raasi: this.form.get('raasi').value, //Raasi filed
      nakshatram: this.form.get('nakshatram').value, //Nakshatram
      birth_location: this.form.get('birth_location').value, //Birth Location value
      gender:this.form.get('gender').value, //Gender value
      address:this.form.get('address').value, //Gender value
      phoneno:this.form.get('phoneno').value, //Phone number value
      createdBy: this.username // CreatedBy field
    }

    // Function to save blog into database
    this.blogService.newBlog(blog).subscribe(data => {
      // Check if blog was saved to database or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
        this.enableFormNewBlogForm(); // Enable form
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        this.getAllBlogs();
        // Clear form data after two seconds
        setTimeout(() => {
          this.newPost = false; // Hide form
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields
          this.enableFormNewBlogForm(); // Enable the form fields
        }, 2000);
      }
    });
  }

  // Function to go back to previous page
  goBack() {
    window.location.reload(); // Clear all variable states
  }

  // Function to get all blogs from the database
  getAllBlogs() {
    // Function to GET all blogs from database
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs; // Assign array to use in HTML
    });
  }

  ngOnInit() {
    // Get profile username on page load
    // this.authService.getProfile().subscribe(profile => {
    //   this.username = profile.user.username; // Used when creating new blog posts and comments
    // });

    this.getAllBlogs(); // Get all blogs on component load
  }
  
}
