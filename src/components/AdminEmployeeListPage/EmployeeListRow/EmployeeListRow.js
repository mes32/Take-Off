import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeListRow extends Component {

    // Convert hours to nicely formatted representation of days
    // Note: Based on an 8 hour workday
    displayHoursAsDays = (hours) => {
        return (hours / 8.0).toFixed(1);
    }

    // Add one day of vacation to this rows's employee
    addVacation = () => {
        console.log('In EmployeeListRow pressed addVacation()');
        console.log(this.props.employee.id);
        
        this.props.dispatch({type: 'ADD_VACATION_DAY', payload: this.props.employee.id});
    }

    // Add one day of sick and safe leave to this rows's employee
    addSick = () => {
        console.log('In EmployeeListRow pressed addSick()');
        this.props.dispatch({type: 'ADD_SICK_DAY', payload: this.props.employee.id});
    }

    // Bring up a page for editing this row's employee data
    edit = () => {
        console.log('In EmployeeListRow pressed edit()');
    }

    // Deactivate this row's employee
    deactivate = () => {
        console.log('In EmployeeListRow pressed deactivate()');
    }

    // Delete this row's employee
    delete = () => {
        console.log('In EmployeeListRow pressed delete()');
        console.log(this.props.employee.id);
        const action = {type: 'DELETE_EMPLOYEE'}
        
    }

    // Show this component on the DOM
    render() {
        const employee = this.props.employee;
        return (
            
            
            <tr>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.username}</td>
                <td>{employee.start_date}</td>
                <td>{this.displayHoursAsDays(employee.vacation_hours)} <button onClick={this.addVacation}>+</button></td>
                <td>{this.displayHoursAsDays(employee.sick_hours)} <button onClick={this.addSick}>+</button></td>
                <td><button onClick={this.edit}>Edit</button></td>
                <td><button onClick={this.deactivate}>Deactivate</button></td>
                <td><button onClick={this.delete}>Delete</button></td>
            </tr>
        );
    }
}

export default connect()(EmployeeListRow);