import React, {Component} from 'react';

export default class Profile extends Component {

    state = {
        user_id : 0
    }
    
    getUserId = () => {
        const user_id = 0;
        user_id = localStorage.getItem('user_id');
        return user_id
    }

    render() {
        
        return (
            <div class="container p-4">
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="card text-center">
                        <div class="card-body">
                            {{username}}
                        </div>
                    </div>
                </div>
        
            </div>
        </div>

        );
    }
}
