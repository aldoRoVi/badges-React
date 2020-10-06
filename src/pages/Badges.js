import React from  'react';
import confLogo from '../images/badge-header.svg'
import '../pages/styles/Badges.css';
import BadgesList from '../components/BadgeList';
import { Link } from 'react-router-dom';
import api from '../api';
import  PageLoading  from "../components/PageLoading";
class Badges extends React.Component {
    state = {
        loading:true,
        error:null,
        data:undefined
    }
    constructor(props){
        super(props);
        console.log("1");
    }

    componentDidMount(){
        console.log("3");
        this.fetchData();
    }
    fetchData = async () =>{
        this.setState({loading:true,error:null});
        try{
            const data = await api.badges.list();
            console.log("TCL: Badges -> fetchData -> data", data)
            this.setState({loading:false,data:data});
        }catch(error){
            this.setState({loading:false,error:error});
        }
    }
    render(){
        console.log("2")
        if(this.state.loading === true){
            return <PageLoading />
        }
        if(this.state.error){
            return `Error:${this.state.error.message}`
        }
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badges
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;