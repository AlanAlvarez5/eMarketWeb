import React from 'react';

export default class Profile extends React.Component {

    state = {
        user_id : '',
        username: ''
    }

    /*
    setTemporalUserId = () => {
        this.setState({user_id: '0'});
        localStorage.setItem('user_id', '0')
    }
    
    getUserId = () => {
        const user_id = 0;
        localStorage.setItem('user_id', '0')
        try{
            user_id = localStorage.getItem('user_id');
            if (user_id){
                this.setState({user_id: user_id});
            }
        }catch(err){
            console.log("Error en el user id")
            console.log(err);
        }
        console.log("user_id:" + user_id)
        return user_id
    }
    */

    testStorage = () => {
        this.setState({user_id: 7});
        const {user_id} = this.state.user_id
        localStorage.setItem('user_id', user_id)

        var result = localStorage.getItem('user_id')
        console.log("resultado: " + result);
        console.log("state: " + this.state.user_id)
    }

    testState = async () => {
        const r = ''
        await this.setState({username: 'Diego'})
        .then(localStorage.setItem('username', this.state.username))
        .then(r = localStorage.getItem('username'))
        console.log(this.state.username)
        return r
    }

    componentDidMount(){
    //     this.setTemporalUserId();
    //     this.getUserId();
        fetch('/username')
          .then(res => res.json())
          .then(username => this.setState({username: username}));
        // this.testState();
    }
    render() {
        
        return (
            <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card text-center">
                        <div className="card-body">
                            {this.state.username}
                        </div>
                    </div>
                </div>
        
            </div>
        </div>

        );
    }
}
