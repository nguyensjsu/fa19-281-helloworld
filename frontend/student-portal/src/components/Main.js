import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Profile/Login';
import Signup from './Profile/Signup';
import Profile from './Profile/Profile';
import CoursesSearch from './Course/CoursesSearch';
import Home from './Home/Home';
import CourseDetail from './Course/CourseDetail';
import AddToCartConfirmation from './Enrollment/AddToCartConfirmation';
import EnrollmentCart from './Enrollment/EnrollmentCart';
import Enrollment from './Enrollment/Enrollment';
import CreateCourse from './Course/CreateCourse';
import Payment from './Payment/Payment';
import ViewGrades from './Grade/ViewGrades'
import SubmitGrade from './Grade/SubmitGrade'
import Announcement from './Profile/Announcements';
import Analytics from './AdminDashboard/Analytics';
import MakeAnnouncement from './Profile/MakeAnnouncement';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />  
                <Route path="/login" component={Login} />  
				<Route path="/announcements" component={Announcement} />  
                <Route path="/signup" component={Signup} />  
                <Route path="/profile" component={Profile} />  
                <Route exact path="/courses" component={CoursesSearch} />
                <Route exact path="/createcourse" component={CreateCourse} />
                <Route exact path="/courses/:CourseID" component={CourseDetail} />
                <Route path="/addToCartConfirmation" component={AddToCartConfirmation} />
                <Route path="/enrollmentCart/:studentId" component={EnrollmentCart} />
                <Route path="/enrollment/:studentId" component={Enrollment} />
                <Route path="/payment/:studentId" component={Payment} />
                <Route exact path="/grades/view" component={ViewGrades} />
                <Route exact path="/grades/submit" component={SubmitGrade} />
                <Route path="/analytics" component={Analytics} />
				<Route path="/addannouncement" component={MakeAnnouncement} />

            </div>
        )
    }
    
}

export default Main;