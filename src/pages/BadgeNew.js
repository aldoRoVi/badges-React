import React from 'react';
import header from '../images/badge-header.svg';
import '../pages/styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
class BadgeNew extends React.Component{
    state = {form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }};
    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value,
            }
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading:true,error:null})
        try {
            await api.badges.create(this.state.form);
        } catch (error) {
            this.setState({loading:false,error:error})
        }
    };
    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                        firstName={this.state.form.firstName || 'First_Name'}
                        lastName={this.state.form.lastName || 'last_name'}
                        jobTitle={this.state.form.jobTitle || 'job_title'}
                        twitter={this.state.form.twitter || 'twiter'}
                        email={this.state.form.email || 'email'}
                        avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                        />
                        </div>
                        <div className="col-6">
                            <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;